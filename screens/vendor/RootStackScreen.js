import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../common/SplashScreen';
import SignUpScreen from '../common/SignUpScreen';
import LogInScreen from '../common/LoginScreen';
import PersonalDetailsScreen from '../common/PersonalDetailsScreen';
import PaymentDetailsScreen from '../common/PaymentDetailsScreen';
import RecoverAccountScreen from '../common/RecoverAccountScreen';
import NewPassword from '../common/NewPasswordScreen';
import CameraScreen from '../common/CameraScreen';

const RootStack = createStackNavigator();

const RootStackScreen = () => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
        <RootStack.Screen name="Personal Details" component={PersonalDetailsScreen} />
        <RootStack.Screen name="Payment Details" component={PaymentDetailsScreen} />
        <RootStack.Screen name="LogInScreen" component={LogInScreen} />
        <RootStack.Screen name="Recover Account" component={RecoverAccountScreen} />
        <RootStack.Screen name="New Password" component={NewPassword} />
        <RootStack.Screen name="CameraScreen" component={CameraScreen} />
    </RootStack.Navigator>
);

export default RootStackScreen;
