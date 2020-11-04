import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-community/async-storage'
import { useTranslation } from 'react-i18next'
import i18n from '../../components/i18n'

function AboutScreen({ navigation }) {

    const { t } = useTranslation();
    useEffect(() => {
        navigation.addListener('focus', () => {
            AsyncStorage.getItem('LANG').then((value) => {
                if (value == "en") { i18n.changeLanguage('en') }
                else if (value == "hi") { i18n.changeLanguage('hi') }
            });
        });
    }, [navigation]);

    return (
        <View style={{ flexDirection: 'row', marginTop: 50, marginStart: '10%' }} >
            <Feather name='alert-circle' size={32} />
            <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginStart: 10 }}>{t('About')}</Text>
        </View>
    )
}

export default AboutScreen
