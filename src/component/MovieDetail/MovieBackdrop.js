import React from "react";
import PropTypes from "prop-types";
import { Dimensions, View, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import LinearGradient from "react-native-linear-gradient";

import { black, transparent } from "../../helper/Color";

const MovieBackdrop = ({ backdrop, children }) => {
  return (
    <View style={_styles.container}>
      <FastImage source={{ uri: backdrop }} resizeMode={"cover"} style={_styles.imageStyle} />
      <LinearGradient colors={[transparent, black]} locations={[0.45, 0.9]} style={_styles.gradientImage} />
      <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, margin: 16, borderTopLeftRadius: 16 }}>
        {children}
      </View>
    </View>
  );
};

export default MovieBackdrop;

MovieBackdrop.propTypes = {
  backdrop: PropTypes.string,
  children: PropTypes.any,
};

const _styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height / 2.5,
    backgroundColor: black,
  },

  imageStyle: {
    flex: 1,
    // height: Dimensions.get("screen").width * 1.7777,
    // width: Dimensions.get("screen").width,
  },

  gradientImage: {
    flex: 1,
    position: "absolute",
    height: "100%",
    width: "100%",
  },
});
