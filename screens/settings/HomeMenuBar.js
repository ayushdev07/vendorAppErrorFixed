// /* eslint-disable prettier/prettier */

// import React, {useState} from 'react';
// import {Container, Header, View, Button, Icon, Fab,Text } from 'native-base';

// const HomeMenuBar = ({navigation}) => {
//     const [personalData, setPersonalData] = useState([]);
//     const [showMenu, setShowMenu ] = useState(false)
//     const handleMenu = () => {
//         setShowMenu(!showMenu)
//     }
//         return(
//             <Container style = {{marginBottom:-570}}>
//                 {/* <Header/> */}
//                 <View >
//                 <Fab
//                 active={showMenu}
//                 direction="right"
//                 containerStyle={{marginBottom:-50}}
//                 position="topLeft"
//                 onPress={handleMenu}>
//                     <Icon name="share" />
//                     <Button onPress={() => navigation.navigate('PersonalScreen', { personal: personalData })}>
//                         <Icon name="mail" />
//                         {/* <Text>Personal</Text> */}
//                     </Button>
//                     <Button 
//                     onPress={() => navigation.navigate('SuperVisorsScreen')} 
//                     style={{ backgroundColor: '#3B5998' }}
//                     >
//                         <Icon name="help" />
//                         {/* <Text>SuperVisors Screen</Text> */}
//                     </Button>
//                     <Button 
//                     onPress={() => navigation.navigate('AccountDetailsScreen', { personal: personalData })} 
//                     style={{ backgroundColor: '#DD5144' }}>
//                         <Icon name="information" />
//                         {/* <Text>Account details</Text> */}
//                     </Button>
//                 </Fab>
//                 </View>
//          </Container>
//         )
//     }
// export default HomeMenuBar



// import React, { useState, useCallback, useRef } from "react";
// import { Button, View, Alert } from "react-native";
// import YoutubePlayer from "react-native-youtube-iframe";

// export default function App() {
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
//       <YoutubePlayer
//         height={300}
//         play={playing}
//         videoId={"iee2TATGMyI"}
//         onChangeState={onStateChange}
//       />
//       <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
//     </View>
//   );
// }

// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import ReadMore from 'react-native-read-more-text';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.card}>
//           <ReadMore
//             numberOfLines={2}
//             onReady={this._handleTextReady}>
//             <Text style={styles.cardText}>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor
//               in reprehenderit in voluptate velit esse cillum dolore eu fugiat
//               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//               sunt in culpa qui officia deserunt mollit anim id est laborum
//             </Text>
//           </ReadMore>
//         </View>
//       </View>
//     );
//   }

