import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { black, white, RED } from "../helper/Color";
import Settings from "../screen/Settings";
import MovieScreen from "../screen/MovieScreen";
import Genres from "../screen/Genres";

const Drawer = createDrawerNavigator();

const HomeDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType={"slide"}
      drawerStyle={{ width: "50%", backgroundColor: black }}
      drawerContentOptions={{
        activeBackgroundColor: "transparent",
        activeTintColor: RED,
        inactiveTintColor: white,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={MovieScreen}
        options={{
          drawerLabel: ({ color, focused }) => CustomDrawerStyle(color, focused, "Home"),
          drawerIcon: ({ color, size }) => IconDrawer(color, size, "home"),
        }}
      />
      <Drawer.Screen
        name="Genres"
        component={Genres}
        options={{
          drawerLabel: ({ color, focused }) => CustomDrawerStyle(color, focused, "Genres"),
          drawerIcon: ({ color, size }) => IconDrawer(color, size, "trello"),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerLabel: ({ color, focused }) => CustomDrawerStyle(color, focused, "Settings"),
          drawerIcon: ({ color, size }) => IconDrawer(color, size, "settings"),
        }}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerStyle = (color, focused, title) => {
  return (
    <Text
      style={{
        fontSize: focused ? 20 : 16,
        fontWeight: null,
        color: color,
        fontFamily: focused ? "Montserrat-Bold" : "Montserrat-Light",
      }}
    >
      {title}
    </Text>
  );
};

const IconDrawer = (color, size, name) => {
  return <Icon name={name} color={color} size={size} />;
};

export default HomeDrawerNavigator;
