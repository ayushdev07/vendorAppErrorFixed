import React, { useEffect } from 'react';
import { View, Text, StyleSheet, _FlatList, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-community/async-storage'
import { useTranslation } from 'react-i18next'
import i18n from '../../components/i18n'

const SupervisorsScreen = ({ navigation }) => {

    const { t } = useTranslation();

    let DataSuperVisor = [{ name: 'Guddu', phoneNumber: '9876756560', id: '1' }, { name: 'Kartik', phoneNumber: '9839391596', id: '2' }]

    let dataSupervisor = DataSuperVisor

    const FlatListItemSeparator = () => { return <View style={{ height: 20, width: "100%", backgroundColor: "#ffffff" }} /> }

    useEffect(() => {
        navigation.addListener('focus', () => {
            AsyncStorage.getItem('LANG').then((value) => {
                if (value == "en") { i18n.changeLanguage('en') }
                else if (value == "hi") { i18n.changeLanguage('hi') }
            });
        });
    }, [navigation]);

    const renderItem = ({ item }) => {
        return (
            <View style={{ backgroundColor: '#ffffff', flex: 1, marginHorizontal: '10%' }}>
                <View style={styles.contentBox}>
                    <Text style={{ fontSize: 16 }}>{t('Supervisor Request')}</Text>
                </View>
                <Text style={{ color: '#353535', fontSize: 22, fontWeight: 'bold' }}>{item.name} </Text>
                <View style={{ flexDirection: 'row', marginEnd: '5%' }}>
                    <Text style={{ marginTop: '5%' }}>+91-{item.phoneNumber}</Text>
                    <View style={{ flex: 1, flexDirection: 'column' }} />
                    <TouchableOpacity style={{ top: 5 }}>
                        <Text style={{ color: '#EB3333', alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>{t('Approve')}</Text>
                    </TouchableOpacity>
                    <View style={{ flex: 1, flexDirection: 'column' }} />
                    <TouchableOpacity style={{ top: 5 }}>
                        <Text style={{ color: '#EB3333', alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>{t('Remove')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 50, marginStart: '10%' }}>
                <Feather name='users' size={32} />
                <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginStart: 10 }}>{t('Supervisors')}</Text>
            </TouchableOpacity>
            <FlatList
                style={{ marginTop: 20 }}
                data={dataSupervisor}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ItemSeparatorComponent={FlatListItemSeparator}
            />
        </View>
    )
}

export default SupervisorsScreen;

const styles = StyleSheet.create({
    rect3: {
        width: "90%",
        height: 60,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "rgba(112,112,112,1)",
        borderStyle: "solid",
        borderRadius: 100,
        flexDirection: "row",
        paddingStart: 20,
        alignSelf: 'center'
    },
    textInputPhone: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        flexDirection: 'row',
        maxWidth: '88%'
    },
    mainContainer: {
        marginVertical: '4%',
        marginHorizontal: '10%',
        flex: 1
    },
    contentBox: {
        flexDirection: 'row',
        marginTop: '5%',
        marginEnd: '5%',
    },
    filler: {
        flex: 1,
        flexDirection: 'row'
    }
});