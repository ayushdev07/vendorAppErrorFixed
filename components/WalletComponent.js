import React,{useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper'
import { useTranslation } from 'react-i18next'
import i18n from './i18n'

const PendingCard = ({ bookingId, Name, Sqft, Address, Amount }) => {
  const { t } = useTranslation();
      useEffect((value) => {
                if (value == "en") { i18n.changeLanguage('en') }
                else if (value == "hi") { i18n.changeLanguage('hi') }
            });
    return (
      <><View style={styles.mainContainer}>
        <View style={styles.contentBox}>
        <Text style={{marginStart: '0.5%', fontSize: 18 }}>{Name}</Text>
          <TouchableOpacity style={{ marginLeft: '72%' }}>
            <Feather name='map-pin' size={24} style={{ color: '#000' }} />
          </TouchableOpacity>
        </View>
        <View style={styles.contentBox}>
        <Text style={{marginStart: '0.5%', fontSize: 16 }}>Rs :</Text>
        <Text style={{ marginStart: '1.5%',marginTop:'0.5%', fontSize: 14 }}>{Amount}</Text>
          <View style={styles.filler} />
          <Text style={{ fontSize: 18, marginEnd: '5%', color: '#353535' }}>{Sqft + " Sqft"}</Text>
        </View>
        <View style={{marginStart: '20%', flexDirection: 'row', marginTop: '2%', marginEnd: '20%', paddingBottom: 10, borderWidth:1, marginBottom:8,borderRadius:10, backgroundColor: 'white'}} >
          <Feather name='check-square' size={28} style={{ marginTop:12,color: '#4ACF4E',marginStart:'15%'  }} />
          <Button color='green' style={{ fontSize: 20,marginStart:'10%',marginTop:8 }}>{t('Completed')}</Button>
        </View>
      </View>
      <View style={styles.mainContainer}>
      <View style={styles.contentBox}>
      <Text style={{marginStart: '0.5%', fontSize: 18 }}>{Name}</Text>
        <TouchableOpacity style={{ marginLeft: '72%' }}>
          <Feather name='map-pin' size={24} style={{ color: '#000' }} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentBox}>
      <Text style={{marginStart: '0.5%', fontSize: 16 }}>Rs :</Text>
      <Text style={{ marginStart: '1.5%',marginTop:'0.5%', fontSize: 14 }}>{Amount}</Text>
        <View style={styles.filler} />
        <Text style={{ fontSize: 18, marginEnd: '5%', color: '#353535' }}>{Sqft + " Sqft"}</Text>
      </View>
      <View style={{marginStart: '20%', flexDirection: 'row', marginTop: '2%', marginEnd: '20%', paddingBottom: 10, borderWidth:1, marginBottom:8,borderRadius:10, backgroundColor: 'white'}} >
        <Entypo name='squared-cross' size={28} style={{ marginTop:12,color: 'red',marginStart:'15%'  }} />
        <Button color='red' style={{ fontSize: 20,marginStart:'10%',marginTop:8 }}>{t('Incomplete')}</Button>
      </View>
    </View>
    </>
    )
  }
  
  const WalletComponent = () => {
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
          <PendingCard bookingId='UWHYD00001043' Name={t('Site Name')} Sqft="45,982" Address="D-216, DSR For" Amount='24,500' />
          <PendingCard bookingId='UWHYD00001043' Name={t('Site Name')} Sqft="45,982" Address="D-216, DSR For" Amount='24,500' />
          <PendingCard bookingId='UWHYD00001043' Name={t('Site Name')} Sqft="45,982" Address="D-216, DSR For" Amount='24,500' />
          <View style={{ marginTop: '5%', marginHorizontal: '10%' }}>
            <Text style={{ fontSize: 18, color: '#353535' }}>09/11/2020</Text>
          </View>
          <PendingCard bookingId='UWHYD00001043' Name={t('Site Name')} Sqft="45,982" Address="D-216, DSR For" Amount='24,500' />
          <PendingCard bookingId='UWHYD00001043' Name={t('Site Name')} Sqft="45,982" Address="D-216, DSR For" Amount='24,500' />
        </View>
      </ScrollView>
    )
  }
  
  export default WalletComponent;
  
  const styles = StyleSheet.create({
    mainContainer: {
      marginVertical: '2%',
      backgroundColor: 'white',
      marginHorizontal: '5%',
      borderRadius:10,
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
