import React from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet } from "react-native";

import MovieList from "../component/MovieList";
import Screen from "../component/Screen";
import BackIcon from "../component/Utils/BackIcon";
import { RED, white } from "../helper/Color";

const MovieListScreen = ({ route, navigation }) => {
  const { data, title } = route.params;

  const RenderTitle = () => {
    return (
      <View>
        <View style={{ flexDirection: "row", marginTop: 16 }}>
          <BackIcon style={{ flex: 1, paddingLeft: 12, alignSelf: "flex-start" }} color={white} navigation={navigation} />
          <Text style={_styles.headerTitle}>{`${title} "Movies"`}</Text>
          <View style={{ flex: 1, paddingRight: 12 }}></View>
        </View>
        <View style={_styles.titleBar} />
      </View>
    );
  };
  return (
    <Screen>
      {RenderTitle()}
      <MovieList results={data} navigation={navigation} onReachEnd={this.onReachEnd} />
    </Screen>
  );
};

export default MovieListScreen;

MovieListScreen.propTypes = {
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
  },

  titleBar: {
    width: 40,
    height: 5,
    backgroundColor: RED,
    marginTop: 4,
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
  },
});
