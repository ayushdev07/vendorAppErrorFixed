import React, { Component } from 'react';
import { Container, Tab, Tabs } from 'native-base';
import UpcomingTab from '../vendor/tabs/UpcomingTab';
import OngoingTab from '../vendor/tabs/OngoingTab';
import CompletedTab from '../vendor/tabs/CompletedTab';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: 'white' }}>
          <Tab tabStyle={{ backgroundColor: '#009387' }}
            activeTabStyle={{ backgroundColor: '#009387' }} textStyle={{ color: 'white' }} activeTextStyle={{ color: 'white' }} heading="Upcoming">
            <UpcomingTab />
          </Tab>
          <Tab tabStyle={{ backgroundColor: '#009387' }}
            activeTabStyle={{ backgroundColor: '#009387' }} textStyle={{ color: 'white' }} activeTextStyle={{ color: 'white' }} heading="Ongoing">
            <OngoingTab />
          </Tab>
          <Tab tabStyle={{ backgroundColor: '#009387' }}
            activeTabStyle={{ backgroundColor: '#009387' }} textStyle={{ color: 'white' }} activeTextStyle={{ color: 'white' }} heading="Completed">
            <CompletedTab />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}