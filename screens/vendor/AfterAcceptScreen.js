import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import Feather from 'react-native-vector-icons/FontAwesome'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import MapView, { Marker } from 'react-native-maps'
import AsyncStorage from '@react-native-community/async-storage'
import { useTranslation } from 'react-i18next'
import i18n from '../../components/i18n'

class MapsView extends React.Component {

  onRegionChange(region) { this.setState({ region }); }

  render() {

    var mapStyle = [{ "elementType": "geometry", "stylers": [{ "color": "#242f3e" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#746855" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#242f3e" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#263c3f" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#6b9a76" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#38414e" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#212a37" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#9ca5b3" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#746855" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#1f2835" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#f3d19c" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#2f3948" }] }, { "featureType": "transit.station", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#17263c" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#515c6d" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#17263c" }] }];

    return (
      <MapView
        style={{ top: 20, width: '100%', height: 400 }}
        scrollEnabled={true}
        initialRegion={{
          latitude: 17.437328,
          longitude: 78.394665,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        customMapStyle={mapStyle}
      >
        <Marker coordinate={{
          latitude: 17.437328,
          longitude: 78.394665,
        }}
          pinColor={"white"}
          title={"UniworksDesigns"}
          description={"just for testing"} />
      </MapView>

    );
  }
}

const AfterAcceptScreen = ({ navigation: { goBack }, navigation }) => {

  const { t } = useTranslation();

  useEffect(() => {
    navigation.addListener('focus', () => {
      AsyncStorage.getItem('LANG').then((value) => {
        if (value == "en") { i18n.changeLanguage('en') }
        else if (value == "hi") { i18n.changeLanguage('hi') }
      });
    });
  }, [navigation]);

  const dates = { dateFrom: '24/05/2020', dateTo: '28/04/2020' }

  const Timing = { timingFrom: '9:30', timingTo: '18:30' }

  return (
    <ScrollView >
      <View style={styles.mainContainer}>
        <View style={{ alignItems: 'center', marginTop: '13%', flexDirection: 'row', marginLeft: '10%', marginRight: '10%' }}>
          <Text style={{ fontSize: 18 }}>{t('Site Engineer Name')}</Text>
          <View style={styles.SiteEngineerFiller}></View>
          <Feather name="phone" color="black" size={25} style={{ top: 5 }} />
        </View>
        <View>
          <MapsView />
        </View>
        <View style={{ flex: 1, marginTop: '10%' }}>
          <View style={styles.SiteEngineerRow}>
            <Text style={{ color: '#353535', fontSize: 18, fontWeight: 'bold' }}>{t('Address')}</Text>
            <View style={styles.SiteEngineerFiller}></View>
            <Feather name="share-alt" color="black" size={25} style={{ top: 5 }} />
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: '20%', marginTop: 15 }}>
            <Text style={styles.TypeStyle, { fontSize: 20 }}>{t('Type')}</Text>
            <View style={styles.signInFiller}></View>
            <Text style={styles.Number, { fontSize: 20 }}>{t('Number')}</Text>
          </View>
          <View style={{
            marginTop: 15,
            marginLeft: '20%', marginRight: '25%', flexDirection: 'row'
          }}>
            <Text style={styles.TypeStyle} >{t('Skills')}</Text>
            <View style={styles.signInFiller}></View>
            <Text style={styles.Number}>18</Text>
          </View>
          <View style={{
            marginTop: 15,
            marginLeft: '20%',
            marginRight: '25%', flexDirection: 'row'
          }}>
            <Text style={styles.TypeStyle} >{t('Semi-skilled')}</Text>
            <View style={styles.signInFiller}></View>
            <Text style={styles.Number}>269</Text>
          </View>
          <View style={{
            marginTop: 15,
            marginLeft: '20%',
            marginRight: '25%', flexDirection: 'row'
          }}>
            <Text style={styles.TypeStyle} >{t('Unskilled')}</Text>
            <View style={styles.signInFiller}></View>
            <Text style={styles.Number}>25</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.TypeStyle, { top: 25, fontSize: 20, marginLeft: '15%' }}>{t('Tools')}</Text>
            <Text style={{ marginLeft: '20%', marginTop: '10%' }}>{t('Tool')} 0</Text>
            <Text style={{ marginLeft: '20%', marginTop: '5%' }}>{t('Tool')} 1 </Text>
            <Text style={{ marginLeft: '20%', marginTop: '5%' }}>{t('Tool')} 2</Text>
            <Text style={{ marginLeft: '20%', marginTop: '5%' }}>{t('Tool')} 3</Text>
            <Text style={{ marginLeft: '20%', marginTop: '5%' }}>{t('Tool')} 4</Text>
            <Text style={{ marginLeft: '20%', marginTop: '6%' }}>{t('Tool')} 5</Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: '10%', flexDirection: 'row', marginLeft: '10%', marginRight: '10%' }}>
            <Text style={{ fontSize: 20, fontStyle: 'normal', color: '#353535' }}> {dates.dateFrom} </Text>
            <View style={{ alignItems: 'center', marginLeft: '10%' }}>
              <Text style={{ color: '#353535', fontSize: 20 }}>{t('to')}</Text>
            </View>
            <Text style={{ fontSize: 20, marginLeft: '10%' }}>{dates.dateTo}</Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: '5%', flexDirection: 'row', marginLeft: '33%', marginRight: '10%' }}>
            <Text style={{ fontSize: 20, fontStyle: 'normal', color: 'grey' }}> {Timing.timingFrom} </Text>
            <View style={{ alignItems: 'center', marginLeft: '5%' }}>
              <Text style={{ color: '#353535', fontSize: 20 }}>-</Text>
            </View>
            <Text style={{ fontSize: 20, marginLeft: '5%', color: 'grey' }}>{Timing.timingTo}</Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: '12%' }}>
            <Text style={{ fontSize: 36 }}>478 {t('Sqft')}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: '10%', marginTop: 30 }}>
            <TouchableOpacity onPress={() => navigation.navigate('After Reaching Site')} >
              <Text style={{ fontSize: 24, color: '#93D152' }}>{t('Update')}</Text>
            </TouchableOpacity >
            <View style={styles.SiteEngineerFiller}></View>
            <TouchableOpacity onPress={() => goBack()} >
              <Text style={{ fontSize: 24, color: '#FF0000' }}>{t('Cancel')}</Text>
            </TouchableOpacity >
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginBottom: '20%'
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
  }
})

export default AfterAcceptScreen;