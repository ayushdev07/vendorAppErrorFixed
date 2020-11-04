import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { useTranslation } from 'react-i18next'
import i18n from '../../components/i18n'

const LanguageScreen = ({ navigation }) => {

    const { t } = useTranslation();

    const [isFocused1, setFocused1] = useState();
    const [isFocused2, setFocused2] = useState();

    var touchProps1 = {
        onPress: () => {
            AsyncStorage.setItem('LANG', "en"); setFocused1(true); setFocused2(false);
        }, style: isFocused1 ? styles.selectedLang : styles.lang
    };
    var touchProps2 = {
        onPress: () => {
            AsyncStorage.setItem('LANG', "hi"); setFocused2(true); setFocused1(false);
        }, style: isFocused2 ? styles.selectedLang : styles.lang
    };
    var textTouchProps1 = { style: isFocused1 ? styles.selectedLangText : styles.langText };
    var textTouchProps2 = { style: isFocused2 ? styles.selectedLangText : styles.langText };

    useEffect(() => {
        navigation.addListener('focus', () => {
            AsyncStorage.getItem('LANG').then((value) => {
                if (value == "en") { i18n.changeLanguage('en') }
                else if (value == "hi") { i18n.changeLanguage('hi') }
            });
        });
    }, [navigation]);

    return (
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.heading}>{t('Change Language')}</Text>
            <TouchableOpacity {...touchProps1}>
                <Text {...textTouchProps1}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity {...touchProps2}>
                <Text {...textTouchProps2}>हिंदी</Text>
            </TouchableOpacity>
        </ View>
    )
}

export default LanguageScreen;

const styles = StyleSheet.create({
    heading: {
        alignSelf: 'center',
        marginTop: '50%',
        color: '#353535',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: '5%'
    },
    selectedLang: {
        borderRadius: 36,
        backgroundColor: '#7BED8D',
        textAlign: 'center',
        marginTop: 20,
        marginLeft: 18,
        padding: 10,
        paddingLeft: 25,
        paddingRight: 25,
        resizeMode: 'contain',
    },
    lang: {
        borderRadius: 36,
        backgroundColor: '#fff',
        textAlign: 'center',
        marginTop: 20,
        marginLeft: 18,
        padding: 10,
        paddingLeft: 10,
        paddingRight: 10,
        resizeMode: 'contain',
    },
    selectedLangText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#fff',
    },
    langText: {
        textAlign: 'center',
        fontSize: 16,
        color: 'grey',
    },
});