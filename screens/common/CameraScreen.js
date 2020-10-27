/* eslint-disable prettier/prettier */
// import React, { useState, useEffect } from 'react';
// import { Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
// import { RNCamera } from 'react-native-camera';
//  const  CameraComponent = ({navigation})=> {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [cameraRef, setCameraRef] = useState(null)
//   const [type] = useState(RNCamera.Constants.Type.back);
//   const handlePhotoUrl=async(val)=>{
//     console.log(val)
//    navigation.navigate('Payment Details')
//   }
// useEffect(() => {
//     (async () => {
//       const { status } = await RNCamera.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);
// if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   return (
//     <View style={{ flex: 1 }}>
//       <RNCamera style={{ flex: 1 }} type={type} ref={ref => {
//         setCameraRef(ref) ;
//   }}>
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: 'transparent',
//             justifyContent: 'flex-end'
//           }}>
//           <TouchableOpacity style={{alignSelf: 'center', marginBottom:'5%' ,}}  onPress={async() => {
//             if(cameraRef){
//               let photo =  await cameraRef.takePictureAsync();
//               handlePhotoUrl(photo.uri)
//             }
//           }}>
//             <View style={{ 
//                borderWidth: 2,
//                borderRadius:150,
//                borderColor: 'white',
//                height: 60,
//                width:60,
//                display: 'flex',
//                justifyContent: 'center',
//                alignItems: 'center'}}
//             >
//               <View style={{
//                  borderWidth: 2,
//                  borderRadius:50,
//                  borderColor: 'white',
//                  height: 50,
//                  width:50,
//                  backgroundColor: 'white'}} >
//               </View>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </RNCamera>
//     </View>
//   );
// }
// export default CameraComponent;

// import React, { Component } from 'react'
// import { StyleSheet, View, Alert } from 'react-native'
// import { RNCamera } from 'react-native-camera'
// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <RNCamera
//           style={{ flex: 1, alignItems: 'center' }}
//           ref={ref => {
//             this.camera = ref
//           }}
//         />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'black'
//   }
// })

// camera testing setup

'use strict';
import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class CameraScreen extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    onGoogleVisionBarcodesDetected={({ barcodes }) => {
                        console.log(barcodes);
                    }}
                />
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                        <Text style={{ fontSize: 14 }}> SNAP </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});