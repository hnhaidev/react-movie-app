import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { View, StatusBar, ScrollView, StyleSheet } from "react-native";

import MovieBackdrop from "../component/MovieDetail/MovieBackdrop";
import MovieOverview from "../component/MovieDetail/MovieOverview";
import MovieCast from "../component/MovieDetail/MovieCast";
import MovieGenres from "../component/MovieDetail/MovieGenres";
import MoviePlayButton from "../component/MovieDetail/MoviePlayButton";
import MovieTitle from "../component/MovieDetail/MovieTitle";
import { BACKGROUND, white } from "../helper/Color";
import BackIcon from "../component/Utils/BackIcon";
import MovieDownloadButton from "../component/MovieDetail/MovieDownloadButton";
import { getMovieDetail } from "../api/url";
import LikesCount from "../component/MovieDetail/LikesCount";

const MovieDetailScreen = ({ route, navigation }) => {
  const { id } = route.params;

  const [movieData, setMoviesData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getMovieDetail(id).then((data) => {
      setMoviesData(data);
      setIsLoaded(true);
    });
  }, []);

  const MovieInfoGeneral = () => {
    // const { movieData, isLoaded } = this.state;
    return (
      <MovieBackdrop backdrop={movieData.imageURL}>
        {isLoaded && (
          <View>
            <MovieTitle title={movieData.title} />
            <LikesCount likeCount={movieData.likeCount} />
          </View>
        )}
      </MovieBackdrop>
    );
  };

  const MovieInfoDetail = () => {
    return (
      <View style={Styles.movieDetailWrapper}>
        <View style={Styles.movieDetail}>
          <MovieDownloadButton style={{ zIndex: 1 }} uriMovie={movieData.videoURL} />
          {isLoaded && (
            <View>
              <MovieGenres genre={movieData.genres} />
              <MovieOverview overview={movieData.description} />
              <MovieCast cast={movieData.cast} />
              {/* <MovieImages images={images} /> */}
              {/* <MovieRecommendations recommendations={recommendations} navigation={navigation} /> */}
            </View>
          )}
        </View>
        <MoviePlayButton navigation={navigation} uriMovie={movieData.videoURL} />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: white }}>
      <ScrollView style={Styles.scrollview} contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
        <StatusBar hidden={true} />
        {MovieInfoGeneral()}
        {MovieInfoDetail()}
      </ScrollView>
      <BackIcon navigation={navigation} style={{ marginLeft: 5, position: "absolute", top: 16 }} color={white} />
    </View>
  );
};

export default MovieDetailScreen;

MovieDetailScreen.propTypes = {
  route: PropTypes.any,
  navigation: PropTypes.object,
};

const Styles = StyleSheet.create({
  scrollview: {
    backgroundColor: BACKGROUND,
    flexGrow: 1,
  },

  movieDetailWrapper: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },

  movieDetail: {
    flex: 1,
    padding: 16,
    paddingTop: 24,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: BACKGROUND,
  },
});
