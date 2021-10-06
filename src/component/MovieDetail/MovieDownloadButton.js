import React, { useState } from "react";
import PropTypes from "prop-types";
import RNFetchBlob from "rn-fetch-blob";
import {
  ActivityIndicator,
  Alert,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { white } from "../../helper/Color";

const MovieDownloadButton = ({ uriMovie }) => {
  const [loading, setLoading] = useState(false);
  // const [link] = useState(props.uriMovie)

  const checkPremision = async () => {
    if (Platform.OS === "ios") {
      downloadVideo();
    } else {
      try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
          title: "Storage Premission Required",
          message: "App needs access to your storage to download Video",
        });
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Storage Premission GRANTED");
          downloadVideo();
        } else {
          Alert.alert("Thông báo", "Bạn chưa cấp quyền lưu trữ cho ứng dụng !");
          setLoading(false);
        }
      } catch (error) {
        console.warn(error);
      }
    }
  };

  const downloadVideo = () => {
    setLoading(true);
    let date = new Date();
    let video_url = uriMovie;
    let ext = getExtension(video_url);
    ext = "." + ext[0];
    //get config
    const { config, fs } = RNFetchBlob;
    let MovieDir = fs.dirs.MovieDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: MovieDir + "/movie_" + Math.floor(date.getTime() + date.getSeconds() / 2) + ext,
        description: "Tải xuống video",
      },
    };
    config(options)
      .fetch("GET", video_url)
      .then((res) => {
        console.log("res =>", JSON.stringify(res));
        Alert.alert("Thông báo", "Tải xuống video thành công !");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const getExtension = (filename) => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };
  return (
    <TouchableWithoutFeedback onPress={!loading ? checkPremision : null}>
      <View style={_styles.wrapper}>
        {!loading && <Icon name="download" size={24} color={white} />}
        {loading && <ActivityIndicator size={24} color="#ffffff" />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const _styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    marginRight: 32,
    right: 0,
    top: 32,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});

MovieDownloadButton.propTypes = {
  uriMovie: PropTypes.string,
};

export default MovieDownloadButton;
