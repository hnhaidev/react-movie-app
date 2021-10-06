import React from "react";
import PropTypes from "prop-types";
import { View, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { white } from "../../helper/Color";

const HomeHeader = ({ navigation }) => {
  const MenuButton = () => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
        <Icon name="menu" size={32} color={white} />
      </TouchableWithoutFeedback>
    );
  };

  const SearchButton = () => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Search")}>
        <Icon name={"search"} size={24} color={white} />
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={{ margin: 16, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
      <MenuButton />
      <SearchButton />
    </View>
  );
};

export default HomeHeader;

HomeHeader.propTypes = {
  navigation: PropTypes.object,
};
