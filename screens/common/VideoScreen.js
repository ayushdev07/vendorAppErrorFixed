/* eslint-disable prettier/prettier */
// import React, { useRef, useState } from 'react';
// import YoutubePlayer from 'react-native-youtube-iframe';
// import { View } from 'react-native';
// import Spinner from 'react-native-loading-spinner-overlay'

// const VideoScreen = () => {
//     const playerRef = useRef(null);
//     const [playing, setPlaying] = useState(true);
//     const [isLoading, setLoading] = useState(false)
//     return (
//         <View>
//             {isLoading?
//             <Spinner
//             //visibility of Overlay Loading Spinner
//             visible={isLoading}
//             //Text with the Spinner
//             textContent={'Loading...'}
//             //Text style of the Spinner Text
//             textStyle={{color: '#FFF',}}
//           />
//             :
//             <YoutubePlayer
//                 ref={playerRef}
//                 height={300}
//                 width='100%'
//                 videoId={"fiT2vEOXsuw"}
//                 play={playing}
//                 onChangeState={event => console.log(event)}
//                 onReady={() => {
//                     console.log("ready")
//                     setLoading(false)}}
//                 onError={e => console.log(e)}
//                 onPlaybackQualityChange={q => console.log(q)}
//                 volume={50}
//                 playbackRate={1}
//                 initialPlayerParams={{
//                     cc_lang_pref: "us",
//                     showClosedCaptions: true
//                 }}
//             />
// }
//         </View>
//     )
// }

// export default VideoScreen;

import React, { useState, useCallback, useRef } from "react"
import { Button, View, Alert } from "react-native"
import YoutubePlayer from "react-native-youtube-iframe"
import AsyncStorage from '@react-native-community/async-storage'
import { useTranslation } from 'react-i18next'
import i18n from '../../components/i18n'

const VideoScreen = ({ navigation }) => {

  const { t } = useTranslation();

  useEffect(() => {
    navigation.addListener('focus', () => {
      AsyncStorage.getItem('LANG').then((value) => {
        if (value == "en") { i18n.changeLanguage('en') }
        else if (value == "hi") { i18n.changeLanguage('hi') }
      });
    });
  }, [navigation]);

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert(t('Video has finished playing!'));
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View>
      <YoutubePlayer
        height={200}
        play={playing}
        videoId={"iee2TATGMyI"}
        onChangeState={onStateChange}
      />
      <Button title={playing ? t('pause') : t('play')} onPress={togglePlaying} />
    </View>
  );
}

export default VideoScreen;