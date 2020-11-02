import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, TextInput, TouchableOpacity, } from "react-native"
import Feather from 'react-native-vector-icons/Feather'
import FeatherIcon from "react-native-vector-icons/Feather"
import AsyncStorage from '@react-native-community/async-storage'
import { useTranslation } from 'react-i18next'
import i18n from '../../components/i18n'

const NewPassword = ({ navigation }) => {

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
        confirmPassword: '',
        secureTextEntry: true,
        confirmSecureTextEntry: true
    })
    const [errors, setErrors] = useState([])

    const handlePasswordChange = (val) => { setData({ ...data, password: val }) }
    const handleConfirmPasswordChange = (val) => { setData({ ...data, confirmPassword: val }) }
    const updateSecureTextEntry = () => { setData({ ...data, secureTextEntry: !data.secureTextEntry }) }
    const updateConfirmSecureTextEntry = () => { setData({ ...data, confirmSecureTextEntry: !data.confirmSecureTextEntry }) }

    const onSubmit = () => {
        let errors = []
        if (data.password === '') { errors.push('password') }
        if (data.confirmPassword === '') { errors.push('confirmPassword') }
        if (errors.length) { setErrors(errors) }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', marginTop: 72 }}>
                <Text style={{ fontSize: 36 }}>{t('New Password')}</Text>
            </View>
            <View style={styles.containerRecatnglePassword}>
                <View style={[styles.rect3, { borderColor: errors.includes('password') ? 'red' : 'rgba(112,112,112,1)' }]}>
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
            <View style={styles.containerRecatnglePassword}>
                <View style={[styles.rect3, { borderColor: errors.includes('confirmPassword') ? 'red' : 'rgba(112,112,112,1)' }]}>
                    <TextInput style={styles.textInput}
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                        placeholder="Confirm Password"
                    />
                    <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={updateConfirmSecureTextEntry}
                    >
                        {data.confirmSecureTextEntry ? <Feather name="eye-off" color="grey" size={20} /> : <Feather name="eye" color="grey" size={20} />}
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={onSubmit}>
                    <View>
                        <View style={styles.icon1Stack}>
                            <View style={styles.rect4}>
                                <FeatherIcon name="arrow-right" style={styles.icon2}></FeatherIcon>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerRecatnglePassword: {
        marginTop: 40,
        alignItems: 'center',
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
    bottomContainer: {
        top: '40%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    icon1Stack: {
        width: 60,
        height: 60
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
})

export default NewPassword