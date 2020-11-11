import React, { Component } from 'react';
import { Container, Tab, Tabs } from 'native-base';
import PendingTab from '../vendor/tabs/Pending';
import OngoingTab from '../vendor/tabs/OngoingTab';
import UpcomingTab from '../vendor/tabs/UpcomingTab';
import Entypo from 'react-native-vector-icons/Entypo'

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: 'black' }}>
          <Tab tabStyle={{ backgroundColor: 'white' }}
            activeTabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: 'black' }} activeTextStyle={{ color: 'black',fontWeight: "bold" }} heading="Opportunity">
            {/* <Entypo style={{ fontSize: 24, top: 4 }} name='new-message' color='#E32626' /> */}
            <PendingTab />
          </Tab>
          <Tab tabStyle={{ backgroundColor: 'white' }}
            activeTabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: 'black' }} activeTextStyle={{ color: 'black' ,fontWeight: "bold"}} heading="Ongoing">
            <OngoingTab />
          </Tab>
          <Tab tabStyle={{ backgroundColor: 'white' }}
            activeTabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: 'black' }} activeTextStyle={{ color: 'black',fontWeight: "bold" }} heading="Upcoming">
            <UpcomingTab />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}