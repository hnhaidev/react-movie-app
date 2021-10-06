import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, TextInput, View, StyleSheet, ActivityIndicator } from "react-native";

import Screen from "../component/Screen";
import { RED, white, INPUT } from "../helper/Color";
import MovieList from "../component/MovieList";

import Icon from "react-native-vector-icons/Ionicons";
import BackIcon from "../component/Utils/BackIcon";
import { searchMovie } from "../api/url";

const SearchScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const requestMovie = async (text) => {
    if (text !== "") {
      setLoaded(true);
      await searchMovie(text).then((search) => {
        if (search) setSearchText(search);
        setLoaded(false);
      });
    }
  };

  const RenderHeaderTitle = () => {
    const title = "Movies";

    return (
      <View>
        <View style={{ flexDirection: "row" }}>
          <BackIcon
            style={{ flex: 1, paddingLeft: 12, alignSelf: "flex-start", marginTop: 16 }}
            navigation={navigation}
            color={white}
          />
          <Text style={_styles.headerTitle}>{`Search ${title}`}</Text>
          <View style={{ flex: 1, paddingRight: 12 }}></View>
        </View>
        <View style={_styles.titleBar} />
      </View>
    );
  };

  const RenderSearchText = () => {
    return (
      <View style={_styles.searchContainer}>
        <Icon name={"search"} size={20} style={{ margin: 12 }} color={white} />
        <View style={{ alignSelf: "center", flex: 1 }}>
          <TextInput
            style={_styles.searchInput}
            placeholder={"Tìm kiếm"}
            onChangeText={(text) => requestMovie(text)}
            returnKeyType={"search"}
            autoCorrect={false}
            placeholderTextColor="#FAFAFA"
          />
        </View>
      </View>
    );
  };

  const RenderListMovies = () => {
    return <MovieList results={searchText} navigation={navigation} />;
  };

  return (
    <Screen>
      {RenderHeaderTitle()}
      {RenderSearchText()}
      {loaded ? (
        <View style={{ width: "100%", alignItems: "center", justifyContent: "center", height: "50%" }}>
          <ActivityIndicator size={24} color="#ffffff" />
        </View>
      ) : (
        RenderListMovies()
      )}
    </Screen>
  );
};

export default SearchScreen;

SearchScreen.propTypes = {
  route: PropTypes.any,
  navigation: PropTypes.object,
};

const _styles = StyleSheet.create({
  headerTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 20,
    flex: 8,
    textAlign: "center",
    alignSelf: "center",
    color: white,
    marginTop: 16,
  },

  titleBar: {
    width: 40,
    height: 5,
    backgroundColor: RED,
    marginTop: 4,
    marginBottom: 12,
    alignSelf: "center",
  },

  subTitle: {
    margin: 16,
    marginTop: 5,
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    textAlign: "center",
    alignSelf: "center",
    width: "70%",
    color: white,
  },

  searchContainer: {
    marginHorizontal: 16,
    backgroundColor: INPUT,
    borderRadius: 24,
    flexDirection: "row",
    color: white,
  },

  searchInput: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    flex: 1,
    marginRight: 12,
    color: white,
  },
});
