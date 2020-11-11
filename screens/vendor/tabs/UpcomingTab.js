import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'

const UpcomingCard = ({ bookingId, Name, Sqft, Address, Amount }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentBox}>
        <Text style={{ fontSize: 16 }}>Booking ID :</Text>
        <Text style={{ marginStart: '2%', fontSize: 14 }}>{bookingId}</Text>
        <TouchableOpacity style={{ marginLeft: '36%' }}>
          <Feather name='copy' size={24} style={{ color: '#000' }} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentBox}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{Name}</Text>
        <View style={styles.filler} />
        <Text style={{ fontSize: 18, marginEnd: '5%', color: '#353535', fontWeight: "bold" }}>{Sqft + " Sqft"}</Text>
      </View>
      <View style={styles.contentBox}>
        <Text style={{ fontSize: 18, color: '#353535', maxWidth: '50%' }}><Feather name='map-pin' size={24} style={{ color: '#000' }} /></Text>
        <View style={styles.filler} />
        <Text style={{ fontSize: 18, marginEnd: '5%', color: '#353535', fontWeight: "bold" }}>{"₹ " + Amount}</Text>
      </View>
    </View>
  )
}

const UpcomingTab = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <UpcomingCard bookingId='UWHYD00001043' Name='Arun' Sqft="45,982" Address="D-216, DSR For" Amount='24,500' />
        <UpcomingCard bookingId='UWHYD00001043' Name='Ayush' Sqft="45,982" Address="D-216, DSR For" Amount='24,500' />
        <UpcomingCard bookingId='UWHYD00001043' Name='Cm' Sqft="45,982" Address="D-216, DSR For" Amount='24,500' />
      </View>
    </ScrollView>
  )
}

export default UpcomingTab;

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: '4%',
    backgroundColor: '#e3e4e6',
    // borderRadius: 15,
    marginHorizontal: '5%',
    flex: 1,
    maxHeight: '50%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  contentBox: {
    marginStart: '5%',
    flexDirection: 'row',
    marginTop: '5%',
    marginEnd: '5%',
    paddingBottom: 10,
  },
  filler: {
    flex: 1,
    flexDirection: 'row'
  },
});