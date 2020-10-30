/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage, } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import FeatherIcon from "react-native-vector-icons/Feather";
import { ScrollView } from "react-native-gesture-handler";
import Spinner from 'react-native-loading-spinner-overlay'

export default function LoginScreen({ navigation: { goBack }, navigation }) {

  const [data, setData] = React.useState({
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    phoneNumber: '',
    checkPhoneNumber: false
  })

  const [isLoading, setLoading] = useState(false)

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val
    })
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }

  const login = async () => {
    setLoading(true)
    try {
      const result = await fetch('https://uniworksvendorapis.herokuapp.com/auth/login', {
        method: 'POST',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Username: "+91" + data.phoneNumber,
          Password: data.password
        })
      }).then((response) => {
        return (response.json()
        )
      })
        .then((json) => {
          saveTokenandNavigate((((json))))
        })
        .catch(e => {
          setLoading(false)
          alert(e.toString())
        })
    } catch (e) {
      console.log(e)
    }
  }

  const saveTokenandNavigate = async (val) => {
    await AsyncStorage.setItem('accessToken', val.accessToken)
    await AsyncStorage.setItem("contact", "+91" + data.phoneNumber)
    await AsyncStorage.setItem("role", val.role)
    setLoading(false)
    console.log(val.role)
    console.log(val.accessToken)
    if (val.role == "CSVD") {
      navigation.navigate('UpcomingTaskSupervisorScreen')
    } else {
      navigation.navigate('UpcomingTaskContractorScreen')
    }
  }

  return (
    <ScrollView>
      <Spinner visible={isLoading} textContent={'Logging In...'} textStyle={{ color: '#000' }} />
      <View style={styles.mainContainer}>
        <View style={styles.signInRow}>
          {/* <Text style={styles.signIn} onPress={() => goBack()}>Sign Up</Text> */}
          <View style={styles.signInFiller}></View>
          <Text style={styles.logIn}>Log In</Text>
        </View>
        <View style={styles.containerRectanglePhone}>
          <TextInput style={styles.rect3}
            placeholder="9839xxxxxx"
            keyboardType="numeric"
            maxLength={10}
            onChangeText={(phoneNumber) => setData({ ...data, phoneNumber: phoneNumber })}
          />
        </View>
        <View style={styles.containerRectanglePassword}>
          <View style={styles.rect3}>
            <TextInput style={styles.textInput}
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={(val) => handlePasswordChange(val)}
              placeholder="Password"
            />
            <TouchableOpacity style={styles.eyeIcon} onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? <Feather name="eye-off" color="grey" size={20} /> : <Feather name="eye" color="grey" size={20} />}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: 'flex-start', marginLeft: '15%', top: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Recover Account')}>
            <Text style={{ color: '#5356C1' }}>Forgot Password?</Text>
            {/* <Text style={{ color:'#5356C1'}} onPress={() => goBack()}>Sign Up</Text> */}
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'flex-end', marginRight:'15%', top: -10 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Recover Account')}>
            <Text style={{ color: '#121212', fontSize:15 }}>Dont have account?</Text>
            <Text style={{ color:'#5356C1'}} onPress={() => goBack()}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={login}>
            <View>
              <View style={styles.icon1Stack}>
                <FeatherIcon name="arrow-right" style={styles.icon1}></FeatherIcon>
                <View style={styles.rect4}>
                  <FeatherIcon name="arrow-right" style={styles.icon2}></FeatherIcon>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginBottom: "60%"
  },
  containerRectanglePassword: {
    marginTop: 40,
    alignItems: 'center',
  },
  containerRectanglePhone: {
    marginTop: '15%',
    alignItems: 'center'
  },
  signIn: {
    color: "#121212",
    fontSize: 36,
    height: 50,
    width: 147,
    opacity: 0.5
  },
  signInFiller: {
    flex: 1,
    flexDirection: "row"
  },
  logIn: {
    color: "#121212",
    fontSize: 36,
    height: 50,
    width: 124,
    marginRight:'30%'
  },
  signInRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 72,
    marginLeft: 33,
    marginRight: 27
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
  complete: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomContainer: {
    top: '20%',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    flexDirection: 'row',
    maxWidth: '80%'
  },
  eyeIcon: {
    marginTop: 20,
  },
  icon1: {
    top: 8,
    left: 9,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  rect4: {
    top: 0,
    width: 60,
    height: 60,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(112,112,112,1)",
    borderStyle: "solid",
    borderRadius: 100,
    left: 0
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 41,
    width: 40,
    marginTop: 8,
    marginLeft: 9
  },
  icon1Stack: {
    width: 60,
    height: 60
  }
});
