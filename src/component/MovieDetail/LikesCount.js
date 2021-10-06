import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import { RED, white } from "../../helper/Color";

const LikesCount = ({ likeCount }) => {
  return (
    <View style={{ flexDirection: "row", alignContent: "center" }}>
      <Text style={{ color: white, fontSize: 16 }}>{likeCount}</Text>
      <Icon name="heart" color={RED} size={16} style={{ marginLeft: 5, paddingTop: 3 }} />
    </View>
  );
};
LikesCount.propTypes = {
  likeCount: PropTypes.number,
};

export default LikesCount;
