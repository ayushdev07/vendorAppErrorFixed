import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native"
import Feather from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-community/async-storage'
import { useTranslation } from 'react-i18next'
import i18n from '../../components/i18n'

const SecurityScreen = ({ navigation }) => {

    const { t } = useTranslation();

    const [data, setData] = React.useState({ password: '', confirmPassword: '', secureTextEntry: true, confirmSecureTextEntry: true })
    const [errors, setErrors] = useState([])

    const handlePasswordChange = (val) => { setData({ ...data, password: val }) }
    const handleConfirmPasswordChange = (val) => { setData({ ...data, confirmPassword: val }) }
    const updateSecureTextEntry = () => { setData({ ...data, secureTextEntry: !data.secureTextEntry }) }
    const updateConfirmSecureTextEntry = () => { setData({ ...data, confirmSecureTextEntry: !data.confirmSecureTextEntry }) }

    useEffect(() => {
        navigation.addListener('focus', () => {
            AsyncStorage.getItem('LANG').then((value) => {
                if (value == "en") { i18n.changeLanguage('en') }
                else if (value == "hi") { i18n.changeLanguage('hi') }
            });
        });
    }, [navigation]);

    const onSubmit = () => {
        let errors = []
        if (data.password === '') { errors.push('password') }
        if (data.confirmPassword === '') { errors.push('confirmPassword') }
        if (errors.length) { setErrors(errors) }
    }

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 50, marginStart: '10%' }}>
                <Feather name='lock' size={32} />
                <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginStart: 10 }}>{t('Security')}</Text>
            </TouchableOpacity>
            <Text style={{ color: '#353535', fontSize: 18, fontStyle: 'normal', marginStart: '15%', marginTop: 25 }}>{t('Old Password')}</Text>
            <View style={styles.containerRecatnglePassword}>
                <View style={[styles.rect3, { borderColor: errors.includes('password') ? 'red' : 'rgba(112,112,112,1)' }]}>
                    <TextInput style={styles.textInput}
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={(val) => handlePasswordChange(val)}
                        placeholder={t('Password')}
                    />
                    <View style={{ alignItems: 'flex-end', alignSelf: 'center', marginRight: 10 }} >
                        <TouchableOpacity onPress={() => navigation.navigate('Recover Account')} >
                            <Text style={{ color: '#5356C1' }}>{t('Confirm')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ alignItems: 'flex-end', marginRight: '15%', top: 10 }} >
                <TouchableOpacity onPress={() => navigation.navigate('Recover Account')} >
                    <Text style={{ color: '#5356C1' }} >{t('Forgot Password?')}</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ color: '#353535', fontSize: 18, fontStyle: 'normal', marginStart: '15%', marginTop: 20 }}>{t('Change Password')}</Text>
            <View style={styles.containerRecatnglePassword2}>
                <View style={[styles.rect3, { borderColor: errors.includes('password') ? 'red' : 'rgba(112,112,112,1)' }]}>
                    <TextInput style={styles.textInput}
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={(val) => handlePasswordChange(val)}
                        placeholder={t('Password')}
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
                        placeholder={t('Change Password')}
                    />
                    <TouchableOpacity style={styles.eyeIcon} onPress={updateConfirmSecureTextEntry}>
                        {data.confirmSecureTextEntry ? <Feather name="eye-off" color="grey" size={20} /> : <Feather name="eye" color="grey" size={20} />}
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', width: '30%', alignSelf: 'center', marginBottom: '10%' }}>
                <TouchableOpacity style={styles.SubmitButtonStyle} onPress={onSubmit}>
                    <Text style={{ fontSize: 18, color: '#ffffff', alignSelf: 'center' }}>{t('Proceed')}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerRecatnglePassword: {
        marginTop: 20,
        alignItems: 'center'
    },
    containerRecatnglePassword2: {
        marginTop: 20,
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
    SubmitButtonStyle: {
        backgroundColor: '#99DD70',
        borderRadius: 60,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
        paddingRight: 20,
        paddingLeft: 20
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
        marginTop: 20
    },
    bottomContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end'
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

export default SecurityScreen;