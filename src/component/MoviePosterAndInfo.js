import React from "react";
import PropTypes from "prop-types";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import MoviePoster from "./MoviePoster";
import { RED, white } from "../helper/Color";
import Icon from "react-native-vector-icons/FontAwesome";

const MoviesPosterandInfo = ({ data, navigation }) => {
  const Genres = (genres = []) => {
    return genres.join(", ");
  };

  return (
    <View style={{ marginHorizontal: 16, marginVertical: 8 }}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("MovieDetail", { id: data.id });
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <MoviePoster item={data} height={150} width={100} navigation={navigation} />
          <View style={{ margin: 16, marginBottom: 24, marginTop: 0, flex: 1 }}>
            <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 16, marginBottom: 10, color: white }} numberOfLines={2}>
              {data.title}
            </Text>
            <View style={{ flexDirection: "row", alignContent: "center" }}>
              <Text style={{ color: white, fontSize: 16 }}>{data.likeCount}</Text>
              <Icon name="heart" color={RED} size={16} style={{ marginLeft: 10, paddingTop: 3 }} />
            </View>
            <Text style={{ fontFamily: "Montserrat-Light", fontSize: 12, marginTop: 10, width: "75%", color: white }}>
              {Genres(data.genres)}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MoviesPosterandInfo;

MoviesPosterandInfo.propTypes = {
  data: PropTypes.object,
  navigation: PropTypes.object,
};
