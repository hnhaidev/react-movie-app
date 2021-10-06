import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import HomeComponent from "../component/Home/HomeComponent";
import { getAllMovie, getNewMovie, getPopularMovies } from "../api/url";

const MovieScreen = ({ navigation }) => {
  const [moviesData, setMoviesData] = useState([]);
  const [popularMovie, setPopularMovie] = useState([]);
  const [newMovie, setNewMovie] = useState([]);

  useEffect(() => {
    requestMovieScreen();
  }, []);
  const requestMovieScreen = () => {
    getNewMovie().then((data) => setNewMovie(data));
    getPopularMovies().then((data) => setPopularMovie(data));
    getAllMovie().then((data) => setMoviesData(data));
  };

  return (
    <HomeComponent
      navigation={navigation}
      popularMovie={popularMovie}
      newMovie={newMovie}
      data={moviesData}
      onRefresh={requestMovieScreen}
    />
  );
};

export default MovieScreen;

MovieScreen.propTypes = {
  navigation: PropTypes.object,
};
