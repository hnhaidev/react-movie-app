import { PropTypes } from "prop-types";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, ActivityIndicator, TouchableWithoutFeedback } from "react-native";
import { RED, white } from "../helper/Color";
import Screen from "../component/Screen";
import { getAllGenres, getGenreId } from "../api/url";
import GenresList from "../component/GenresList";
import MovieList from "../component/MovieList";
import Icon from "react-native-vector-icons/Ionicons";

const Genres = ({ navigation }) => {
  const [genres, setGenres] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [activeGenre, setActiveGenre] = useState("AaABgYCcWKI4NQqiD2hd");
  const [title, setTitle] = useState("Phim bom tấn");
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    getAllGenres().then((data) => {
      setGenres(data);
      setLoading(false);
    });
    getGenreId(activeGenre).then((data) => {
      setGenreList(data);
      setLoading2(false);
    });
  }, [activeGenre]);

  const setLoadGenre = async (id) => {
    setLoading2(true);
    setActiveGenre(id);
    const nameGenre = await genres.filter((val) => val.id === id);
    setTitle(nameGenre[0].name);
  };

  const RenderHeaderTitle = () => {
    return (
      <View>
        <View style={{ flexDirection: "row" }}>
          <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
            <Icon
              style={{ flex: 1, paddingLeft: 12, alignSelf: "flex-start", marginTop: 16 }}
              name={"md-chevron-back"}
              size={32}
              color={white}
            />
          </TouchableWithoutFeedback>
          <Text style={styles.headerTitle}>{title}</Text>
          <View style={{ flex: 1, paddingRight: 12 }}></View>
        </View>
        <View style={styles.titleBar} />
        {loading ? (
          <View style={{ width: "100%", alignItems: "center", justifyContent: "center", height: "50%" }}>
            <ActivityIndicator size={24} color="#ffffff" />
          </View>
        ) : (
          <FlatList
            data={genres}
            horizontal
            renderItem={({ item }) => (
              <GenresList genre={item} onPress={setLoadGenre} active={item.id === activeGenre ? true : false} />
            )}
            keyExtractor={(item) => item.id.toString()}
            style={{ margin: 8, marginTop: 4 }}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    );
  };

  return (
    <Screen>
      <RenderHeaderTitle />

      {!loading && loading2 ? (
        <View style={{ width: "100%", alignItems: "center", justifyContent: "center", height: "50%" }}>
          <ActivityIndicator size={24} color="#ffffff" />
        </View>
      ) : (
        <MovieList results={genreList} navigation={navigation} />
      )}
    </Screen>
  );
};

export default Genres;

Genres.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
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
});
