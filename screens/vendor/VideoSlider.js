import React, { Component } from 'react';
import {
  View, Text, StyleSheet, FlatList, Image, ScrollView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import data from '../../components/Data';
import YoutubePlayer from "react-native-youtube-iframe";


class VideoSlider extends Component {
  renderItem(item) {
    return(
      <Image 
        style={{
          width: 120,
          height: 180,
          marginLeft: 10
        }}
        key={item.key}
        source={{uri: item.image}}
      />
    );
  }
  render() { 
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Uniworks Movies</Text>
          <FlatList
           style = {{marginTop:20}}
            horizontal
            ItemSeparatorComponent={() => <View style={{width: 5}}/>}
            renderItem={({ item }) => this.renderItem(item)}
            data={data}
          />
        </View>
        <View style = {{marginTop:30}}>
          <Text style={styles.text}>Electrical</Text>
          <FlatList
          style = {{marginTop:20}}
            horizontal
            ItemSeparatorComponent={() => <View style={{width: 5}}/>}
            renderItem={({ item }) => this.renderItem(item)}
            data={data}
            onPress = {()=>
              <YoutubePlayer
                height={200}
                play={playing}
                videoId={"iee2TATGMyI"}
                onChangeState={onStateChange}
              />}
          />
        </View>
        <View style = {{marginTop:30}}>
          <Text style={styles.text}>Carpenter</Text>
          <FlatList
            horizontal
            ItemSeparatorComponent={() => <View style={{width: 5}}/>}
            renderItem={({ item }) => this.renderItem(item)}
            data={data}
            style = {{marginTop:20}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#181818',
    fontSize: 20,
    marginLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default VideoSlider;