// import React, { useState, useEffect } from 'react';
// import { Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
// // import { Camera } from 'react-native-camera';
//  const  CameraComponent = ({navigation})=> {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [cameraRef, setCameraRef] = useState(null)
//   const [type] = useState(Camera.Constants.Type.back);
//   const handlePhotoUrl=async(val)=>{
//     console.log(val)
//    navigation.navigate('Payment Details')
//   }
// useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestPermissionsAsync();
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
//       <Camera style={{ flex: 1 }} type={type} ref={ref => {
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
//       </Camera>
//     </View>
//   );
// }
// export default CameraComponent;