import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-community/async-storage'
import { useTranslation } from 'react-i18next'
import i18n from '../../components/i18n'

const AccountDetailsScreen = ({ props, navigation }) => {

  const { t } = useTranslation();

  useEffect(() => {
    navigation.addListener('focus', () => {
      AsyncStorage.getItem('LANG').then((value) => {
        if (value == "en") { i18n.changeLanguage('en') }
        else if (value == "hi") { i18n.changeLanguage('hi') }
      });
    });
  }, [navigation]);

  // const [fetchedData, setFetchedData] = useState(props.route.params)

  const [data, setData] = useState({
    accountNum: '',
    IFSC: '',
    accountHolder: '',
    PAN: '',
    aadharNumber: '',
    GSTIN: '',
    confirmAccoutnNo: ''
  })

  const [errors, setErrors] = useState([])

  const handleSubmission = () => {

    let errors = []
    if (data.accountNum === '') { errors.push('accountNum') }
    if (data.IFSC === '') { errors.push('IFSC') }
    if (data.accountHolder === '') { errors.push('accountHolder') }
    if (data.PAN === '') { errors.push('PAN') }
    if (data.aadharNumber === '') { errors.push('aadharNumber') }
    if (data.GSTIN === '') { errors.push('GSTIN') }
    if (data.confirmAccoutnNo === '') { errors.push('confirmAccoutnNo') }
    if (errors.length) { setErrors(errors) }

  }

  // const handleSubmission = async () => {
  //   let uploadData = {
  //     accountNum: '',
  //     IFSC: '',
  //     accountHolder: '',
  //     PAN: '',
  //     aadharNumber: '',
  //     GSTIN: ''
  //   }
  //   if (data.GSTIN != '') {
  //     uploadData.GSTIN = data.GSTIN
  //   } else {
  //     uploadData.GSTIN = fetchedData.personal.GSTIN
  //   }
  //   if (data.accountNum != '' && data.confirmAccoutNo != '' && data.confirmAccoutNo == data.accountNum) {
  //     uploadData.accountNum = data.accountNum
  //   } else {
  //     uploadData.accountNum = fetchedData.personal.accountNum
  //   }
  //   if (data.IFSC != '') {
  //     uploadData.IFSC = data.IFSC
  //   } else {
  //     uploadData.IFSC = fetchedData.personal.IFSC
  //   }
  //   if (data.accountHolder != '') {
  //     uploadData.accountHolder = data.accountHolder
  //   } else {
  //     uploadData.accountHolder = fetchedData.personal.accountHolder
  //   }
  //   if (data.PAN != '') {
  //     uploadData.PAN = data.PAN
  //   } else {
  //     uploadData.PAN = fetchedData.personal.PAN
  //   }
  //   if (data.aadharNumber != '') {
  //     uploadData.aadharNumber = data.aadharNumber
  //   } else {
  //     uploadData.aadharNumber = fetchedData.personal.aadharNumber
  //   }
  //   let contact = await AsyncStorage.getItem('contact')
  //   console.log(JSON.stringify({
  //     userName: 'Kar0711',
  //     contact: contact,
  //     accountNum: uploadData.accountNum,
  //     IFSC: uploadData.IFSC,
  //     accountHolder: uploadData.accountHolder,
  //     PAN: uploadData.PAN,
  //     aadharNumber: uploadData.aadharNumber,
  //     GSTIN: uploadData.GSTIN
  //   }))
  //   try {
  //     const result = await fetch("https://uniworksvendorapis.herokuapp.com/user/" + contact, {
  //       method: 'PUT',
  //       headers: {
  //         Accept: '*/*',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         userName: 'Kar0711',
  //         contact: contact,
  //         accountNum: uploadData.accountNum,
  //         IFSC: uploadData.IFSC,
  //         accountHolder: uploadData.accountHolder,
  //         PAN: uploadData.PAN,
  //         aadharNumber: uploadData.aadharNumber,
  //         GSTIN: uploadData.GSTIN
  //       })
  //     }).then((response) => {
  //       const statusCode = response.status
  //       console.log(statusCode)
  //       return response.json()

  //     }).then(json => {
  //       props.navigation.navigate("HomeScreen");
  //       console.log(json)
  //     })
  //       .catch(e => alert(e.toString()))
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  return (
    <ScrollView>
      <View style={styles.mainContainer} >
        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 50, marginStart: '10%' }} >
          <MaterialIcons name='credit-card' size={32} />
          <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginStart: 10 }}>{t('Account Details')}</Text>
        </TouchableOpacity>
        <View style={styles.containerRecatngleName}>
          <View style={[styles.rect3, { borderColor: errors.includes('accountNum') ? 'red' : 'rgba(112,112,112,1)' }]}>
            <TextInput style={styles.textInputPhone}
              // placeholder={fetchedData.personal.accountNum}
              onChangeText={(accoutnNo) => { setData({ ...data, accountNum: accoutnNo }) }} />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >{t('Account Number')}</Text>
        <View style={styles.containerRecatngleName}>
          <View style={[styles.rect3, { borderColor: errors.includes('confirmAccoutnNo') ? 'red' : 'rgba(112,112,112,1)' }]}>
            <TextInput style={styles.textInputPhone}
              // placeholder={fetchedData.personal.accountNum}
              onChangeText={(confirmAccoutnNo) => { setData({ ...data, confirmAccoutNo: confirmAccoutnNo }) }} />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >{t('Confirm Account Number')}</Text>
        <View style={styles.containerRecatngleName}>
          <View style={[styles.rect3, { borderColor: errors.includes('IFSC') ? 'red' : 'rgba(112,112,112,1)' }]}>
            <TextInput style={styles.textInputPhone}
              // placeholder={fetchedData.personal.IFSC}
              onChangeText={(ifscCode) => { setData({ ...data, IFSC: ifscCode }) }} />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >{t('IFSC Code')}</Text>
        <View style={styles.containerRecatngleName}>
          <View style={[styles.rect3, { borderColor: errors.includes('accountHolder') ? 'red' : 'rgba(112,112,112,1)' }]}>
            <TextInput style={styles.textInputPhone}
              // placeholder={fetchedData.personal.accountHolder}
              onChangeText={(name) => { setData({ ...data, accountHolder: name }) }} />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >{t('Account Holder\'s Name')}</Text>
        <View style={styles.containerRecatngleName}>
          <View style={[styles.rect3, { borderColor: errors.includes('PAN') ? 'red' : 'rgba(112,112,112,1)' }]}>
            <TextInput style={styles.textInputPhone}
              // placeholder={fetchedData.personal.PAN}
              onChangeText={(pan) => { setData({ ...data, PAN: pan }) }} />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >{t('PAN Number')}</Text>
        <View style={styles.containerRecatngleName}>
          <View style={[styles.rect3, { borderColor: errors.includes('aadharNumber') ? 'red' : 'rgba(112,112,112,1)' }]}>
            <TextInput style={styles.textInputPhone}
              // placeholder={fetchedData.personal.aadharNumber}
              onChangeText={(aadhar) => { setData({ ...data, aadharNumber: aadhar }) }} />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >{t('Aadhar Details')}</Text>
          <View style={{ flex: 1, flexDirection: 'row' }} ></View>
          <View style={{ marginRight: '15%' }}>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => props.navigation.navigate('CameraScreen')} >
              <Text style={{ color: '#546AD9', fontSize: 14 }}>{t('Upload Photo')}</Text>
              <MaterialIcons name='camera-alt' style={{ alignSelf: 'center', color: '#546AD9' }} size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerRecatngleName}>
          <View style={[styles.rect3, { borderColor: errors.includes('GSTIN') ? 'red' : 'rgba(112,112,112,1)' }]}>
            <TextInput style={styles.textInputPhone}
              // placeholder={fetchedData.personal.GSTIN}
              onChangeText={(gst) => { setData({ ...data, GSTIN: gst }) }} />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >{t('GSTIN Details')}</Text>
        {/* <TouchableOpacity style={styles.SubmitButtonStyle} onPress={handleSubmission} > */}
        <TouchableOpacity style={styles.SubmitButtonStyle} onPress={handleSubmission}>
          <Text style={{ fontSize: 20, top: 13, color: '#ffffff' }} >{t('Proceed')}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 4
  },
  containerRecatngleName: {
    marginTop: 40,
    alignItems: 'center'
  },
  containerRecatngle: {
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
    paddingStart: 20

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

export default AccountDetailsScreen;
