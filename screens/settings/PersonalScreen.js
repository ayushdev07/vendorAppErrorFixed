import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'
import OTP from '../../components/OTP'
import { Picker } from '@react-native-picker/picker'
import AsyncStorage from '@react-native-community/async-storage'
import { withTranslation } from 'react-i18next'
import i18n from '../../components/i18n'
import ProfilePicture from 'react-native-profile-picture'

class PersonalScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      password: "",
      secureTextEntry: true,
      phoneNumber: "",
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
      personalData: this.props.route.params,
      email: '',
      emergencyNumber: '',
      category: '',
      state: '',
      city: '',
      area: '',
      street: '',
      building: '',
      flatNo: '',
      errors: [],
      selectedValue: "Carpenter",
    }
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

  signUp = async () => {
    // console.log(this.state)
    // try {
    //   const result = await fetch("https://still-plains-75686.herokuapp.com/auth/register", {
    //     method: 'POST',
    //     headers: {
    //       Accept: '*/*',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       Username: this.state.userName,
    //       Phone_number: "+91" + this.state.phoneNumber,
    //       Password: this.state.password
    //     })
    //   })
    this.setState({
      showOtp: true
    })
    // } catch (e) {
    //   console.log(e)
    // }
  }

  handleSubmit = async () => {

    let errors = []
    let { phoneNumber, emergencyNumber, email, state, city, area, street, building, flatNo } = this.state
    if (phoneNumber === '') { errors.push('phoneNumber') }
    if (emergencyNumber === '') { errors.push('emergencyNumber') }
    if (email === '') { errors.push('email') }
    if (state === '') { errors.push('state') }
    if (city === '') { errors.push('city') }
    if (area === '') { errors.push('area') }
    if (street === '') { errors.push('street') }
    if (building === '') { errors.push('building') }
    if (flatNo === '') { errors.push('flatNo') }
    if (errors.length) { this.setState({ errors }) }

    let uploadData = {
      userName: 'Kar0711',
      contact: "+918318006807",
      emergencyContact: '',
      email: '',
      state: '',
      city: '',
      area: '',
      street: '',
      building: '',
      flat: ''
    }
    if (this.state.emergencyNumber != '') {
      uploadData.emergencyContact = this.state.emergencyNumber
    } else {
      uploadData.emergencyContact = this.state.personalData.personal.emergencyContact
    }
    if (this.state.email != '') {
      uploadData.email = this.state.email
    } else {
      uploadData.email = this.state.personalData.personal.email
    }
    if (this.state.state != '') {
      uploadData.state = this.state.state
    } else {
      uploadData.state = this.state.personalData.personal.state
    }
    if (this.state.city != '') {
      uploadData.city = this.state.city
    } else {
      uploadData.city = this.state.personalData.personal.city
    }
    if (this.state.area != '') {
      uploadData.area = this.state.area
    } else {
      uploadData.area = this.state.personalData.personal.area
    }
    if (this.state.street != '') {
      uploadData.street = this.state.street
    } else {
      uploadData.street = this.state.personalData.personal.street
    }
    if (this.state.building != '') {
      uploadData.building = this.state.building
    } else {
      uploadData.building = this.state.personalData.personal.building
    }
    if (this.state.flat != '') {
      uploadData.flat = this.state.flatNo
    } else {
      uploadData.flat = this.state.personalData.personal.flat
    }
    try {
      const result = await fetch("https://uniworksvendorapis.herokuapp.com/user/+918318006807", {
        method: 'PUT',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: 'Kar0711',
          contact: "+918318006807",
          emergencyContact: uploadData.emergencyContact,
          email: uploadData.email,
          state: uploadData.state,
          city: uploadData.city,
          area: uploadData.area,
          street: uploadData.street,
          building: uploadData.building,
          flat: uploadData.flat
        })
      }).then((response) => {
        const statusCode = response.status
        return response.json();
      }).then(json => {
        this.props.navigation.navigate('HomeScreen')
        console.log(json)
      })
        .catch(e => console.log(e.toString()))
    } catch (e) {
      console.log(e)
    }
  }

  mapStyle = [{ "elementType": "geometry", "stylers": [{ "color": "#242f3e" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#746855" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#242f3e" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#263c3f" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#6b9a76" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#38414e" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#212a37" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#9ca5b3" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#746855" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#1f2835" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#f3d19c" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#2f3948" }] }, { "featureType": "transit.station", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#17263c" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#515c6d" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#17263c" }] }];

  componentDidMount() {
    AsyncStorage.getItem('LANG').then((value) => {
      if (value == "en") { i18n.changeLanguage('en') }
      else if (value == "hi") { i18n.changeLanguage('hi') }
    });
  }

  render() {
    const { t } = this.props;
    return (
      <ScrollView>
        <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 50, marginStart: '10%' }}>
            {/* <Feather name='user' size={32} /> */}
            <ProfilePicture
              isPicture={true}
              requirePicture={require('../../assets/Splash.jpg')}
              shape='circle'
            />
            <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginEnd: 80 }}>{t('Personal')}</Text>
            {/* <ProfilePicture
              isPicture={true}
              requirePicture={require('../../assets/Splash.jpg')}
              shape='circle'
            /> */}
          </TouchableOpacity>
          <View style={styles.containerRecatnglePhone}>
            <View style={[styles.rect3, { borderColor: this.state.errors.includes('phoneNumber') ? 'red' : 'rgba(112,112,112,1)' }]}>
              {/* <TextInput style={styles.textInputPhone}
                    onChangeText={(number) => this.setState({ phoneNumber: number })}
                    keyboardType="numeric"
                    maxLength={10}
                    placeholder={this.state.personalData.personal.contact}
                  /> */}
              <TextInput style={styles.textInputPhone}
                onChangeText={(number) => this.setState({ phoneNumber: number })}
                keyboardType="numeric"
                maxLength={10}
                placeholder={t('Change')}
              />
              {/* <TouchableOpacity style={styles.eyeIcon} disable={true}>
                <Text style={{ color: 'grey', marginRight: 10 }} onPress={this.signUp}>{t('Change')}</Text>
              </TouchableOpacity> */}
            </View>
          </View>
          <View >
            {this.state.showOtp ?
              <View style={styles.otpmainContainer}>
                <Text style={{ fontSize: 35 }} >{t('OTP')}</Text>
                <View style={styles.otpContainer}>
                  <OTP save={this.saveOtp} ></OTP>
                </View>
              </View>
              : null}
          </View>
          <View style={styles.mainContainer} >
            <View style={{ marginLeft: '15%', marginTop: 60 }} >
              <Text style={{ color: '#353535', fontSize: 18, fontStyle: 'normal' }}>{t('Additional Information')}</Text>
            </View>
            <View style={styles.containerRecatngleName}>
              <View style={[styles.rect3, { borderColor: this.state.errors.includes('emergencyNumber') ? 'red' : 'rgba(112,112,112,1)' }]}>
                {/* <TextInput style = {styles.textInputPhone}
                      placeholder={this.state.personalData.personal.emergencyContact}
                      onChangeText={(number)=>this.setState({emergencyNumber:number})}
                    /> */}
                <TextInput style={styles.textInputPhone}
                  placeholder={t('Emergency Contact')}
                  onChangeText={(number) => this.setState({ emergencyNumber: number })}
                />
                {/* <Text style={{ color: 'black', marginTop: 15, marginRight: 10, fontSize: 12 }}>{t('Emergency Contact')}</Text> */}
              </View>
            </View>
            <View style={styles.containerRecatngle}>
              <View style={[styles.rect3, { borderColor: this.state.errors.includes('email') ? 'red' : 'rgba(112,112,112,1)' }]}>
                {/* <TextInput style = {styles.textInputPhone}
                      placeholder={this.state.personalData.personal.email}
                      onChangeText={(email)=>this.setState({email:email})}
                    /> */}
                <TextInput style={styles.textInputPhone}
                  placeholder={t('E-mail')}
                  onChangeText={(email) => this.setState({ email: email })}
                />
                {/* <Text style={{ color: 'black', marginTop: 15, marginRight: 10, fontSize: 12 }}>{t('E-mail')}</Text> */}
              </View>
            </View>
            {/* <View style={styles.containerRecatngle}>
              <View style={styles.rect3}>
                <TextInput style={styles.textInputPhone}
                  placeholder="Carpenter"
                  onChangeText={(category) => this.setState({ category: category })} />
                <Text style={{ color: 'black', marginTop: 20, marginRight: 10, fontSize: 12 }}>{t('Category')}</Text>
              </View>
            </View> */}
            <View style={styles.containerRectangle}>
              <View style={styles.rect3}>
                <Picker
                  selectedValue={this.state.selectedValue}
                  mode="dropdown"
                  style={[styles.textInputPhone, { height: 40, width: '90%', marginTop: 10 }]}
                  onValueChange={(itemValue, itemIndex) => this.setState({ selectedValue: itemValue })}
                >
                  <Picker.Item label={t('Carpenter')} value="Carpenter" />
                  <Picker.Item label={t('Labour')} value="Labour" />
                  <Picker.Item label={t('Electrician')} value="Electrician" />
                </Picker>
                <Text style={{ color: 'black', marginTop: 18, marginRight: 10, fontSize: 15 }}>{t('Category')}</Text>
              </View>
            </View>
            <View style={{ marginLeft: '15%', marginTop: '5%' }} >
              <Text style={{ color: '#353535', fontSize: 18, fontStyle: 'normal' }}>{t('Address')}</Text>
            </View>
            <View style={styles.containerRecatngle}>
              <View style={[styles.rect3, { borderColor: this.state.errors.includes('state') ? 'red' : 'rgba(112,112,112,1)' }]}>
                {/* <TextInput style = {styles.textInputPhone}
                      placeholder={this.state.personalData.personal.state}
                      onChangeText={(state)=>this.setState({state:state})}
                    /> */}
                <TextInput style={styles.textInputPhone}
                  placeholder={t('State')}
                  onChangeText={(state) => this.setState({ state: state })}
                />
                {/* <Text style={{ color: 'black', marginTop: 15, marginRight: 10, fontSize: 12 }}>{t('State')}</Text> */}
              </View>
            </View>
            <View style={styles.containerRecatngle}>
              <View style={[styles.rect3, { borderColor: this.state.errors.includes('city') ? 'red' : 'rgba(112,112,112,1)' }]}>
                {/* <TextInput style = {styles.textInputPhone}
                      placeholder={this.state.personalData.personal.city}
                      onChangeText={(city)=>this.setState({city:city})}
                    /> */}
                <TextInput style={styles.textInputPhone}
                  placeholder={t('City')}
                  onChangeText={(city) => this.setState({ city: city })}
                />
                {/* <Text style={{ color: 'black', marginTop: 15, marginRight: 10, fontSize: 12 }}>{t('City')}</Text> */}
              </View>
            </View>
            <View style={styles.containerRecatngle}>
              <View style={[styles.rect3, { borderColor: this.state.errors.includes('area') ? 'red' : 'rgba(112,112,112,1)' }]}>
                {/* <TextInput style = {styles.textInputPhone}
                      placeholder={this.state.personalData.personal.area}
                      onChangeText={(area)=>this.setState({area:area})}
                    /> */}
                <TextInput style={styles.textInputPhone}
                  placeholder={t('Area')}
                  onChangeText={(area) => this.setState({ area: area })}
                />
                {/* <Text style={{ color: 'black', marginTop: 15, marginRight: 10, fontSize: 12 }}>{t('Area')}</Text> */}
              </View>
            </View>
            <View style={styles.containerRecatngle}>
              <View style={[styles.rect3, { borderColor: this.state.errors.includes('street') ? 'red' : 'rgba(112,112,112,1)' }]}>
                {/* <TextInput style = {styles.textInputPhone}
                      placeholder={this.state.personalData.personal.street}
                      onChangeText={(street)=>this.setState({street:street})}
                    /> */}
                <TextInput style={styles.textInputPhone}
                  placeholder={t('Street')}
                  onChangeText={(street) => this.setState({ street: street })}
                />
                {/* <Text style={{ color: 'black', marginTop: 15, marginRight: 10, fontSize: 12 }}>{t('Street')}</Text> */}
              </View>
            </View>
            <View style={styles.containerRecatngle}>
              <View style={[styles.rect3, { borderColor: this.state.errors.includes('building') ? 'red' : 'rgba(112,112,112,1)' }]}>
                {/* <TextInput style = {styles.textInputPhone}
                      placeholder={this.state.personalData.personal.building}
                      onChangeText={(building)=>this.setState({building:building})}
                    /> */}
                <TextInput style={styles.textInputPhone}
                  placeholder={t('Building')}
                  onChangeText={(building) => this.setState({ building: building })}
                />
                {/* <Text style={{ color: 'black', marginTop: 15, marginRight: 10, fontSize: 12 }}>{t('Building')}</Text> */}
              </View>
            </View>
            <View style={styles.containerRecatngle}>
              <View style={[styles.rect3, { borderColor: this.state.errors.includes('flatNo') ? 'red' : 'rgba(112,112,112,1)' }]}>
                {/* <TextInput style = {styles.textInputPhone}
                      placeholder={this.state.personalData.personal.flat}
                      onChangeText={(flatNo)=>this.setState({flatNo:flatNo})}
                    /> */}
                <TextInput style={styles.textInputPhone}
                  placeholder={t('Flat No')}
                  onChangeText={(flatNo) => this.setState({ flatNo: flatNo })}
                />
                {/* <Text style={{ color: 'black', marginTop: 15, marginRight: 10, fontSize: 12 }}>{t('Flat No')}{"."}</Text> */}
              </View>
            </View>
            {/* <MapView
                  style={{ top: 20, width: '100%', height: 200 }}
                  scrollEnabled={true}
                  initialRegion={{
                    latitude: latitude,
                    longitude: longitude,
                  }}
                  customMapStyle={mapStyle}
                >
                  <Marker coordinate={{
                    latitude: latitude,
                    longitude:longitude,
                    latitudeDelta:0.02, 
                    longitudeDelta: 0.02
                  }}
                    pinColor={"white"}
                    title={"UniworksDesigns"}
                    description={"just for testing"} />
                </MapView> */}
            <TouchableOpacity style={styles.SubmitButtonStyle} onPress={this.handleSubmit}>
              <Text style={{ fontSize: 20, top: 13, color: '#ffffff' }}>{t('Proceed')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default withTranslation()(PersonalScreen)

const styles = StyleSheet.create({
  containerRecatngle: {
    marginTop: 15,
    alignItems: 'center'
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
  mainContainer: {
    flex: 1,
    marginBottom: "30%"
  },
  containerRecatngleName: {
    marginTop: 30,
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
    width: 147
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
    opacity: 0.5
  },
  signInRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 72,
    marginLeft: 33,
    marginRight: 27
  },
  containerRectangle: {
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
  complete: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomContainer: {
    top: '10%',
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
  eyeIcon: {
    marginTop: 20,
  },
  otpmainContainer: {
    flex: 1,
    top: 20,
    alignItems: 'center'
  },
  otpContainer: {
    flexDirection: 'row',
    top: 30
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
  icon1Stack: {
    width: 60,
    height: 60
  },
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
});