import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import VideoSlider from '../screens/vendor/VideoSlider';
import NotificationsScreen from '../screens/vendor/NotificationsScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SettingsHomeScreen from '../screens/settings/SettingsHomeScreen';
import NotificationSuperVisorScreen from '../screens/supervisors/NotificationScreenSuperVisor';
import AsyncStorage from '@react-native-community/async-storage'
import { useTranslation } from 'react-i18next'
import i18n from './i18n'

const Tab = createBottomTabNavigator();

const SupervisorBottomTabScreen = ({ navigation }) => {

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
    <Tab.Navigator initialRouteName="Tutorials" activeColor="#fff">

      <Tab.Screen
        name="Tutorials"
        component={VideoSlider}
        options={{
          tabBarLabel: t('Home'),
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationSuperVisorScreen}
        options={{
          tabBarLabel: t('Notifications'),
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={SettingsHomeScreen}
        options={{
          tabBarLabel: t('Profile'),
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
  )
};

export default SupervisorBottomTabScreen;