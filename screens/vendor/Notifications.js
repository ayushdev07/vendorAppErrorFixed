import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'
import TabScreen from '../vendor/TabScreen'
import AsyncStorage from '@react-native-community/async-storage'
import { useTranslation } from 'react-i18next'
import i18n from '../../components/i18n'

export default function Notifications({navigation}) {
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
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
                    <Text style={styles.header}>{t('Notifications')}</Text>
                </View>
            </View>
            <View style={styles.searchBox}>
                <TextInput style={styles.searchText} placeholder={t('Booking ID')} />
                <View style={styles.searchIcon}>
                    <Feather name='search' size={24} />
                </View>
            </View>
            <TabScreen />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    headerContainer: {
        flexDirection: "row",
        width: '100%',
    },
    header: {
        textAlign: 'center',
        marginTop: '10%',
        color: '#353535',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: '5%',
    },
    searchBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '95%',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 50,
        paddingHorizontal: 20,
        zIndex: 2,
    },
    searchText: {
        fontSize: 16,
        color: '#A6BCD0',
        paddingLeft: 10,
        alignItems: "flex-start"
    },
    searchIcon: {
        flex: 1,
        alignItems: "flex-end",
        paddingRight: 10
    },
});