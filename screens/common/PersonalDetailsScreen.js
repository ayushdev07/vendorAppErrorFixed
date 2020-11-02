// import React, { useState, useEffect } from "react";
// import { StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage, Alert, PermissionsAndroid } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import Geolocation from "react-native-geolocation-service";
// import MapView, { Marker } from 'react-native-maps';
// import { Picker } from '@react-native-picker/picker';

// function PersonalDetailsScreen({ navigation }) {

//   var mapStyle = [{ "elementType": "geometry", "stylers": [{ "color": "#242f3e" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#746855" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#242f3e" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#263c3f" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#6b9a76" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#38414e" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#212a37" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#9ca5b3" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#746855" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#1f2835" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#f3d19c" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#2f3948" }] }, { "featureType": "transit.station", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#17263c" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#515c6d" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#17263c" }] }];

//   const [latitude, setlatitude] = useState(17.437328);
//   const [longitude, setlongitude] = useState(78.394665);
//   const [data, setData] = useState({ email: '', emergencyNumber: '', category: '', state: '', city: '', area: '', street: '', building: '', flatNo: '' });
//   const [selectedValue, setSelectedValue] = useState("Carpenter");

//   async function requestPermissions() {
//     if (Platform.OS === 'ios') {
//       Geolocation.requestAuthorization();
//       Geolocation.setRNConfiguration({ skipPermissionRequests: false, authorizationLevel: 'whenInUse' });
//     }
//     if (Platform.OS === 'android') {
//       await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
//     }
//   }

//   useEffect(() => {
//     requestPermissions();
//     Geolocation.getCurrentPosition(
//       (position) => { setlatitude(position.coords.latitude); setlongitude(position.coords.longitude); },
//       error => { Alert.alert(error.message.toString()); },
//       { showLocationDialog: true, enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   });

//   const handleSubmit = async () => {
//     console.log(data)
//     let array = []
//     if (data.category == 'Carpentery') {
//       array.push(1);
//     }
//     try {
//       console.log(await AsyncStorage.getItem('accessToken'))
//       const result = await fetch("https://uniworksvendorapis.herokuapp.com/user/+918174033803", {
//         method: 'PUT',
//         headers: {
//           Accept: '*/*',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           userName: 'Kar1596977190778',
//           name: 'Kartik',
//           contact: "+918174033803",
//           role: 'CSVD',
//           emergencyContact: data.emergencyNumber,
//           email: data.email,
//           state: data.state,
//           city: data.city,
//           area: data.area,
//           street: data.street,
//           building: data.building,
//           flat: data.flatNo,
//           zip: 273001,
//           lat: latitude,
//           long: longitude,
//           agreement: "A letter of agreement is an important document in a business relationship, but with so many types of agreements, it can be difficult to know what each one needs to include. Using an agreement template makes the task much easier. That way you can focus your time and energy on more important aspects of your business transaction. Below, we have different agreement templates arranged by purpose, which saves you the trouble of making one from scratch. Learn about the different kinds of agreements here, and then choose the one that works best for your needs.",
//           categories: array,
//         })
//       }).then((response) => {
//         const statusCode = response.status
//         console.log(statusCode)
//         navigation.navigate("HomeScreen");
//         return response.json();
//       }).then(json => console.log(json))
//         .catch(e => console.log(e.toString()))
//     } catch (e) {
//       console.log(e)
//     }
//   }

