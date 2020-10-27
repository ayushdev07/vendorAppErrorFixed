/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, StyleSheet, AsyncStorage, Image, Alert } from 'react-native';
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Spinner from 'react-native-loading-spinner-overlay';
import images from '../../assets/images';
import { Appbar } from 'react-native-paper';
import YoutubePlayer from "react-native-youtube-iframe";
import { ListItem, Left, Right, Thumbnail, Body, Button } from 'native-base';


const TutorialsScreen = ({ navigation }) => {
    const [tutorials, setTutorials] = useState([]);

    const renderTutorials = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('VideoScreen')} >
                <View style={{ flexDirection: 'row', marginHorizontal: '10%', backgroundColor: '#ffffff' }}>
                    <Image
                        source={images.welcom1Image}
                        style={{ width: 120, height: 120, borderWidth: 2, borderBottomLeftRadius: 20 }}
                    />
                    {/* <View style={{ flex: 1, alignSelf: 'flex-start', backgroundColor: '#ffffff' }} >
                        <Text style={{ color: '#000000', alignSelf: 'center', fontSize: 16, fontWeight: 'bold' }} >{item.topicName}</Text>
                        <Text style={{ color: '#000000', alignSelf: 'center', fontSize: 12 }} >{item.description}</Text>
                    </View> */}
                </View>

            </TouchableOpacity>
        );
    };

    const FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 20,
                    width: "100%",
                    color: '#ffffff'
                }}
            />
        );
    };
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

    return (

        <ScrollView>
            <Appbar.Header style={{backgroundColor:'#5FE3B9'}} >
                <Appbar.Content title="UniworksDesigns" style={{fontSize:20, marginLeft:10}} />
            </Appbar.Header>

            <View style={{ flex: 1 }} >
                <View  />
                <View style={{ flex: 1, flexDirection: 'row', marginLeft: '6%', marginTop: 10 }} >
                    <View>
                        <Text style={{ color: '#000000', fontSize: 24, fontWeight: 'bold', }} >Welcome, </Text>
                        <Text style={{ color: '#000000', fontSize: 20 }} >Ayush</Text>
                    </View>
                </View>
                <View style={{ flex: 1 }} >
                    <View style={{ marginTop: 30 }} >
                        <View style={styles.mainContainer}>
                          <YoutubePlayer
                          height={250}
                          width='100%'
                          play={playing}
                          videoId={"iee2TATGMyI"}
                          onChangeState={onStateChange}
                          />
                        </View>
                        <View style={styles.mainContainer} >
                          <YoutubePlayer
                          height={200}
                          width='100%'
                          play={playing}
                          videoId={"iee2TATGMyI"}
                          onChangeState={onStateChange}
                          />
                        </View>
                        <View style={{marginTop:'5%'}}>
                          <YoutubePlayer
                          height={200}
                          width='100%'
                          play={playing}
                          videoId={"iee2TATGMyI"}
                          onChangeState={onStateChange}
                          />
                        </View>
                        <View style={{marginTop:'5%'}}>
                          <YoutubePlayer
                          height={200}
                          width='100%'
                          play={playing}
                          videoId={"iee2TATGMyI"}
                          onChangeState={onStateChange}
                          />
                          {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
                        </View>
                        <ListItem thumbnail style = {{marginTop:'5%'}}>
              <Left>
                <Thumbnail square source={{ uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=' }} />
              </Left>
              <Body>
                <Text numberOfLines={2}>This is for description. Only two lines will be visible rest you need to click and open</Text>
                <Text note numberOfLines={2}>same here also</Text>
                {/* <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>Sorce name</Text>
                </View> */}
              </Body>
              <Right>
                <Button transparent onPress={() => navigation.navigate('VideoScreen')} >
                  <Text style={{fontStyle: 'bold'}}>Watch</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail style = {{marginTop:'5%'}}>
              <Left>
                <Thumbnail square source={{ uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=' }} />
              </Left>
              <Body>
                <Text numberOfLines={2}>This is for description. Only two lines will be visible rest you need to click and open</Text>
                <Text note numberOfLines={2}>same here also</Text>
                {/* <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>Sorce name</Text>
                </View> */}
              </Body>
              <Right>
                <Button transparent onPress={() => navigation.navigate('VideoScreen')} >
                  <Text>Watch</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail style = {{marginTop:'5%'}}>
              <Left>
                <Thumbnail square source={{ uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=' }} />
              </Left>
              <Body>
                <Text numberOfLines={2}>This is for description. Only two lines will be visible rest you need to click and open</Text>
                <Text note numberOfLines={2}>same here also</Text>
                {/* <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>Sorce name</Text>
                </View> */}
              </Body>
              <Right>
                <Button transparent onPress={() => navigation.navigate('VideoScreen')} >
                  <Text>Watch</Text>
                </Button>
              </Right>
            </ListItem>
                    </View>
                </View>
            </View>




        </ScrollView>

    );

};


const styles = StyleSheet.create(
    {
      mainContainer: {
        marginVertical: '4%',
        backgroundColor: '#e3e4e6',
        borderRadius: 15,
        marginHorizontal: '10%',
        flex: 1,
        maxHeight: '20%'
    },
        rect3: {
            width: "50%",
            height: 60,
            backgroundColor: "rgba(255,255,255,1)",
            borderWidth: 1,
            borderColor: "rgba(112,112,112,1)",
            borderStyle: "solid",
            borderRadius: 100,
            flexDirection: "row",
            paddingStart: 20,
            marginHorizontal: '8%',
        },
        subcategory: {
            height: 30,
            width: 100,
            backgroundColor: "rgba(255,255,255,1)",
            borderWidth: 1,
            borderColor: "rgba(112,112,112,1)",
            borderStyle: "solid",
            borderRadius: 100,
            paddingStart: 20,
            marginHorizontal: '8%',
        },
        bottom: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
        },
    }
);
export default TutorialsScreen;
// import React, { useState, useCallback, useRef } from "react";
// import { Button, View, Alert, Text } from "react-native";
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import YoutubePlayer from "react-native-youtube-iframe";

// export default function TutorialsScreen() {
//   const [playing, setPlaying] = useState(false);

//   const onStateChange = useCallback((state) => {
//     if (state === "ended") {
//       setPlaying(false);
//       Alert.alert("video has finished playing!");
//     }
//   }, []);

//   const togglePlaying = useCallback(() => {
//     setPlaying((prev) => !prev);
//   }, []);

//   return (
//     <View>
//     <YoutubePlayer
//       height={3000}
//       width='100%'
//       play={playing}
//       videoId={"iee2TATGMyI"}
//       onChangeState={onStateChange}
//     />
//     <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
//     </View>
//   );
// }