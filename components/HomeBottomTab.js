import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import NotificationsDrawer from '../screens/common/NotificationsDrawer'
import TutorialsDrawer from '../screens/common/TutorialsDrawer'
import WalletDrawer from '../screens/common/WalletDrawer'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-community/async-storage'
import { useTranslation } from 'react-i18next'
import i18n from './i18n'

const Tab = createBottomTabNavigator();

const HomeBottomTab = ({ navigation }) => {

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
    <Tab.Navigator initialRouteName="Notifications" activeColor="#fff">

      <Tab.Screen
        name="Notifications"
        component={NotificationsDrawer}
        options={{
          tabBarLabel: t('Notifications'), tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => <Icon name="ios-notifications" color={color} size={26} />
        }}
      />

      <Tab.Screen
        name="Tutorials"
        component={TutorialsDrawer}
        options={{
          tabBarLabel: t('Tutorials'), tabBarColor: '#009387',
          tabBarIcon: ({ color }) => <Feather name='video' color={color} size={26} />
        }}
      />

      <Tab.Screen
        name="Wallet"
        component={WalletDrawer}
        options={{
          tabBarLabel: t('Work History'), tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => <MaterialIcons name="account-balance-wallet" color={color} size={26} />
        }}
      />

    </Tab.Navigator>
  )
}

export default HomeBottomTab;