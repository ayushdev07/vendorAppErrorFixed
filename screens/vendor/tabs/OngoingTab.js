import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'

const UpcomingCard = ({ status, bookingId, Name, Sqft, Address, Amount, Days }) => {
  var progressbar = (Days == "24/27") ? true : false
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentBox}>
        <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: '2%' }}>{status}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 16 }}>Booking ID :</Text>
          <Text style={{ marginStart: '2%', fontSize: 14 }}>{bookingId}</Text>
          <TouchableOpacity style={{ marginLeft: '36%' }}>
            <Feather name='copy' size={24} style={{ color: '#000' }} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.contentBox, { flexDirection: "row", marginTop: '5%' }]}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{Name}</Text>
        <View style={styles.filler} />
        <Text style={{ fontSize: 18, marginEnd: '5%', color: '#353535', fontWeight: "bold" }}>{Sqft + " Sqft"}</Text>
      </View>
      <View style={[styles.contentBox, { flexDirection: "row" }]}>
        <Text style={{ fontSize: 18, color: '#353535', maxWidth: '50%' }}><Feather name='map-pin' size={24} style={{ color: '#000' }} /></Text>
        <View style={styles.filler} />
        <Text style={{ fontSize: 18, marginEnd: '5%', marginBottom: '2%', color: '#353535', fontWeight: "bold" }}>{"₹ " + Amount}</Text>
      </View>
      <Text style={{ fontSize: 18, marginStart: '5%', marginBottom: '2%', fontWeight: "bold" }}>{Days}{" Days"}</Text>
      {
        progressbar
          ?
          <>
            <View style={{ flexDirection: "row" }}>
              <View style={{ backgroundColor: "#007FFF", height: 5, width: "88.88%" }}></View>
              <View style={{ backgroundColor: "lightblue", height: 5, width: "11.12%" }}></View>
            </View>
          </>
          :
          <>
            <View style={{ flexDirection: "row" }}>
              <View style={{ backgroundColor: "#007FFF", height: 5, width: "66.66%" }}></View>
              <View style={{ backgroundColor: "lightblue", height: 5, width: "33.34%" }}></View>
            </View>
          </>
      }
    </View>
  )
}

const OngoingTab = () => {

  const [showPaused, setShowPaused] = useState(true)

  return (
    <ScrollView>
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <View style={{ marginTop: '5%', marginHorizontal: '10%', flex: 1, flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginRight: "5%" }}>Paused</Text>
          <TouchableOpacity onPress={() => setShowPaused(!showPaused)}>
            {showPaused ? <Feather name='chevron-down' size={18} /> : <Feather name='chevron-up' size={18} />}
          </TouchableOpacity>
        </View>
        {
          showPaused ?
            <>
              <UpcomingCard status="🔴 Live" bookingId='UWHYD00001043' Name='Arun'
                Sqft="45,982" Address="D-216, DSR For" Amount='24,500' Days="24/27" />
              <UpcomingCard status="🔴 Live" bookingId='UWHYD00001043' Name='Ayush'
                Sqft="45,982" Address="D-216, DSR For" Amount='24,500' Days="24/27" />
              <UpcomingCard status="🔴 Live" bookingId='UWHYD00001043' Name='CM'
                Sqft="45,982" Address="D-216, DSR For" Amount='24,500' Days="24/27" />
              <UpcomingCard status="🟡 Paused" bookingId='UWHYD00001043' Name='Guddu'
                Sqft="45,982" Address="D-216, DSR For" Amount='24,500' Days="10/15" />
              <UpcomingCard status="🟡 Paused" bookingId='UWHYD00001043' Name='Aman'
                Sqft="45,982" Address="D-216, DSR For" Amount='24,500' Days="10/15" />
            </>
            :
            <>
              <UpcomingCard status="🟡 Paused" bookingId='UWHYD00001043' Name='Ankit'
                Sqft="45,982" Address="D-216, DSR For" Amount='24,500' Days="10/15" />
              <UpcomingCard status="🟡 Paused" bookingId='UWHYD00001043' Name='Piyush'
                Sqft="45,982" Address="D-216, DSR For" Amount='24,500' Days="10/15" />
              <UpcomingCard status="🔴 Live" bookingId='UWHYD00001043' Name='Aditya'
                Sqft="45,982" Address="D-216, DSR For" Amount='24,500' Days="24/27" />
              <UpcomingCard status="🔴 Live" bookingId='UWHYD00001043' Name='Ankush'
                Sqft="45,982" Address="D-216, DSR For" Amount='24,500' Days="24/27" />
              <UpcomingCard status="🔴 Live" bookingId='UWHYD00001043' Name='Abhishek'
                Sqft="45,982" Address="D-216, DSR For" Amount='24,500' Days="24/27" />
            </>
        }
      </View>
    </ScrollView>
  )
}

export default OngoingTab;

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: '4%',
    backgroundColor: '#edda95',
    borderRadius: 15,
    marginHorizontal: '5%',
    flex: 1,
    maxHeight: '70%',
    overflow: 'hidden',
    shadowColor: '#0d0c0a',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.6,
    shadowRadius: 16.00,
    elevation: 15,
  },
  contentBox: {
    marginStart: '5%',
    marginTop: '2%',
    marginEnd: '5%',
  },
  filler: {
    flex: 1,
    flexDirection: 'row'
  },
});