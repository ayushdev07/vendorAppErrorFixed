/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { View, Text, AsyncStorage, Alert } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'
import Spinner from 'react-native-loading-spinner-overlay'

const SettingsHomeScreen = ({ navigation }) => {

    const [personalData, setPersonalData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [role, setRole] = useState('')
    // const [selectedValue, setSelectedValue] = useState("en");

    const fetchData = async () => {
        let contact = await AsyncStorage.getItem('contact')
        let role = await AsyncStorage.getItem('role')
        let middleware = ''
        if (role == 'CSVD') {
            middleware = 'vendor'
            setRole('vendor')
        } else {
            middleware = 'supervisor'
            setRole('supervisor')
        }
        let result = await fetch('https://uniworksvendorapis.herokuapp.com/' + middleware + '/' + contact)
            .then(response => {
                return response.json()
            })
            .then(json => {
                if (middleware == 'supervisor') {
                    setPersonalData(json.supervisor)
                    setLoading(false)
                } else {
                    setPersonalData(json.vendor)
                    setLoading(false)
                }
            })
    }
   useEffect(() => {
        fetchData();
    }, [])

    return (
        <View style={{ backgroundColor: '#ffffff', flex: 1 }} >
            {isLoading ? <Spinner visible={isLoading} textContent={'Loading...'} textStyle={{ color: '#FFF' }} /> : null}
            <View>
                <Text style={{ alignSelf: 'center', marginTop: '10%', color: '#353535', fontSize: 24, fontWeight: 'bold', marginBottom: '5%' }}>
                    Settings
                </Text>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 50, marginStart: '10%' }}
                    onPress={() => navigation.navigate('PersonalScreen', { personal: personalData })}>
                    <Feather name='user' size={32} />
                    <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginStart: 10 }}>Personal</Text>
                </TouchableOpacity>
                {role == 'supervisor' ? null :
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 30, marginStart: '10%' }}
                        onPress={() => navigation.navigate('SuperVisorsScreen')}>
                        <Feather name='users' size={32} />
                        <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginStart: 10 }}>Supervisors</Text>
                    </TouchableOpacity>
                }
                {role == 'supervisor' ? null :
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 50, marginStart: '10%' }}
                        onPress={() => navigation.navigate('AccountDetailsScreen', { personal: personalData })}>
                        <MaterialIcons name='credit-card' size={32} />
                        <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginStart: 10 }}>Account Details</Text>
                    </TouchableOpacity>
                }
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 50, marginStart: '10%' }}
                    onPress={() => navigation.navigate('SecuirtyScreen')}>
                    <Feather name='lock' size={32} />
                    <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginStart: 10 }}>Security</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 50, marginStart: '10%' }}
                    onPress={() => navigation.navigate('LanguageScreen')}>
                    <Feather name='message-circle' size={32} />
                    <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginStart: 10 }}>Language</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 50, marginStart: '10%' }} >
                    <Feather name='alert-circle' size={32} />
                    <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginStart: 10 }}>About</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default SettingsHomeScreen;