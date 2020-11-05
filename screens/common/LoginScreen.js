/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native"
import Feather from 'react-native-vector-icons/Feather'
import FeatherIcon from "react-native-vector-icons/Feather"
import { ScrollView } from "react-native-gesture-handler"
import Spinner from 'react-native-loading-spinner-overlay'
import AsyncStorage from '@react-native-community/async-storage'
import { useTranslation } from 'react-i18next'
import i18n from '../../components/i18n'

export default function LoginScreen({ navigation: { goBack }, navigation }) {

  const { t } = useTranslation();

  useEffect(() => {
    navigation.addListener('focus', () => {
      AsyncStorage.getItem('LANG').then((value) => {
        if (value == "en") { i18n.changeLanguage('en') }
        else if (value == "hi") { i18n.changeLanguage('hi') }
      });
    });
  }, [navigation]);

  const [data, setData] = React.useState({
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    phoneNumber: '',
    checkPhoneNumber: false
  })
  const [errors, setErrors] = useState([])
  const [isLoading, setLoading] = useState(false)

  const handlePasswordChange = (val) => { setData({ ...data, password: val }) }

  const updateSecureTextEntry = () => { setData({ ...data, secureTextEntry: !data.secureTextEntry }) }

  const login = async () => {
    let errors = []
    if (data.password === '') { errors.push('password') }
    if (data.phoneNumber === '') { errors.push('phoneNumber') }
    if (errors.length) { setErrors(errors) }

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
          <Text style={styles.logIn}>{t('Log In')}</Text>
        </View>
        <View style={styles.containerRectanglePhone}>
          <View style={[styles.rect3, { borderColor: errors.includes('phoneNumber') ? 'red' : 'rgba(112,112,112,1)' }]}>
            <TextInput style={styles.textInput}
              placeholder="9839xxxxxx"
              keyboardType="numeric"
              maxLength={10}
              onChangeText={(phoneNumber) => setData({ ...data, phoneNumber: phoneNumber })}
            />
          </View>
        </View>
        <View style={styles.containerRectanglePassword}>
          <View style={[styles.rect3, { borderColor: errors.includes('password') ? 'red' : 'rgba(112,112,112,1)' }]}>
            <TextInput style={styles.textInput}
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={(val) => handlePasswordChange(val)}
              placeholder={t("Password")}
            />
            <TouchableOpacity style={styles.eyeIcon} onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? <Feather name="eye-off" color="grey" size={20} /> : <Feather name="eye" color="grey" size={20} />}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: 'flex-start', marginLeft: '15%', top: 14 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Recover Account')}>
            <Text style={{ color: '#5356C1' }}>{t('Forgot Password?')}</Text>
            {/* <Text style={{ color:'#5356C1'}} onPress={() => goBack()}>Sign Up</Text> */}
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'flex-end', marginRight: '14%', top: -4 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Recover Account')}>
            {/* <Text style={{ color: '#121212' }}>{t('Don\'t have an account?')}</Text> */}
            <Text style={{ color: '#5356C1', textAlign: "right" }} onPress={() => goBack()}>{t('Create Account')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          {/* <TouchableOpacity onPress={login}>
            <View>
              <View style={styles.icon1Stack}>
                <FeatherIcon name="arrow-right" style={styles.icon1}></FeatherIcon>
                <View style={styles.rect4}>
                  <FeatherIcon name="arrow-right" style={styles.icon2}></FeatherIcon>
                </View>
              </View>
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.SubmitButtonStyle} onPress={login}>
            <Text style={{ fontSize: 20, marginTop: 13, color: '#ffffff' }}>{t('Proceed')}</Text>
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
    marginRight: '30%'
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
  SubmitButtonStyle: {
    marginTop: '15%',
    marginBottom: '15%',
    marginLeft: '10%',
    height: 60,
    marginRight: '10%',
    backgroundColor: '#99DD70',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    marginBottom: '10%',
    width: '75%'
  },
  // icon1Stack: {
  //   width: 60,
  //   height: 60
  // },
  // icon1: {
  //   top: 8,
  //   left: 9,
  //   position: "absolute",
  //   color: "rgba(128,128,128,1)",
  //   fontSize: 40
  // },
  // icon2: {
  //   color: "rgba(128,128,128,1)",
  //   fontSize: 40,
  //   height: 41,
  //   width: 40,
  //   marginTop: 8,
  //   marginLeft: 9
  // },
});
