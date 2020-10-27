import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function AccountDetailsScreen(props) {

  const [fetchedData, setFetchedData] = useState(props.route.params)

  const [data, setData] = useState({
    accountNum: '',
    confirmAccoutNum: '',
    IFSC: '',
    accountHolder: '',
    PAN: '',
    aadharlink: '',
    GSTIN: '',
    confirmAccoutnNo: ''
  })

  // const handleSubmission = async () => {
  //   let uploadData = {
  //     accountNum: '',
  //     IFSC: '',
  //     accountHolder: '',
  //     PAN: '',
  //     aadharlink: '',
  //     GSTIN: ''
  //   }
  //   if (data.GSTIN != '') {
  //     uploadData.GSTIN = data.GSTIN
  //   } else {
  //     uploadData.GSTIN = fetchedData.personal.GSTIN
  //   }
  //   if (data.accountNum != '' && data.confirmAccoutNum != '' && data.confirmAccoutNum == data.accountNum) {
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
  //   if (data.aadharlink != '') {
  //     uploadData.aadharlink = data.aadharlink
  //   } else {
  //     uploadData.aadharlink = fetchedData.personal.aadharlink
  //   }
  //   let contact = await AsyncStorage.getItem('contact')
  //   console.log(JSON.stringify({
  //     userName: 'Kar0711',
  //     contact: contact,
  //     accountNum: uploadData.accountNum,
  //     IFSC: uploadData.IFSC,
  //     accountHolder: uploadData.accountHolder,
  //     PAN: uploadData.PAN,
  //     aadharlink: uploadData.aadharlink,
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
  //         aadharlink: uploadData.aadharlink,
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
    <ScrollView   >
      <View style={styles.mainContainer} >
        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 50, marginStart: '10%' }} >
          <MaterialIcons name='credit-card' size={32} />
          <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginStart: 10 }}>Account Details</Text>
        </TouchableOpacity>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
              // placeholder={fetchedData.personal.accountNum}
              onChangeText={(accoutnNo) => {
                setData({
                  ...data,
                  accountNum: accoutnNo
                })
              }}
            />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >Account Number</Text>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
              // placeholder={fetchedData.personal.accountNum}
              onChangeText={(confirmAccoutnNo) => {
                setData({
                  ...data,
                  confirmAccoutNum: confirmAccoutnNo
                })
              }}
            />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >Confirm Account Number</Text>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
              // placeholder={fetchedData.personal.IFSC}
              onChangeText={(ifscCode) => {
                setData({
                  ...data,
                  IFSC: ifscCode
                })
              }}
            />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >IFSC Code</Text>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
              // placeholder={fetchedData.personal.accountHolder}
              onChangeText={(name) => {
                setData({
                  ...data,
                  accountHolder: name
                })
              }}
            />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >Account Holder's Name</Text>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
              // placeholder={fetchedData.personal.PAN}
              onChangeText={(pan) => {
                setData({
                  ...data,
                  PAN: pan
                })
              }}
            />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >PAN Number</Text>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
              // placeholder={fetchedData.personal.aadharLink}
              onChangeText={(aadhar) => {
                setData({
                  ...data,
                  aadharlink: aadhar
                })
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }} >
          <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >Aadhar Details</Text>
          <View style={{ flex: 1, flexDirection: 'row' }} ></View>
          <View style={{ marginRight: '15%' }} >
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => props.navigation.navigate('CameraScreen')} >
              <Text style={{ color: '#546AD9', fontSize: 14 }}>Upload Photo</Text>
              <MaterialIcons name='camera-alt' style={{ alignSelf: 'center', color: '#546AD9' }} size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
              // placeholder={fetchedData.personal.GSTIN}
              onChangeText={(gst) => {
                setData({
                  ...data,
                  GSTIN: gst
                })
              }}
            />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >GSTIN Details</Text>
        {/* <TouchableOpacity style={styles.SubmitButtonStyle} onPress={handleSubmission} > */}
        <TouchableOpacity style={styles.SubmitButtonStyle} >
          <Text style={{ fontSize: 20, top: 13, color: '#ffffff' }} >Proceed</Text>
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
