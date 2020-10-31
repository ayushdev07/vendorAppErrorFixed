import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'
import Spinner from 'react-native-loading-spinner-overlay'
import AsyncStorage from '@react-native-community/async-storage'
import { useTranslation } from 'react-i18next'
import i18n from '../../components/i18n'

const SettingsHomeScreen = ({ navigation }) => {

    const { t } = useTranslation();

    const [personalData, setPersonalData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [role, setRole] = useState('')

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
        navigation.addListener('focus', () => {
            AsyncStorage.getItem('LANG').then((value) => {
                if (value == "en") { i18n.changeLanguage('en') }
                else if (value == "hi") { i18n.changeLanguage('hi') }
            });
        });
    }, [navigation]);

    useEffect(() => { fetchData(); }, [])

    return (
        <View style={{ backgroundColor: '#ffffff', flex: 1 }} >
            {isLoading ? <Spinner visible={isLoading} textContent={'Loading...'} textStyle={{ color: '#FFF' }} /> : null}
            <View>
                <Text style={{ alignSelf: 'center', marginTop: '10%', color: '#353535', fontSize: 24, fontWeight: 'bold', marginBottom: '5%' }}>
                    {t('Settings')}
                </Text>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 50, marginStart: '10%' }}
                    onPress={() => navigation.navigate('PersonalScreen', { personal: personalData })}>
                    <Feather name='user' size={32} />
                    <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginStart: 10 }}>{t('Personal')}</Text>
                </TouchableOpacity>
                {role == 'supervisor' ? null :
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 30, marginStart: '10%' }}
                        onPress={() => navigation.navigate('SuperVisorsScreen')}>
                        <Feather name='users' size={32} />
                        <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginStart: 10 }}>{t('Supervisors')}</Text>
                    </TouchableOpacity>
                }
                {role == 'supervisor' ? null :
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 50, marginStart: '10%' }}
                        onPress={() => navigation.navigate('AccountDetailsScreen', { personal: personalData })}>
                        <MaterialIcons name='credit-card' size={32} />
                        <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginStart: 10 }}>{t('Account Details')}</Text>
                    </TouchableOpacity>
                }
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 50, marginStart: '10%' }}
                    onPress={() => navigation.navigate('SecuirtyScreen')}>
                    <Feather name='lock' size={32} />
                    <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginStart: 10 }}>{t('Security')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 50, marginStart: '10%' }}
                    onPress={() => navigation.navigate('LanguageScreen')}>
                    <Feather name='message-circle' size={32} />
                    <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginStart: 10 }}>{t('Language')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 50, marginStart: '10%' }} >
                    <Feather name='alert-circle' size={32} />
                    <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginStart: 10 }}>{t('About')}</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default SettingsHomeScreen;