//   return (
//     <ScrollView>
//       <View style={styles.mainContainer}>
//         <View style={{ alignItems: 'center', marginTop: 72 }}>
//           <Text style={{ fontSize: 36 }}>Personal Details</Text>
//         </View>
//         <View style={styles.containerRectangleName}>
//           <View style={styles.rect3}>
//             <TextInput style={styles.textInputPhone}
//               placeholder="98393xxxx"
//               keyboardType="numeric"
//               onChangeText={(number) => setData({ ...data, emergencyNumber: number })}
//             />
//             <Text style={{ color: 'black', marginTop: 18, marginRight: 10, fontSize: 15 }}>Emergency Contact</Text>
//           </View>
//         </View>
//         <View style={styles.containerRectangle}>
//           <View style={styles.rect3}>
//             <TextInput style={styles.textInputPhone}
//               placeholder="abc@gmail.com"
//               onChangeText={(email) => setData({ ...data, email: email })}
//             />
//             <Text style={{ color: 'black', marginTop: 18, marginRight: 10, fontSize: 15 }}>Email ID</Text>
//           </View>
//         </View>
//         <View style={styles.containerRectangle}>
//           <View style={styles.rect3}>
//             <Picker
//               selectedValue={selectedValue}
//               mode="dropdown"
//               style={[styles.textInputPhone, { height: 40, width: '90%', marginTop: 10 }]}
//               onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//             >
//               <Picker.Item label="Carpenter" value="Carpenter" />
//               <Picker.Item label="Labour" value="Labour" />
//               <Picker.Item label="Electrician" value="Electrician" />
//             </Picker>
//             <Text style={{ color: 'black', marginTop: 18, marginRight: 10, fontSize: 15 }}>Category</Text>
//           </View>
//         </View>
//         {/* <View style={{ marginLeft: '15%', marginTop: '5%' }}>
//           <Text style={{ color: '#353535', fontSize: 18, fontStyle: 'normal' }}>Address</Text>
//         </View>
//          <View style={styles.containerRectangle}>
//           <View style={styles.rect3}>
//             <TextInput style={styles.textInputPhone}
//               placeholder="Telangana"
//               onChangeText={(state) => setData({ ...data, state: state })}
//             />
//             <Text style={{ color: 'black', marginTop: 15, marginRight: 10, fontSize: 15 }} >State</Text>
//           </View>
//         </View>
//         <View style={styles.containerRectangle}>
//           <View style={styles.rect3}>
//             <TextInput style={styles.textInputPhone}
//               placeholder="Hyderabad"
//               onChangeText={(city) => setData({ ...data, city: city })}
//             />
//             <Text style={{ color: 'black', marginTop: 15, marginRight: 10, fontSize: 15 }}>City</Text>
//           </View>
//         </View>
//         <View style={styles.containerRectangle}>
//           <View style={styles.rect3}>
//             <TextInput style={styles.textInputPhone}
//               placeholder="Kavuri Hills"
//               onChangeText={(area) => setData({ ...data, area: area })}
//             />
//             <Text style={{ color: 'black', marginTop: 15, marginRight: 10, fontSize: 15 }}>Area</Text>
//           </View>
//         </View>
//         <View style={styles.containerRectangle}>
//           <View style={styles.rect3}>
//             <TextInput style={styles.textInputPhone}
//               placeholder="Jon Snow"
//               onChangeText={(street) => setData({ ...data, street: street })}
//             />
//             <Text style={{ color: 'black', marginTop: 15, marginRight: 10, fontSize: 15 }}>Street</Text>
//           </View>
//         </View>
//         <View style={styles.containerRectangle}>
//           <View style={styles.rect3}>
//             <TextInput style={styles.textInputPhone}
//               placeholder="Lamba Trendz Uniworks"
//               onChangeText={(building) => setData({ ...data, building: building })}
//             />
//             <Text style={{ color: 'black', marginTop: 15, marginRight: 10, fontSize: 15 }}>Building</Text>
//           </View>
//         </View>
//         <View style={styles.containerRectangle}>
//           <View style={styles.rect3}>
//             <TextInput style={styles.textInputPhone}
//               placeholder="2nd Floor"
//               onChangeText={(flatNo) => setData({ ...data, flatNo: flatNo })}
//             />
//             <Text style={{ color: 'black', marginTop: 15, marginRight: 10, fontSize: 15 }}>Flat No.</Text>
//           </View>
//         </View> */}
//         <MapView
//           style={{ top: 30, width: '100%', height: 200 }}
//           scrollEnabled={true}
//           Region={{ latitude: latitude, longitude: longitude }}
//           customMapStyle={mapStyle}
//         >
//           <Marker
//             coordinate={{ latitude: latitude, longitude: longitude, latitudeDelta: 0.02, longitudeDelta: 0.02 }}
//             pinColor={"white"}
//             title={"You are here"}
//           />
//         </MapView>
//         <TouchableOpacity style={styles.SubmitButtonStyle} onPress={handleSubmit}>
//           <Text style={{ fontSize: 20, marginTop: 13, color: '#ffffff' }}>Proceed</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 4
//   },
//   containerRectangleName: {
//     marginTop: 40,
//     alignItems: 'center'
//   },
//   containerRectangle: {
//     marginTop: 15,
//     alignItems: 'center'
//   },
//   rect3: {
//     width: "75%",
//     height: 60,
//     backgroundColor: "rgba(255,255,255,1)",
//     borderWidth: 1,
//     borderColor: "rgba(112,112,112,1)",
//     borderStyle: "solid",
//     borderRadius: 100,
//     flexDirection: "row",
//     paddingStart: 20
//   },
//   textInputPhone: {
//     flex: 1,
//     marginTop: Platform.OS === 'android' ? 0 : -12,
//     paddingLeft: 10,
//     color: '#05375a',
//     flexDirection: 'row',
//     maxWidth: '80%'
//   },
//   SubmitButtonStyle: {
//     marginTop: '15%',
//     marginBottom: '15%',
//     marginLeft: '10%',
//     height: 60,
//     marginRight: '10%',
//     backgroundColor: '#99DD70',
//     borderRadius: 60,
//     borderWidth: 1,
//     borderColor: '#fff',
//     alignItems: 'center',
//     marginBottom: '10%'
//   },
// });

