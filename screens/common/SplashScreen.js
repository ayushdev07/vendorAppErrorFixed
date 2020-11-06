/* eslint-disable prettier/prettier */
// import React from "react";
// import { StyleSheet, View, TouchableOpacity, Text, ImageBackground } from "react-native";

// function SplashScreen({ navigation }) {
//   return (
//     <View
//       style={styles.container}
//     >
//       <ImageBackground
//         source={require("../../assets/images/green-plant-on-white-wooden-table-36447421.jpg")}
//         style={styles.image2}
//       >
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('HomeScreen')}
//         >
//           <View style={styles.containerButton} >
//             <Text styles={styles.text}>Get Started</Text>
//           </View>
//         </TouchableOpacity>
//       </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image2: {
//     height: '100%',
//     borderTopLeftRadius: 50,
//     borderBottomRightRadius: 50,
//     width: '100%',
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center'
//   },
//   containerButton: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',

//   },
//   getstarted: {
//     height: 60
//   },
//   button: {
//     width: 300,
//     height: 60,
//     backgroundColor: "rgba(255,255,255,1)",
//     borderWidth: 1,
//     borderColor: "rgba(112,112,112,1)",
//     borderStyle: "solid",
//     borderRadius: 100,
//     marginBottom: 60

//   },
//   text: {
//     fontFamily: "comfortaa-regular",
//     color: "#121212",
//   }
// });

// export default SplashScreen;

// import React from "react";
// import { StyleSheet, View, TouchableOpacity, Text, ImageBackground } from "react-native";
// import SplashScreen2 from "./SplashScreen2";

// function SplashScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <SplashScreen2>
//         <ImageBackground source={require("../../assets/images/green-plant-on-white-wooden-table-36447421.jpg")} style={styles.image2}>
//         </ImageBackground>
//       </SplashScreen2>
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
//         <View style={styles.containerButton}>
//           <Text styles={styles.text}>Get Started</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   image2: {
//     height: '100%',
//     borderTopLeftRadius: 50,
//     borderBottomRightRadius: 50,
//     width: '100%',
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center'
//   },
//   containerButton: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',

//   },
//   getstarted: {
//     height: 60
//   },
//   button: {
//     width: 300,
//     height: 60,
//     backgroundColor: "rgba(255,255,255,1)",
//     borderWidth: 1,
//     borderColor: "rgba(112,112,112,1)",
//     borderStyle: "solid",
//     borderRadius: 100,
//     marginBottom: 60

//   },
//   text: {
//     fontFamily: "comfortaa-regular",
//     color: "#121212",
//   }
// });

// export default SplashScreen;

import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default class SplashScreen extends Component {
    async componentDidMount() {
        const data = await this.navigateToHome()
        if (data !== null) { this.props.navigation.navigate('UpcomingTaskSupervisorScreen') }
    }
    navigateToHome = async () => {
        const wait = time => new Promise((resolve) => setTimeout(resolve, time))
        return wait(6500).then(() => this.props.navigation.navigate('UpcomingTaskSupervisorScreen'))
    };
    // const onStateChange = useCallback((state) => { if (state === "ended") { setPlaying(false) } }, []);
    render() {
        return (
            <View style={styles.container}>
                {/* <Text style={{ fontSize: 29}}>Hey, Welcome To Indus</Text> */}
                <Image source={require('../../assets/Splash1.gif')} style={styles.image} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        width: '100%',
        height: 200,
        justifyContent: "center"
    },
});