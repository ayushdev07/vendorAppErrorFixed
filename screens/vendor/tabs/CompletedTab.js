import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'

const CompletedCard = ({ bookingId, Name, Sqft, Address, Amount }) => {
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
        <Text style={{ fontSize: 18, color: '#353535', maxWidth: '50%' }}>{Address.substring(0, 14) + "..."}</Text>
        <View style={styles.filler} />
        <Text style={{ fontSize: 18, marginEnd: '5%', color: '#353535', fontWeight: "bold" }}>{"₹ " + Amount}</Text>
      </View>
    </View>
  )
}

const CompletedTab = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <CompletedCard bookingId='UWHYD00001043' Name='Arun' Sqft="45,982" Address="D-216, DSR For" Amount='24,500' />
        <CompletedCard bookingId='UWHYD00001043' Name='Ayush' Sqft="45,982" Address="D-216, DSR For" Amount='24,500' />
        <CompletedCard bookingId='UWHYD00001043' Name='Cm' Sqft="45,982" Address="D-216, DSR For" Amount='24,500' />
      </View>
    </ScrollView>
  )
}

export default CompletedTab;

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: '4%',
    backgroundColor: '#e3e4e6',
    borderRadius: 15,
    marginHorizontal: '5%',
    flex: 1,
    maxHeight: '50%'
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
  rect3: {
    width: "90%",
    height: 60,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(112,112,112,1)",
    borderStyle: "solid",
    borderRadius: 100,
    flexDirection: "row",
    paddingStart: 20,
    alignSelf: 'center'
  },
  textInputPhone: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    flexDirection: 'row',
    maxWidth: '88%'
  },
});