// export default PersonalDetailsScreen;

/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react"
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, PermissionsAndroid } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Geolocation from "react-native-geolocation-service"
import MapView, { Marker } from 'react-native-maps'
import { Picker } from '@react-native-picker/picker'
import AsyncStorage from '@react-native-community/async-storage'
import { useTranslation } from 'react-i18next'
import i18n from '../../components/i18n'

function PersonalDetailsScreen({ navigation }) {

  const { t } = useTranslation();

  useEffect(() => {
    navigation.addListener('focus', () => {
      AsyncStorage.getItem('LANG').then((value) => {
        if (value == "en") { i18n.changeLanguage('en') }
        else if (value == "hi") { i18n.changeLanguage('hi') }
      });
    });
  }, [navigation]);

  var mapStyle = [{ "elementType": "geometry", "stylers": [{ "color": "#242f3e" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#746855" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#242f3e" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#263c3f" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#6b9a76" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#38414e" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#212a37" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#9ca5b3" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#746855" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#1f2835" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#f3d19c" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#2f3948" }] }, { "featureType": "transit.station", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#17263c" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#515c6d" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#17263c" }] }];

  const [latitude, setlatitude] = useState(17.437328);
  const [longitude, setlongitude] = useState(78.394665);
  const [data, setData] = useState({ email: '', emergencyNumber: '', category: '', state: '', city: '', area: '', street: '', building: '', flatNo: '' });
  const [selectedValue, setSelectedValue] = useState("Carpenter");
  const [errors, setErrors] = useState([])

  async function requestPermissions() {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      Geolocation.setRNConfiguration({ skipPermissionRequests: false, authorizationLevel: 'whenInUse' });
    }
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    }
  }

  useEffect(() => {
    requestPermissions();
    Geolocation.getCurrentPosition(
      (position) => { setlatitude(position.coords.latitude); setlongitude(position.coords.longitude); },
      error => { Alert.alert(error.message.toString()); },
      { showLocationDialog: true, enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  });

  const handleSubmit = async () => {

    let errors = []
    if (data.emergencyNumber === '') { errors.push('emergencyNumber') }
    if (data.email === '') { errors.push('email') }
    if (data.street === '') { errors.push('street') }
    if (data.flatNo === '') { errors.push('flatNo') }
    if (errors.length) { setErrors(errors) }

    console.log(data)
    let array = []
    if (data.category == 'Carpentery') {
      array.push(1);
    }
    try {
      console.log(await AsyncStorage.getItem('accessToken'))
      const result = await fetch("https://uniworksvendorapis.herokuapp.com/user/+918174033803", {
        method: 'PUT',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: 'Kar1596977190778',
          name: 'Kartik',
          contact: "+918174033803",
          role: 'CSVD',
          emergencyContact: data.emergencyNumber,
          email: data.email,
          state: data.state,
          city: data.city,
          area: data.area,
          street: data.street,
          building: data.building,
          flat: data.flatNo,
          zip: 273001,
          lat: latitude,
          long: longitude,
          agreement: "A letter of agreement is an important document in a business relationship, but with so many types of agreements, it can be difficult to know what each one needs to include. Using an agreement template makes the task much easier. That way you can focus your time and energy on more important aspects of your business transaction. Below, we have different agreement templates arranged by purpose, which saves you the trouble of making one from scratch. Learn about the different kinds of agreements here, and then choose the one that works best for your needs.",
          categories: array,
        })
      }).then((response) => {
        const statusCode = response.status
        console.log(statusCode)
        navigation.navigate("UpcomingTaskContractorScreen");
        return response.json();
      }).then(json => console.log(json))
        .catch(e => console.log(e.toString()))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={{ marginLeft: 55, marginTop: 10 }}>
          <Text style={{ fontFamily: 'Sansserif', fontSize: 28 }}>Hey, Arun!</Text>
          <Text style={{ color: 'rgb(150,150,150)', marginTop: 25, fontFamily: 'Sansserif', fontSize: 20 }}>{t('you\'re almost there')}{"..."} </Text>
        </View>
        <View style={styles.containerRectangleName}>
          <View style={[styles.rect3, { borderColor: errors.includes('emergencyNumber') ? 'red' : 'rgba(112,112,112,1)' }]}>
            <TextInput style={styles.textInputPhone}
              placeholder="98393xxxx"
              keyboardType="numeric"
              onChangeText={(number) => setData({ ...data, emergencyNumber: number })}
            />
            <Text style={{ color: 'black', marginTop: 18, marginRight: 10, fontSize: 15 }}>{t('Emergency Contact')}</Text>
          </View>
        </View>
        <View style={styles.containerRectangle}>
          <View style={[styles.rect3, { borderColor: errors.includes('email') ? 'red' : 'rgba(112,112,112,1)' }]}>
            <TextInput style={styles.textInputPhone}
              placeholder="abc@gmail.com"
              onChangeText={(email) => setData({ ...data, email: email })}
            />
            <Text style={{ color: 'black', marginTop: 18, marginRight: 10, fontSize: 15 }}>{t('E-mail')}</Text>
          </View>
        </View>
        <View style={styles.containerRectangle}>
          <View style={styles.rect3}>
            <Picker
              selectedValue={selectedValue}
              mode="dropdown"
              style={[styles.textInputPhone, { height: 40, width: '90%', marginTop: 10 }]}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Carpenter" value="Carpenter" />
              <Picker.Item label="Labour" value="Labour" />
              <Picker.Item label="Electrician" value="Electrician" />
            </Picker>
            <Text style={{ color: 'black', marginTop: 18, marginRight: 10, fontSize: 15 }}>{t('Category')}</Text>
          </View>
        </View>
        {/* <View style={{ marginLeft: '15%', marginTop: '5%' }}>
          <Text style={{ color: '#353535', fontSize: 18, fontStyle: 'normal' }}>Address</Text>
        </View> */}
        {/* <View style={styles.containerRectangle}>
          <View style={styles.rect3}>
            <TextInput style={styles.textInputPhone}
              placeholder="Telangana"
              onChangeText={(state) => setData({ ...data, state: state })}
            />
            <Text style={{ color: 'black', marginTop: 15, marginRight: 10, fontSize: 15 }} >State</Text>
          </View>
        </View> */}
        {/* <View style={styles.containerRectangle}>
          <View style={styles.rect3}>
            <TextInput style={styles.textInputPhone}
              placeholder="Hyderabad"
              onChangeText={(city) => setData({ ...data, city: city })}
            />
            <Text style={{ color: 'black', marginTop: 15, marginRight: 10, fontSize: 15 }}>City</Text>
          </View>
        </View> */}
        {/* <View style={styles.containerRectangle}>
          <View style={styles.rect3}>
            <TextInput style={styles.textInputPhone}
              placeholder="Kavuri Hills"
              onChangeText={(area) => setData({ ...data, area: area })}
            />
            <Text style={{ color: 'black', marginTop: 15, marginRight: 10, fontSize: 15 }}>Area</Text>
          </View>
        </View> */}
        <View style={styles.containerRectangle}>
          <View style={[styles.rect3, { borderColor: errors.includes('street') ? 'red' : 'rgba(112,112,112,1)' }]}>
            <TextInput style={styles.textInputPhone}
              placeholder={t('Landmark')}
              onChangeText={(street) => setData({ ...data, street: street })}
            />
            <Text style={{ color: 'black', marginTop: 15, marginRight: 10, fontSize: 15 }}>{t('Street')}</Text>
          </View>
        </View>
        {/* <View style={styles.containerRectangle}>
          <View style={styles.rect3}>
            <TextInput style={styles.textInputPhone}
              placeholder="Lamba Trendz Uniworks"
              onChangeText={(building) => setData({ ...data, building: building })}
            />
            <Text style={{ color: 'black', marginTop: 15, marginRight: 10, fontSize: 15 }}>Building</Text>
          </View>
        </View> */}
        <View style={styles.containerRectangle}>
          <View style={[styles.rect3, { borderColor: errors.includes('flatNo') ? 'red' : 'rgba(112,112,112,1)' }]}>
            <TextInput style={styles.textInputPhone}
              placeholder={t('Nearby place')}
              onChangeText={(flatNo) => setData({ ...data, flatNo: flatNo })}
            />
            {/* <Text style={{ color: 'black', marginTop: 15, marginRight: 10, fontSize: 15 }}></Text> */}
          </View>
        </View>
        <View style={{ alignSelf: 'center', top: 30, width: '75%', height: 200, borderRadius: 10, overflow: 'hidden' }}>
          <MapView
            style={{ width: '100%', height: 200 }}
            scrollEnabled={true}
            Region={{ latitude: latitude, longitude: longitude }}
            customMapStyle={mapStyle}
          >
            <Marker
              coordinate={{ latitude: latitude, longitude: longitude, latitudeDelta: 0.02, longitudeDelta: 0.02 }}
              pinColor={"white"}
              title={"You are here"}
            />
          </MapView>
        </View>
        <TouchableOpacity style={styles.SubmitButtonStyle} onPress={handleSubmit}>
          <Text style={{ fontSize: 20, marginTop: 13, color: '#ffffff' }}>{t('Proceed')}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 4,
    backgroundColor: 'rgb(245,275,245)'
  },
  containerRectangleName: {
    marginTop: 40,
    alignItems: 'center',
    marginTop: 12
  },
  containerRectangle: {
    marginTop: 15,
    alignItems: 'center'
  },
  rect3: {
    width: "75%",
    height: 60,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(112,112,112,1)",
    borderStyle: "solid",
    borderRadius: 100,
    flexDirection: "row",
    paddingStart: 20,
  },
  textInputPhone: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    flexDirection: 'row',
    maxWidth: '80%'
  },
  SubmitButtonStyle: {
    marginTop: '15%',
    marginBottom: '15%',
    marginLeft: '10%',
    height: 60,
    marginRight: '10%',
    backgroundColor: '#99DD70',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    marginBottom: '10%'
  },
});

export default PersonalDetailsScreen;
