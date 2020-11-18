import React,{useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-community/async-storage'
import { useTranslation } from 'react-i18next'
import i18n from '../../../components/i18n'

const OpportunityCard = ({ bookingId, Name, Sqft, Address, Amount }) => {
  const { t } = useTranslation();
  useEffect((value) => {
            if (value == "en") { i18n.changeLanguage('en') }
            else if (value == "hi") { i18n.changeLanguage('hi') }
        });
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentBox}>
        <Text style={{ marginStart: '0.5%', fontSize: 18 }}>{Name}</Text>
        <TouchableOpacity style={{ marginLeft: '72%' }}>
          <Feather name='map-pin' size={24} style={{ color: '#000' }} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentBox}>
        <Text style={{ marginStart: '0.5%', fontSize: 16 }}>Rs :</Text>
        <Text style={{ marginStart: '1.5%', marginTop: '0.5%', fontSize: 14 }}>{Amount}</Text>
        <View style={styles.filler} />
        <Text style={{ fontSize: 18, marginEnd: '5%', color: '#353535' }}>{Sqft + " Sqft"}</Text>
      </View>
      <View style={{ marginStart: '5%', flexDirection: 'row', marginTop: '2%', marginEnd: '5%', paddingBottom: 10, borderWidth: 1, marginBottom: 8, borderRadius: 10, backgroundColor: 'white' }} >
        {/* <Text style={{ fontSize: 18, color: '#353535', maxWidth: '50%' }}>{Address.substring(0, 14) + "..."}</Text> */}
        <Button color='green' onPress={() => alert("Approved")} style={{ fontSize: 18, maxWidth: '50%', marginStart: '-1%' }}>{t('Approve')}</Button>
        <View style={styles.filler} />
        {/* <Text style={{ fontSize: 18, marginEnd: '4%', color: '#353535' }}>{"₹ " + Amount}</Text> */}
        <Button color='red' onPress={() => alert("Rejected")} style={{ fontSize: 18, maxWidth: '50%', marginEnd: '2%', }}>{t('Reject')}</Button>
      </View>
    </View>
  )
}

const OpportunityTab = () => {
  const { t } = useTranslation();
      useEffect((value) => {
                if (value == "en") { i18n.changeLanguage('en') }
                else if (value == "hi") { i18n.changeLanguage('hi') }
            });
  return (
    <ScrollView>
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <View style={{ marginTop: '5%', marginHorizontal: '10%' }}>
          <Text style={{ fontSize: 18, color: '#353535' }}>08/11/2020</Text>
        </View>
        <OpportunityCard bookingId='UWHYD00001043' Name={t('Site Name')} Sqft="45,982" Address="D-216, DSR For" Amount='24,500' />
        <OpportunityCard bookingId='UWHYD00001043' Name={t('Site Name')} Sqft="45,982" Address="D-216, DSR For" Amount='24,500' />
        <OpportunityCard bookingId='UWHYD00001043' Name={t('Site Name')} Sqft="45,982" Address="D-216, DSR For" Amount='24,500' />
        <View style={{ marginTop: '5%', marginHorizontal: '10%' }}>
          <Text style={{ fontSize: 18, color: '#353535' }}>09/11/2020</Text>
        </View>
        <OpportunityCard bookingId='UWHYD00001043' Name={t('Site Name')} Sqft="45,982" Address="D-216, DSR For" Amount='24,500' />
        <OpportunityCard bookingId='UWHYD00001043' Name={t('Site Name')} Sqft="45,982" Address="D-216, DSR For" Amount='24,500' />
        <OpportunityCard bookingId='UWHYD00001043' Name={t('Site Name')} Sqft="45,982" Address="D-216, DSR For" Amount='24,500' />
        <OpportunityCard bookingId='UWHYD00001043' Name={t('Site Name')} Sqft="45,982" Address="D-216, DSR For" Amount='24,500' />
      </View>
    </ScrollView>
  )
}

export default OpportunityTab;

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: '2%',
    backgroundColor: 'white',
    marginHorizontal: '5%',
    borderRadius: 10,
    flex: 1,
    maxHeight: '50%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 16.00,
    elevation: 13,
  },
  contentBox: {
    marginStart: '5%',
    flexDirection: 'row',
    marginTop: '3%',
    marginEnd: '5%',
    paddingBottom: 10,
    // borderWidth:1
  },
  filler: {
    flex: 1,
    flexDirection: 'row'
  },
});