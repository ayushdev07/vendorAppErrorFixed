import React, { useEffect } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import VideoSlider from '../vendor/VideoSlider';
import PersonalScreen from '../settings/PersonalScreen';
import SuperVisorsScreen from '../settings/SupervisorsScreen';
import AccountDetailsScreen from '../settings/AccountDetails';
import SecurityScreen from '../settings/SecurityScreen';
import LanguageScreen from '../settings/LanguageScreen';
import AboutScreen from '../settings/AboutScreen';
import AsyncStorage from '@react-native-community/async-storage'
import { useTranslation } from 'react-i18next'
import i18n from '../../components/i18n'

const Drawer = createDrawerNavigator();

export default function HomeDrawer({ navigation }) {

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
        <>
            <Header containerStyle={{ backgroundColor: 'rgb(150,200,90)' }}>
                <TouchableOpacity onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }} >
                    <Image source={require('../../components/HamburgerIcon.jpg')} style={{ width: 30, height: 30, tintColor: '#1F73BD' }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 29,flex:1,justifyContent:'center',alignItems:'center', marginTop:8 }}>Indus</Text>
            </Header>
            <Drawer.Navigator initialRouteName="Tutorials">
                <Drawer.Screen name={t("Tutorials")} component={VideoSlider}
                    options={{ drawerIcon: ({ focused }) => <Feather name='video' size={32} color={focused ? '#1F73BD' : '#ccc'} /> }} />
                <Drawer.Screen name={t("Personal")} component={PersonalScreen}
                    options={{ drawerIcon: ({ focused }) => <Feather name='user' size={32} color={focused ? '#1F73BD' : '#ccc'} /> }} />
                <Drawer.Screen name={t("Supervisors")} component={SuperVisorsScreen}
                    options={{ drawerIcon: ({ focused }) => <Feather name='users' size={32} color={focused ? '#1F73BD' : '#ccc'} /> }} />
                <Drawer.Screen name={t("Account Details")} component={AccountDetailsScreen}
                    options={{ drawerIcon: ({ focused }) => <MaterialIcons name='credit-card' size={32} color={focused ? '#1F73BD' : '#ccc'} /> }} />
                <Drawer.Screen name={t("Security")} component={SecurityScreen}
                    options={{ drawerIcon: ({ focused }) => <Feather name='lock' size={32} color={focused ? '#1F73BD' : '#ccc'} /> }} />
                <Drawer.Screen name={t("Language")} component={LanguageScreen}
                    options={{ drawerIcon: ({ focused }) => <Feather name='message-circle' size={32} color={focused ? '#1F73BD' : '#ccc'} /> }} />
                <Drawer.Screen name={t("About")} component={AboutScreen}
                    options={{ drawerIcon: ({ focused }) => <Feather name='alert-circle' size={32} color={focused ? '#1F73BD' : '#ccc'} /> }} />
            </Drawer.Navigator>
        </>
    );
}
