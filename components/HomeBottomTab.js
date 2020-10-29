import React, { useState, useEffect } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import TutorialsScreen from '../screens/vendor/TutorialsScreen';
import WalletScreen from '../screens/vendor/WalletScreen';
import NotificationsScreen from '../screens/vendor/NotificationsScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SettingsHomeScreen from '../screens/settings/SettingsHomeScreen';
import NotificationSuperVisorScreen from '../screens/supervisors/NotificationScreenSuperVisor';
import { AsyncStorage } from 'react-native';

const Tab = createBottomTabNavigator();

const HomeBottomTab = (props) => (

  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Tutorials"
      component={TutorialsScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{
        tabBarLabel: 'Notifications',
        tabBarColor: '#694fad',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Wallet"
      component={WalletScreen}
      options={{
        tabBarLabel: 'Wallet',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="account-balance-wallet" color={color} size={26} />
        ),
      }}
    />


    <Tab.Screen
      name="Profile"
      component={SettingsHomeScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#d02860',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />

  </Tab.Navigator>


);

export default HomeBottomTab;

