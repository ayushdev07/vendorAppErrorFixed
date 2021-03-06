import React, { Component } from "react"
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import Feather from 'react-native-vector-icons/Feather'
import { ScrollView } from "react-native-gesture-handler"
import OTP from "../../components/OTP"
import FeatherIcon from "react-native-vector-icons/Feather"
import AsyncStorage from '@react-native-community/async-storage'
import { withTranslation } from 'react-i18next'
import i18n from '../../components/i18n'

class SignInScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      password: "",
      secureTextEntry: true,
      phoneNumber: "",
      errors: [],
      checkPhoneNumber: false,
      showOtp: false,
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      otp6: "",
      Contractor: true,
      SuperVisor: false,
      confirmSignUp: true,
      showType: false,
      supervisorNumber: "",
      userNameSql: ""
    }
  }

  updateSecureTextEntry = () => { this.setState({ secureTextEntry: !this.state.secureTextEntry }) }

  signUp = async () => {
    console.log(this.state)
    var user = this.state.userName.substring(0, 3).concat(new Date().getTime())
    console.log(user)
    try {
      const result = await fetch('https://uniworksvendorapis.herokuapp.com/auth/register', {
        method: 'POST',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Username: "+91" + this.state.phoneNumber,
          Password: this.state.password,
          name: this.state.userName,
          userName: user
        })
      }).then((response) => response.text())
        .then((json) => {
          this.setState({ showOtp: true })
          console.log(json)
        }).catch(e => Alert.alert(e.toString()))
    } catch (e) { console.log(e) }
  }

  saveOtp = (val1, val2, val3, val4, val5, val6) => {
    console.log(val1, val2, val3, val4, val5, val6)
    this.setState({
      otp1: val1,
      otp2: val2,
      otp3: val3,
      otp4: val4,
      otp5: val5,
      otp6: val6,
    })
  }

  confirmSignup = async () => {

    let errors = []
    let { userName, password, phoneNumber } = this.state
    if (userName === '') { errors.push('userName') }
    if (password === '') { errors.push('password') }
    if (phoneNumber === '') { errors.push('phoneNumber') }
    if (errors.length) { this.setState({ errors }) }

    var code = this.state.otp1 + this.state.otp2 + this.state.otp3 + this.state.otp4 + this.state.otp5 + this.state.otp6
    console.log(code)
    if (!this.state.showType) {
      try {
        const result = await fetch("https://uniworksvendorapis.herokuapp.com/auth/confirmSignup", {
          method: 'POST',
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            Username: "+91" + this.state.phoneNumber,
            ConfirmationCode: code,
            Password: this.state.password
          })
        }).then((response) => response.json())
          .then((json) => {
            console.log(json)
            this.setState({ showType: true, showOtp: false })
          })
          .catch(e => Alert.alert(e.toString()))
      } catch (e) {
        Alert.alert(e.toString())
      }
    } else {
      if (this.state.Contractor) {
        const result = await fetch("https://uniworksvendorapis.herokuapp.com/user/+91" + this.state.phoneNumber, {
          method: 'PUT',
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            role: "CSVD",
            contact: "+91" + this.state.phoneNumber
          })
        }).then(response => response.text())
          .then(json => {
            this.saveRole("CSVD")
          }).catch(e => Alert.alert(e.toString()))
      }
    }
  }

  saveRole = async (role) => {
    await AsyncStorage.setItem("role", "CSVD")
    this.props.navigation.navigate("Personal Details")
  }

  saveTokenandNavigate = async (val) => {
    await AsyncStorage.setItem('accessToken', val)
    await AsyncStorage.setItem('userName', this.state.userName)
    await AsyncStorage.setItem('contact', this.state.phoneNumber)
  }

  handleTypechosen = () => {
    this.setState({ Contractor: !this.state.Contractor, SuperVisor: !this.state.SuperVisor })
  }

  componentDidMount() {
    AsyncStorage.getItem('LANG').then((value) => {
      if (value == "en") { i18n.changeLanguage('en') }
      else if (value == "hi") { i18n.changeLanguage('hi') }
    });
  }

  render() {
    const { t } = this.props;
    return (
      <ScrollView scrollEnabled={true}>
        <View style={styles.mainContainer}>
          <View style={styles.signInRow}>
            <Text style={styles.signIn}>{t('Sign Up')}</Text>
            <View style={styles.signInFiller}></View>
            {/* <Text style={styles.logIn} onPress={() => this.props.navigation.navigate('LoginScreen')}>Log in</Text> */}
          </View>
          <View style={styles.containerRecatngleName}>
            <View style={[styles.rect3, { borderColor: this.state.errors.includes('userName') ? 'red' : 'rgba(112,112,112,1)' }]}>
              <TextInput placeholder={t('Name')}
                style={styles.textInput}
                onChangeText={(username) => this.setState({ userName: username })}
                value={this.state.userName} />
              <Text style={{ marginTop: 15 }}>{t('Name')}</Text>
            </View>
          </View>
          <View style={styles.containerRecatnglePassword}>
            <View style={[styles.rect3, { borderColor: this.state.errors.includes('password') ? 'red' : 'rgba(112,112,112,1)' }]}>
              <TextInput style={styles.textInput}
                secureTextEntry={this.state.secureTextEntry ? true : false}
                onChangeText={(passWord) => this.setState({ password: passWord })}
                placeholder={t('Password')}
              />
              <TouchableOpacity style={styles.eyeIcon} onPress={this.updateSecureTextEntry}>
                {this.state.secureTextEntry ? <Feather name="eye-off" color="grey" size={20} /> : <Feather name="eye" color="grey" size={20} />}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerRecatnglePhone}>
            <View style={[styles.rect3, { borderColor: this.state.errors.includes('phoneNumber') ? 'red' : 'rgba(112,112,112,1)' }]}>
              <TextInput style={styles.textInputPhone}
                onChangeText={(number) => this.setState({ phoneNumber: number })}
                keyboardType="numeric"
                maxLength={10}
                placeholder="9839xxxxxx"
              />
              <TouchableOpacity style={styles.eyeIcon} disable={true}>
                <Text style={{ color: 'grey', marginRight: 10 }} onPress={this.signUp}>{t('Confirm')}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View >
            {this.state.showOtp ?
              <View style={styles.otpmainContainer}>
                <Text style={{ fontSize: 35 }}>OTP</Text>
                <View style={styles.otpContainer}>
                  <OTP save={this.saveOtp}></OTP>
                </View>
              </View>
              : null}
          </View>
          <View>
            {/* <Text style={styles.logIn}>{t('Already have an account?')}</Text> */}
            <Text style={styles.clickLogin} onPress={() => this.props.navigation.navigate('LoginScreen')}>{t('Click to login')}</Text>
          </View>
          <View>
            {
              this.state.showType ?
                <View>
                  <View style={{ marginStart: '20%', marginTop: '15%' }} >
                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold' }}>{t('I am')}</Text>
                  </View>
                  <View style={[styles.buttons,], { flex: 1, justifyContent: 'center', flexDirection: 'row', marginTop: 10 }}>
                    <TouchableOpacity
                      style={[styles.button, {
                        backgroundColor: this.state.Contractor ? "#ffffff" : "#EBEBEB", elevation: this.state.Contractor ? 2 : 0
                      }]}
                      onPress={this.handleTypechosen}
                    >
                      <Text style={{ color: this.state.Contractor ? '#76C662' : "#000000" }}>{t('Contractor')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.button, {
                        backgroundColor: this.state.SuperVisor ? "#ffffff" : "#EBEBEB", elevation: this.state.SuperVisor ? 2 : 0
                      }]}
                      onPress={this.handleTypechosen}
                    >
                      <Text style={{ color: this.state.SuperVisor ? '#76C662' : "#000000" }}>{t('Supervisor')}</Text>
                    </TouchableOpacity>
                  </View>

                  {this.state.Contractor ?
                    <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 5 }}>
                      <Text style={{ color: '#353535', fontSize: 14, fontStyle: 'normal', maxWidth: '60%', opacity: 0.5 }}>
                        {t('Contractor is a person who owns the firm')}
                      </Text>
                    </View>
                    :
                    <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 5 }}>
                      <Text style={{ color: '#353535', fontSize: 14, fontStyle: 'normal', maxWidth: '60%', opacity: 0.5 }}>
                        {t('Supervisor is a person who works under the contractor')}
                      </Text>
                    </View>
                  }

                  {
                    this.state.SuperVisor ?
                      <View style={styles.containerRecatnglePhone}>
                        <View style={styles.rect3} >
                          <TextInput style={styles.textInputPhone}
                            onChangeText={(number) => this.setState({ supervisorNumber: number })}
                            keyboardType="numeric"
                            maxLength={10}
                            placeholder="9839xxxxxx"
                          />
                          <TouchableOpacity
                            style={styles.eyeIcon}
                            disable={true}
                          >
                            <Text style={{ color: 'grey', marginRight: 10 }} onPress={this.signUp}>
                              {t('Contractor\'s Phone')}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View> :
                      null
                  }
                </View>
                : null
            }
          </View>
          <View style={styles.bottomContainer}>
            {/* <TouchableOpacity onPress={this.confirmSignup} >
              <View>
                <View style={styles.icon1Stack}>
                  <FeatherIcon name="arrow-right" style={styles.icon1}></FeatherIcon>
                  <View style={styles.rect4}>
                    <FeatherIcon name="arrow-right" style={styles.icon2}></FeatherIcon>
                  </View>
                </View>
              </View>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.SubmitButtonStyle} onPress={this.confirmSignup}>
              <Text style={{ fontSize: 20, marginTop: 13, color: '#ffffff' }}>{t('Proceed')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView >
    );
  }
}

export default withTranslation()(SignInScreen)

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginBottom: "30%"
  },
  containerRecatngleName: {
    marginTop: 70,
    alignItems: 'center'
  },
  containerRecatnglePassword: {
    marginTop: 40,
    alignItems: 'center',
  },
  containerRecatnglePhone: {
    marginTop: 40,
    alignItems: 'center'
  },
  signIn: {
    color: "#121212",
    fontSize: 36,
    height: 50,
    width: 147,
    marginLeft: 105
  },
  signInFiller: {
    flex: 1,
    flexDirection: "row"
  },
  logIn: {
    color: "#121212",
    fontSize: 17,
    opacity: 0.8,
    marginLeft: 165,
    // marginRight: 80,
    marginTop: 10,
    // textAlign: "right",
  },
  clickLogin: {
    color: '#5356C1',
    fontSize: 17,
    fontWeight: 'bold',
    opacity: 0.8,
    marginLeft: 150,
    marginTop: 13,
    marginRight: 10,
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
    top: '0%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    flexDirection: 'row',
    maxWidth: '80%'
  },
  textInputPhone: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    flexDirection: 'row',
    maxWidth: '90%'
  },
  eyeIcon: {
    marginTop: 20,
  },
  otpmainContainer: {
    flex: 1,
    alignItems: 'center',
    top: 20
  },
  otpContainer: {
    flexDirection: 'row',
    top: 10
  },
  otpBox: {
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    height: 45,
    width: 45,
    textAlign: 'center'
  }, icon1: {
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
  // icon1Stack: {
  //   width: 60,
  //   height: 60
  // },
  buttons: {
    flexDirection: "row",
    backgroundColor: "#EBEBEB",
    borderRadius: 10,
    marginLeft: 20,
    width: "60%",
    height: 60,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    width: "35%",
    height: 55,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 10 },
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
});