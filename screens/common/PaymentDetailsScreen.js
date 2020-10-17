import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function PaymentDetailsScreen(props, route) {
  const[data, setData] = useState({
    accountNum:'',
          IFSC:'',
          accountHolder:'',
          PAN:'',
          aadharNumber:'',
          GSTIN:'',
          confirmAccoutnNo:''
  })
  const handleSubmission = async () => {
    console.log(data)
    try {
      const result = await fetch("https://uniworksvendorapis.herokuapp.com/user/+918174033803", {
        method: 'PUT',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contact:'+918174033803',
          userName: "Kar1596977190778",
          accountNum:data.accountNum,
          IFSC:data.IFSC,
          accountHolder:data.accountHolder,
          PAN:data.PAN,
          aadharlink:data.aadharNumber,
          GSTIN:data.GSTIN,
        })
      }).then((response) => {
        const statusCode = response.status
        console.log(statusCode)
        return response.json()
      }).then(json=>{
        props.navigation.navigate("HomeScreen");
        console.log(json)})
      .catch(e=>alert(e.toString()))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <ScrollView   >
      <View style={styles.mainContainer} >
        <View style={{ alignItems: 'center', marginTop: 72 }}>
          <Text style={{ fontSize: 36 }} >Payment Details</Text>
        </View>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
              onChangeText={(accoutnNo) => {
                setData({
                  ...data,
                  accountNum:accoutnNo
                })
              }}
            />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >Account Number</Text>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
              onChangeText={(confirmAccoutnNo) => {
                setData({
                  ...data,
                  confirmAccoutnNo:confirmAccoutnNo
                })
              }}
            />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >Confirm Account Number</Text>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
              onChangeText={(ifscCode) => {
                setData({
                  ...data,
                  IFSC:ifscCode
                })
              }}
            />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >IFSC Code</Text>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
              onChangeText={(name) => {
                setData({
                  ...data,
                  accountHolder:name
                })
              }}
            />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >Account Holder's Name</Text>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
              onChangeText={(pan) => {
                setData({
                  ...data,
                  PAN:pan
                })
              }}
            />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >PAN Number</Text>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
              onChangeText={(aadhar) => {
                setData({
                  ...data,
                  aadharNumber:aadhar
                })
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }} >
          <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >Aadhar Details</Text>
          <View style={{ flex: 1, flexDirection: 'row' }} ></View>
          <View style={{ marginRight: '15%' }} >
            <TouchableOpacity style={{ flexDirection: 'row' }}  >
              <Text style={{ color: '#546AD9', fontSize: 14 }}>Upload Photo</Text>
              <MaterialIcons name='camera-alt' style={{ alignSelf: 'center', color: '#546AD9' }} size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
              onChangeText={(gst) => {
                setData({
                  ...data,
                  GSTIN:gst
                })
              }}
            />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >GSTIN Details</Text>
        <TouchableOpacity style={styles.SubmitButtonStyle} onPress={handleSubmission} >
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

export default PaymentDetailsScreen;
