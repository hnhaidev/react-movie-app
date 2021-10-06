import { PropTypes } from "prop-types";
import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { BACKGROUND, white } from "../helper/Color";

const Settings = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: BACKGROUND }}>
      <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
        <Icon
          style={{ flex: 1, paddingLeft: 12, alignSelf: "flex-start", marginTop: 16 }}
          name={"md-chevron-back"}
          size={32}
          color={white}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Settings;

Settings.propTypes = {
  navigation: PropTypes.object,
};
