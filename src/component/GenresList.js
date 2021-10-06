import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { lightGray, RED } from "../helper/Color";

const GenresList = ({ genre, onPress, active }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.view, backgroundColor: active ? RED : lightGray }}
      onPress={() => onPress(genre.id)}
    >
      <Text style={{ ...styles.text, color: active ? "#fff" : "#000" }}>{genre.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 0.75,
    borderColor: lightGray,
    borderRadius: 4,
    marginRight: 4,
    marginBottom: 4,
  },

  text: {
    color: lightGray,
    fontFamily: "Montserrat-Light",
    fontSize: 12,
  },
});

export default GenresList;

GenresList.propTypes = {
  genre: PropTypes.object,
  active: PropTypes.bool,
  onPress: PropTypes.func,
};
