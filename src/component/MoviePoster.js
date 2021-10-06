import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import FastImage from "react-native-fast-image";

// import { getImageUrl } from "../api/url";
import { INPUT } from "../helper/Color";

const MoviePoster = ({ item, navigation, height, width }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        item.imageURL ? navigation.navigate("MovieDetail", { id: item.id }) : null;
      }}
    >
      <View style={styles.imageContainer}>
        <FastImage style={{ height, width }} resizeMode="cover" source={{ uri: item.imageURL ? item.imageURL : "" }} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MoviePoster;

MoviePoster.propTypes = {
  item: PropTypes.any,
  height: PropTypes.number,
  width: PropTypes.number,
  navigation: PropTypes.any,
};

MoviePoster.defaultProps = {
  height: 180,
  width: 120,
};

const styles = StyleSheet.create({
  imageContainer: {
    margin: 4,
    backgroundColor: INPUT,
    borderRadius: 12,
    overflow: "hidden",
  },
});
