import React, { useRef, useState } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import { View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay'

const VideoScreen = () => {
    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(true);
    const [isLoading, setLoading] = useState(false)
    return (
        
        <View>
            {isLoading? 
            
            <Spinner
            //visibility of Overlay Loading Spinner
            visible={isLoading}
            //Text with the Spinner
            textContent={'Loading...'}
            //Text style of the Spinner Text
            textStyle={{color: '#FFF',}}
          />
            :
            <YoutubePlayer
                ref={playerRef}
                height={300}
                width='100%'
                videoId={"fiT2vEOXsuw"}
                play={playing}
                onChangeState={event => console.log(event)}
                onReady={() => {
                    console.log("ready")
                    setLoading(false)}}
                onError={e => console.log(e)}
                onPlaybackQualityChange={q => console.log(q)}
                volume={50}
                playbackRate={1}
                initialPlayerParams={{
                    cc_lang_pref: "us",
                    showClosedCaptions: true
                }}
            />
}
        </View>
    )
}

export default VideoScreen;