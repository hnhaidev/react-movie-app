import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "react-native-modal";
import { StatusBar, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import VideoPlayer from "react-native-video-controls";
import Icon from "react-native-vector-icons/FontAwesome5";

import { RED, white } from "../../helper/Color";

class MoviePlayButton extends Component {
  state = {
    isModalShown: false,
  };

  toggleModal = () => {
    this.setState((prevState) => ({ isModalShown: !prevState.isModalShown }));
  };

  renderPlayButton = () => {
    return (
      <TouchableWithoutFeedback onPress={this.toggleModal}>
        <View style={_styles.wrapper}>
          <Icon name={"play"} size={20} color={white} style={_styles.icon} />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  onPressPlay = (key) => {
    this.toggleModal();
    this.props.navigation.navigate("Webview", { id: key });
  };

  renderModal = () => {
    const { uriMovie } = this.props;

    if (this.state.isModalShown && uriMovie) {
      return (
        <Modal
          isVisible={this.state.isModalShown}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            margin: 0,
          }}
          // swipeDirection={"down"}
          supportedOrientations={["portrait", "landscape"]}
          onBackButtonPress={this.toggleModal}
          onBackdropPress={this.toggleModal}
          onSwipeComplete={this.toggleModal}
        >
          <View style={_styles.modalStyle}>
            <StatusBar hidden={true} />
            {/* <View style={{ height: 270, width: "100%" }}> */}
            <VideoPlayer
              onBack={this.toggleModal}
              onEnd={this.toggleModal}
              fullscreenOrientation="all"
              disableVolume={true}
              source={{
                uri: uriMovie,
              }}
            />
            {/* </View> */}
          </View>
        </Modal>
      );
    }
  };

  render() {
    return (
      <>
        {this.renderPlayButton()}
        {this.renderModal()}
      </>
    );
  }
}

export default MoviePlayButton;

MoviePlayButton.propTypes = {
  navigation: PropTypes.object,
  uriMovie: PropTypes.string,
};

const _styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    right: 0,
    top: -30,
    marginRight: 32,
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: RED,
    justifyContent: "center",
  },

  icon: {
    alignSelf: "center",
  },

  modalStyle: {
    width: "100%",
    height: "100%",
  },

  bar: {
    width: 40,
    height: 5,
    backgroundColor: RED,
    marginBottom: 24,
    borderRadius: 2,
    alignSelf: "center",
    marginTop: 8,
  },

  playText: {
    fontFamily: "Montserrat-SemiBold",
    textAlign: "right",
    backgroundColor: RED,
    color: white,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 14,
  },

  videoText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    paddingBottom: 12,
  },
});
