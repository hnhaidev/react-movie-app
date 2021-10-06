import React from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";

import MoviesPosterandInfo from "./MoviePosterAndInfo";

const MovieList = ({ results, navigation, onReachEnd }) => {
  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      keyboardShouldPersistTaps={"handled"}
      data={results}
      renderItem={({ item }) => <MoviesPosterandInfo data={item} navigation={navigation} />}
      contentContainerStyle={{ marginVertical: 8 }}
      onEndReached={onReachEnd}
      onEndReachedThreshold={0.9}
    />
  );
};

export default MovieList;

MovieList.propTypes = {
  results: PropTypes.array,
  navigation: PropTypes.object,
  onReachEnd: PropTypes.func,
};

MovieList.defaultProps = {
  onReachEnd: null,
};
