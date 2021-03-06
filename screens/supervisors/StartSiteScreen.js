import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native'
import Feather from 'react-native-vector-icons/FontAwesome'
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler'
import MapView, { Marker } from 'react-native-maps'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import images from '../../assets/images'
import Spinner from 'react-native-loading-spinner-overlay'
import AsyncStorage from '@react-native-community/async-storage'
import { useTranslation } from 'react-i18next'
import i18n from '../../components/i18n'

const StartSiteScreen = ({ navigation, route }) => {

  const { t } = useTranslation();

  const onRegionChange = (region) => {
    this.setState({ region });
  }

  var mapStyle = [{ "elementType": "geometry", "stylers": [{ "color": "#242f3e" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#746855" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#242f3e" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#263c3f" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#6b9a76" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#38414e" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#212a37" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#9ca5b3" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#746855" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#1f2835" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#f3d19c" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#2f3948" }] }, { "featureType": "transit.station", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#17263c" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#515c6d" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#17263c" }] }];

  const [showDescription, setShowDescription] = useState(false)

  var Images = [images.welcom1Image, images.welcom2Image, images.welcom3Image, images.welcom4Image]

  const Timing = { timingFrom: '9:30', timingTo: '18:30' }

  const handleShowDescription = () => { setShowDescription(!showDescription) }

  const [plans, setPlans] = useState([]);
  const [project, setProject] = useState([])
  const [isLoading, setLoading] = useState(true)

  const renderTools = ({ item }) => { return (<Text style={{ marginLeft: '20%', marginTop: '5%' }} >-{item.toolName} </Text>) }

  const fetchSiteRequest = async () => {
    let result = await fetch('https://uniworksvendorapis.herokuapp.com/siteRequest/1')
      .then(response => {
        return response.json()
      })
      .then(json => {
        setPlans(json.plans)
        setProject(json.project)
        setLoading(false)
      })
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      AsyncStorage.getItem('LANG').then((value) => {
        if (value == "en") { i18n.changeLanguage('en') }
        else if (value == "hi") { i18n.changeLanguage('hi') }
      });
    });
  }, [navigation]);

  useEffect(() => { fetchSiteRequest() }, []);

  const renderImages = ({ item }) => {
    return (
      <View>
        <Image style={{ height: 250, width:420 }} source={item} />
      </View>
    )
  }

  return (
    <ScrollView>
      { isLoading ? <Spinner visible={isLoading} textStyle={{ color: '#FFF' }} /> :
        <View style={styles.mainContainer}>
          {/* <Text style={{ color: '#909090', fontSize: 30, alignSelf: 'center' }}>{project.Category.categoryName}</Text> */}
          <Text style={{ color: '#909090', fontSize: 30, alignSelf: 'center' }}>{t('Carpentary')}</Text>
          {/* <Text style={{ color: '#909090', fontSize: 18, alignSelf: 'center', opacity: 0.5 }}>{project.SubCategory.subcategoryName}</Text> */}
          <Text style={{ color: '#909090', fontSize: 18, alignSelf: 'center', opacity: 0.5 }}>{t('Wooden Partition Description')}</Text>
          <View style={{ backgroundColor: '#000000', alignItems: 'center', marginTop: '5%' }}>
            <View style={{ alignItems: 'center', marginBottom: '5%' }}>
              <Text style={{ paddingTop: 15, color: '#ffffff', fontSize: 20 }}>{t('Description')}</Text>
              <View style={{ marginTop: 10, alignItems: 'center', width: '75%' }}>
                {
                  showDescription ?
                    // <Text style={{ color: '#ffffff', fontSize: 16, textAlign: 'left', }}>{project.SubCategory.description}</Text>
                    <Text style={{ color: '#ffffff', fontSize: 16, textAlign: 'left', }}>{t('Carpentary')}</Text>
                    :
                    <Text style={{ color: '#ffffff', fontSize: 16, textAlign: 'left', }}>{t('Wooden Partition Description')}</Text>
                }
              </View>
              <View style={{ marginTop: '5%' }}>
                <View style={styles.knowMore}>
                  <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row' }} onPress={handleShowDescription}>
                    <Text style={{ color: '#ffffff' }}>{t('See More')}</Text>
                    <MaterialIcons name='keyboard-arrow-right' color='#ffffff' size={20} style={{ marginStart: '10%' }} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View>
            <MapView
              style={{ width: '100%', height: 400 }}
              scrollEnabled={true}
              Region={{
                latitude: project.lat,
                longitude: project.long,
                latitudeDelta: 15.000,
                longitudeDelta: 15.000,
              }}
              customMapStyle={mapStyle}
            >
              <Marker coordinate={{
                latitude: parseFloat(project.lat),
                longitude: parseFloat(project.long),
              }}
                pinColor={"white"}
                // title={project.Category.categoryName}
                title='Site location'
                description={project.SubCategory.subcategoryName} />
            </MapView>
          </View>
          <View style={{ flex: 1, marginTop: '10%' }}>
            <View style={styles.SiteEngineerRow}>
              {/* <Text style={{ color: '#353535', fontSize: 18, fontWeight: 'bold', maxWidth: '80%' }}>{project.address} {project.zip.toString()}</Text> */}
              <Text style={{ color: '#353535', fontSize: 18, fontWeight: 'bold', maxWidth: '80%' }}>{t('Financial district Hyderabad')} {project.zip.toString()}</Text>
              <View style={styles.SiteEngineerFiller}></View>
              <Feather name="share-alt" color="black" size={25} style={{ top: 5 }} />
            </View>
            {/* <View style={{ flexDirection: 'row', marginHorizontal: '20%', marginTop: 30 }}>
              <Text style={styles.TypeStyle, { fontSize: 20 }}>{t('Type')}</Text>
              <View style={styles.signInFiller}></View>
              <Text style={styles.Number, { fontSize: 20 }}>{t('Number')}</Text>
            </View> */}
            {/* <View style={{ marginTop: 15, marginLeft: '20%', marginRight: '25%', flexDirection: 'row'}}>
              <Text style={styles.TypeStyle} >{t('Skills')}</Text>
              <View style={styles.signInFiller}></View>
              <Text style={styles.Number}>{project.skilled.toString()}</Text>
            </View> */}
            {/* <View style={{marginTop: 15, marginLeft: '20%', marginRight: '25%', flexDirection: 'row'}}>
              <Text style={styles.TypeStyle} >{t('Semi skilled')}</Text>
              <View style={styles.signInFiller}></View>
              <Text style={styles.Number}>{project.semiSkilled.toString()}</Text>
            </View> */}
            {/* <View style={{marginTop: 15, marginLeft: '20%', marginRight: '25%', flexDirection: 'row' }}>
              <Text style={styles.TypeStyle} >{t('Unskilled')}</Text>
              <View style={styles.signInFiller}></View>
              <Text style={styles.Number}>{project.unSkilled.toString()}</Text>
            </View> */}
            <View style={{ flex: 1 }}>
              {/* <Text style={styles.TypeStyle, { top: 25, fontSize: 20, marginLeft: '15%', marginBottom: 30 }}>{t('Tools')}</Text> */}
              {/* <FlatList
                data={project.SubCategory.tools}
                renderItem={renderTools}
              /> */}
              {/* <View style={{marginTop: 15,marginLeft: '20%', marginRight: '25%', flexDirection: 'row'}}>
                <Text style={styles.TypeStyle} >{t('Hammer')}</Text>
                <View style={styles.signInFiller}></View>
              </View> */}
            {/* <View style={{marginTop: 15, marginLeft: '20%',marginRight: '25%', flexDirection: 'row'}}>
              <Text style={styles.TypeStyle} >{t('Rod')}</Text>
              <View style={styles.signInFiller}></View>
            </View> */}
            {/* <View style={{
              marginTop: 15,
              marginLeft: '20%',
              marginRight: '25%', flexDirection: 'row'
            }}>
              <Text style={styles.TypeStyle} >{t('Axe')}</Text>
              <View style={styles.signInFiller}></View>
            </View> */}
              
            </View>
            <View style={{ alignItems: 'center', marginTop: 60, flexDirection: 'row', marginLeft: '10%', marginRight: '10%' }}>
              <Text style={{ fontSize: 20, fontStyle: 'normal', color: '#353535' }}> {project.startDate} </Text>
              <View style={{ marginLeft: '10%' }}>
                <Text style={{ color: '#353535', fontSize: 20 }}>{t('to')}</Text>
              </View>
              <Text style={{ fontSize: 20, marginLeft: '10%' }}>{project.endDate}</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 30, flexDirection: 'row', marginLeft: '33%', marginRight: '10%' }}>
              <Text style={{ fontSize: 20, fontStyle: 'normal', color: 'grey' }}> {Timing.timingFrom} </Text>
              <View style={{ alignItems: 'center', marginLeft: '5%' }}>
                <Text style={{ color: '#353535', fontSize: 20 }}>-</Text>
              </View>
              <Text style={{ fontSize: 20, marginLeft: '5%', color: 'grey' }}>{Timing.timingTo}</Text>
            </View>
            <View style={{ flex: 1, marginTop: 60 }}>
              <FlatList
                data={Images}
                renderItem={renderImages}
                horizontal={true}
              />
            </View>

            <View style={{ alignItems: 'center', marginTop: '12%' }}  >
              <Text style={{ fontSize: 36 }}>{project.totalArea} {t('Sqft')}</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: '12%' }}  >
              <Text style={{ fontSize: 36 }}>₹ {project.budget}</Text>
            </View>
            {/* <View style={{ flexDirection: 'row', marginTop: 50, marginHorizontal: '10%', justifyContent: 'space-between' }}>
              <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} >
                <Text style={{ fontSize: 24, color: 'green', fontWeight: 'bold' }}>{t('Approve')}</Text>
              </TouchableOpacity >
              <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} >
                <Text style={{ fontSize: 24, color: 'red', fontWeight: 'bold' }}>{t('Reject')}</Text>
              </TouchableOpacity >
            </View> */}
            <View style={{ flexDirection: 'row', marginTop: 50, marginHorizontal: '10%', justifyContent: 'space-between' }}>
              <TouchableOpacity onPress={() => alert('आपका अनुरोध स्वीकार कर लिया गया है। साइट शुरू करने के लिए तैयार है')} >
                <Text style={{ fontSize: 24, color: 'green', fontWeight: 'bold' }}>{t('Approve')}</Text>
              </TouchableOpacity >
              <TouchableOpacity onPress={() => alert('साइट अनुरोध अस्वीकार कर दिया गया')} >
                <Text style={{ fontSize: 24, color: 'red', fontWeight: 'bold' }}>{t('Reject')}</Text>
              </TouchableOpacity >
            </View>
          </View>
        </View>
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginBottom: '20%',
    marginTop: '10%'
  },
  SiteEngineerFiller: {
    flex: 1,
    flexDirection: "row"
  },
  SiteEngineerRow: {
    flexDirection: "row",
    marginLeft: '10%',
    marginRight: '10%',
  },
  knowMore: {
    width: 120,
    height: 40,
    backgroundColor: "#000000",
    borderWidth: 1,
    borderColor: "#ffffff",
    borderStyle: "solid",
    borderRadius: 100,
    flexDirection: "row",
    alignItems: 'center',
    paddingStart: 10,
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 150,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  TypeStyle: {
    color: "#000000",
    fontSize:18
  },
  signInFiller: {
    flex: 1,
    flexDirection: "row"
  },
  Number: {
    color: "#121212",
  },
  ModalRow: {
    flexDirection: "row",
    marginTop: '10%',
    marginLeft: '20%',
    marginRight: '20%'
  }, approvedButton: {
    width: "60%",
    height: 55,
    padding: 25,
    backgroundColor: "#93D152",
    borderWidth: 1,
    borderColor: "rgba(112,112,112,1)",
    borderStyle: "solid",
    borderRadius: 100,
    flexDirection: "row",
    alignItems: 'center',
  },
})

export default StartSiteScreen;
