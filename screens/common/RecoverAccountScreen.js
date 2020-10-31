import React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import FeatherIcon from "react-native-vector-icons/Feather"
import AsyncStorage from '@react-native-community/async-storage'
import { withTranslation } from 'react-i18next'
import i18n from '../../components/i18n'

class RecoverAccountScreen extends React.Component {

    constructor(props) {
        super(props)
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
            <View style={styles.mainContainer}>
                <View style={{ alignItems: 'center', marginTop: 72 }}>
                    <Text style={{ fontSize: 36 }}>{t('Recover Account')}</Text>
                </View>
                <View style={styles.containerRecatngleName}>
                    <View style={styles.rect3} >
                        <TextInput style={styles.textInputPhone}
                            placeholder="983939xxxx"
                        />
                        <Text style={{ color: 'black', marginTop: 15, marginRight: 10, fontSize: 15 }}>{t('Phone')}</Text>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('New Password')}>
                        <View >
                            <View style={styles.icon1Stack}>
                                <View style={styles.rect4}>
                                    <FeatherIcon name="arrow-right" style={styles.icon2}></FeatherIcon>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default withTranslation()(RecoverAccountScreen)

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    containerRecatngleName: {
        marginTop: 40,
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
    textInputPhone: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        flexDirection: 'row',
        maxWidth: '80%'
    },
    textInputAnswer: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        flexDirection: 'row',
        maxWidth: '90%'
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