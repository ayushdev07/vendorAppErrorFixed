import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AfterAcceptScreen from '../vendor/AfterAcceptScreen'
import RootStackScreen from '../vendor/RootStackScreen'
import UpcomingTaskScreen from '../vendor/UpcomingTaskScreen'
import SiteRequestScreen from '../vendor/SiteRequestScreen'
import SelectSuperVisorScreen from '../vendor/SelectSuperVisorScreen'
import PersonalScreen from '../settings/PersonalScreen'
import SupervisorsScreen from '../settings/SupervisorsScreen'
import AccountDetailsScreen from '../settings/AccountDetails'
import SecurityScreen from '../settings/SecurityScreen'
import LanguageScreen from '../settings/LanguageScreen'
import VideoScreen from './VideoScreen'
import VideoSlider from '../vendor/VideoSlider'
import HomeBottomTab from '../../components/HomeBottomTab'
import SupervisorBottomTabScreen from '../../components/SuperVisorBottomTab'
import StartSiteScreen from '../supervisors/StartSiteScreen'
import UpcomingTaskSupervisorScreen from '../supervisors/UpcomingTaskSupervisorScreen'
import UpcomingTaskContractorScreen from '../supervisors/UpcomingTaskContractorScreen'
import Notifications from '../vendor/Notifications'
import TabScreen from '../vendor/TabScreen'
import Tutorial from '../vendor/VideoTutorials'
import Youtube from './Youtube'

const HomeStack = createStackNavigator()

function Login() { return <RootStackScreen /> }

const HomeStackScreen = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="Login" component={Login} />
    <HomeStack.Screen name="HomeScreen" component={HomeBottomTab} />
    <HomeStack.Screen name="SuperVisorBottom" component={SupervisorBottomTabScreen} />
    <HomeStack.Screen name="AfterAcceptScreen" component={AfterAcceptScreen} />
    <HomeStack.Screen name="SiteRequestScreen" component={SiteRequestScreen} />
    {/* <HomeStack.Screen name="AfterReachingSite" component={UpcomingTaskScreen} /> */}
    <HomeStack.Screen name="UpcomingTaskScreen" component={UpcomingTaskScreen} />
    <HomeStack.Screen name="UpcomingTaskSupervisorScreen" component={UpcomingTaskSupervisorScreen} />
    <HomeStack.Screen name="UpcomingTaskContractorScreen" component={UpcomingTaskContractorScreen} />
    <HomeStack.Screen name="SelectSupervisorScreen" component={SelectSuperVisorScreen} />
    <HomeStack.Screen name="PersonalScreen" component={PersonalScreen} />
    <HomeStack.Screen name="SuperVisorsScreen" component={SupervisorsScreen} />
    <HomeStack.Screen name="AccountDetailsScreen" component={AccountDetailsScreen} />
    <HomeStack.Screen name="SecurityScreen" component={SecurityScreen} />
    <HomeStack.Screen name="LanguageScreen" component={LanguageScreen} />
    <HomeStack.Screen name="VideoScreen" component={VideoScreen} />
    <HomeStack.Screen name="Youtube" component={Youtube} />
    <HomeStack.Screen name="VideoSlider" component={VideoSlider} />
    <HomeStack.Screen name="Tutorial" component={Tutorial} />
    <HomeStack.Screen name="StartSiteScreen" component={StartSiteScreen} />
    <HomeStack.Screen name="Notifications" component={Notifications} />
    <HomeStack.Screen name="TabScreen" component={TabScreen} />
  </HomeStack.Navigator>
)

export default HomeStackScreen
