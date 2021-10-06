import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

import { Styles } from "./Styles";
import { white } from "../../helper/Color";

const MovieCast = ({ cast }) => {
  return (
    <View>
      <Text style={Styles.titleText}>Cast</Text>
      <Text style={{ color: white, fontSize: 16 }}>{cast ? cast : "Đang cập nhật..."}</Text>
    </View>
  );
};

export default MovieCast;

MovieCast.propTypes = {
  cast: PropTypes.string,
};