//   _handleTextReady = () => {
//     console.log('ready!');
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   card: {
//     marginHorizontal: 10,
//     padding: 10,
//     borderRadius: 3,
//     borderColor: 'rgba(0,0,0,0.1)',
//     borderWidth: 1,
//     backgroundColor: '#fff',
//   },
//   cardText: {
//     fontSize: 14,
//   },
// });


// import React from "react";
// import {
//   ScrollView,
//   StyleSheet,
//   Image,
//   TouchableWithoutFeedback,
//   ImageBackground,
//   Dimensions
// } from "react-native";
// //galio
// import { Block, Text, theme } from "galio-framework";
// //argon
// // import { articles, Images  } from "../constants/";
// // import { Card } from "./components/";

// const { width } = Dimensions.get("screen");

// const thumbMeasure = (width - 48 - 32) / 3;
// const cardWidth = width - theme.SIZES.BASE * 2;
// const categories = [
//   {
//     title: "Music Album",
//     description:
//       "Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
//     image:
//       "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?fit=crop&w=840&q=80",
//     price: "$125"
//   },
//   {
//     title: "Events",
//     description:
//       "Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
//     image:
//       "https://images.unsplash.com/photo-1543747579-795b9c2c3ada?fit=crop&w=840&q=80",
//     price: "$35"
//   },
//   {
//     title: "Events",
//     description:
//       "Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
//     image:
//       "https://images.unsplash.com/photo-1543747579-795b9c2c3ada?fit=crop&w=840&q=80",
//     price: "$35"
//   },
//   {
//     title: "Events",
//     description:
//       "Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
//     image:
//       "https://images.unsplash.com/photo-1543747579-795b9c2c3ada?fit=crop&w=840&q=80",
//     price: "$35"
//   },
//   {
//     title: "Events",
//     description:
//       "Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
//     image:
//       "https://images.unsplash.com/photo-1543747579-795b9c2c3ada?fit=crop&w=840&q=80",
//     price: "$35"
//   }
// ];

// class App extends React.Component {
//   renderProduct = (item, index) => {
//     const { navigation } = this.props;

//     return (
//       <TouchableWithoutFeedback
//         style={{ zIndex: 3 }}
//         key={`product-${item.title}`}
//       >
//         <Block center style={styles.productItem}>
//           <Image
//             resizeMode="cover"
//             style={styles.productImage}
//             source={{ uri: 'http://placeimg.com/640/480/any' }}
//           />
//           <Block center style={{ paddingHorizontal: theme.SIZES.BASE }}>
//             <Text
//               center
//               size={16}
//               color={theme.COLORS.MUTED}
//               style={styles.productPrice}
//             >
//               {item.price}
//             </Text>
//             <Text center size={34}>
//               {item.title}
//             </Text>
//             <Text
//               center
//               size={16}
//               color={theme.COLORS.MUTED}
//               style={styles.productDescription}
//             >
//               {item.description}
//             </Text>
//           </Block>
//         </Block>
//       </TouchableWithoutFeedback>
//     );
//   };

//   renderCards = () => {
//     return (
//       <Block flex style={styles.group}>
//         <Text bold size={16} style={styles.title}>
//           Cards
//         </Text>
//         <Block flex>
//           <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
//             <Block flex shadow style={styles.category}>
//               <ImageBackground
//                 source={{ uri: 'http://placeimg.com/640/480/any' }}
//                 style={[
//                   styles.imageBlock,
//                   { width: width - theme.SIZES.BASE * 2, height: 252 }
//                 ]}
//                 imageStyle={{
//                   width: width - theme.SIZES.BASE * 2,
//                   height: 252
//                 }}
//               >
//                 <Block style={styles.categoryTitle}>
//                   <Text size={18} bold color={theme.COLORS.WHITE}>
//                     View article
//                   </Text>
//                 </Block>
//               </ImageBackground>
//             </Block>
//           </Block>
//           <Block flex style={{ marginTop: theme.SIZES.BASE / 2 }}>
//             <ScrollView
//               horizontal={true}
//               pagingEnabled={true}
//               decelerationRate={0}
//               scrollEventThrottle={16}
//               snapToAlignment="center"
//               showsHorizontalScrollIndicator={false}
//               snapToInterval={cardWidth + theme.SIZES.BASE * 0.375}
//               contentContainerStyle={{
//                 paddingHorizontal: theme.SIZES.BASE / 2
//               }}
//             >
//               {categories &&
//                 categories.map((item, index) =>
//                   this.renderProduct(item, index)
//                 )}
//             </ScrollView>
//           </Block>
//         </Block>
//       </Block>
//     );
//   };

  // renderAlbum = () => {
  //   const { navigation } = this.props;

  //   return (
  //     <Block
  //       flex
  //       style={[styles.group, { paddingBottom: theme.SIZES.BASE * 5 }]}
  //     >
  //       <Text bold size={16} style={styles.title}>
  //         Album
  //       </Text>
  //       <Block style={{ marginHorizontal: theme.SIZES.BASE * 2 }}>
  //         <Block flex right>
  //           <Text
  //             size={12}
  //             color={theme.COLORS.PRIMARY}
  //           >
  //             View All
  //           </Text>
  //         </Block>
  //         <Block
  //           row
  //           space="between"
  //           style={{ marginTop: theme.SIZES.BASE, flexWrap: "wrap" }}
          // >
            /* {Images.Viewed.map((img, index) => (
              <Block key={`viewed-${img}`} style={styles.shadow}>
                <Image
                  resizeMode="cover"
                  source={{ uri: 'http://placeimg.com/640/480/any' }}
                  style={styles.albumThumb}
                />
              </Block>
            ))} */
  //         </Block>
  //       </Block>
  //     </Block>
  //   );
  // };

//   render() {
//     return (
//       <Block flex center>
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//         >
//           {this.renderCards()}
//           {/* {this.renderAlbum()} */}
//         </ScrollView>
//       </Block>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   title: {
//     paddingBottom: theme.SIZES.BASE,
//     paddingHorizontal: theme.SIZES.BASE * 2,
//     marginTop: 22,
//   },
//   group: {
//     paddingTop: theme.SIZES.BASE
//   },
//   albumThumb: {
//     borderRadius: 4,
//     marginVertical: 4,
//     alignSelf: "center",
//     width: thumbMeasure,
//     height: thumbMeasure
//   },
//   category: {
//     backgroundColor: theme.COLORS.WHITE,
//     marginVertical: theme.SIZES.BASE / 2,
//     borderWidth: 0
//   },
//   categoryTitle: {
//     height: "100%",
//     paddingHorizontal: theme.SIZES.BASE,
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   imageBlock: {
//     overflow: "hidden",
//     borderRadius: 4
//   },
//   productItem: {
//     width: cardWidth - theme.SIZES.BASE * 2,
//     marginHorizontal: theme.SIZES.BASE,
//     shadowColor: "black",
//     shadowOffset: { width: 0, height: 7 },
//     shadowRadius: 10,
//     shadowOpacity: 0.2
//   },
//   productImage: {
//     width: cardWidth - theme.SIZES.BASE,
//     height: cardWidth - theme.SIZES.BASE,
//     borderRadius: 3
//   },
//   productPrice: {
//     paddingTop: theme.SIZES.BASE,
//     paddingBottom: theme.SIZES.BASE / 2
//   },
//   productDescription: {
//     paddingTop: theme.SIZES.BASE
//     // paddingBottom: theme.SIZES.BASE * 2,
//   }
// });

// export default App;



// import React, { Component } from 'react';
// import {
//   View, Text, StyleSheet, FlatList, Image, ScrollView
// } from 'react-native';
// import data from './List';


// class App extends Component {
//   renderItem(item) {
//     return(
//       <Image 
//         style={{
//           width: 120,
//           height: 180
//         }}
//         key={item.key}
//         source={{uri: item.image}}
//       />
//     );
//   }
//   render() { 
//     return(
//       <View style={styles.container}>
//         <View>
//           <Text style={styles.text}>Uniworks Movies</Text>
//           <FlatList
//             horizontal
//             ItemSeparatorComponent={() => <View style={{width: 5}}/>}
//             renderItem={({ item }) => this.renderItem(item)}
//             data={data}
//           />
//         </View>
//         <View>
//           <Text style={styles.text}>Electrical</Text>
//           <FlatList
//             horizontal
//             ItemSeparatorComponent={() => <View style={{width: 5}}/>}
//             renderItem={({ item }) => this.renderItem(item)}
//             data={data}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   text: {
//     color: '#181818',
//     fontSize: 20,
//     marginLeft: 4,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   }
// });

// export default App;

///////////Side menu Bar



// import React, {useState} from 'react';
// import {Container, Header, View, Button, Icon, Fab,Text } from 'native-base';

// const App =()=>{
//   const [showMenu, setShowMenu ] = useState(false)
//   const handleMenu = () =>{
//     setShowMenu(!showMenu)
//   }
//         return(
//             <Container>
//                 {/* <Header/> */}
//                 <View style = {{flex:1}}>
//                 <Fab
//                 active={showMenu}
//                 direction="down"
//                 containerStyle={{}}
//                 style={{ backgroundColor: '#5067FF' }}
//                 position="topRight"
//                 onPress={handleMenu}>
//                     <Icon name="share" />
//                     <Button style={{ backgroundColor: '#34A34F' }}>
//                         <Text>Personal</Text>
//                     </Button>
//                     <Button style={{ backgroundColor: '#3B5998' }}>
//                         {/* <Icon name="logo-facebook" /> */}
//                         <Text>Personal</Text>
//                     </Button>
//                     <Button disabled style={{ backgroundColor: '#DD5144' }}>
//                         {/* <Icon name="mail" /> */}
//                         <Text>Personal</Text>
//                     </Button>
//                 </Fab>
//                 </View>
//             </Container>
//         )
//     }
// export default App



import 'react-native-gesture-handler';

import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from '../../components/pages/FirstPage';
import SecondPage from '../../components/pages/SecondPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

function firstScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            title: 'First Page',
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#f4511e', 
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        }
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Second Page', 
          
        }}/>
    </Stack.Navigator>
  );
}

function HomeMenuBar() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'First page Option' }}
          component={firstScreenStack} />
        <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'Second page Option' }}
          component={secondScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default HomeMenuBar;