import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableWithoutFeedback } from "react-native";

import { Styles } from "./Styles";

const MovieOverview = ({ overview }) => {
  const [textShown, setTextShown] = useState(false);
  return (
    <View>
      <Text style={Styles.titleText}>Overview</Text>
      <TouchableWithoutFeedback onPress={() => setTextShown(!textShown)}>
        <Text numberOfLines={textShown ? 0 : 3} style={Styles.textOverview}>
          {overview ? overview : "Đang cập nhật..."}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MovieOverview;

MovieOverview.propTypes = {
  overview: PropTypes.string,
};
