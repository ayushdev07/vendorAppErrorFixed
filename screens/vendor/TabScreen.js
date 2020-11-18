import React, { Component } from 'react';
import { Container, Tab, Tabs } from 'native-base';
import OpportunityTab from '../vendor/tabs/OpportunityTab';
import OngoingTab from '../vendor/tabs/OngoingTab';
import UpcomingTab from '../vendor/tabs/UpcomingTab';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-community/async-storage'
import { withTranslation } from 'react-i18next'
import i18n from '../../components/i18n'

class TabsExample extends Component {
  componentDidMount() {
    AsyncStorage.getItem('LANG').then((value) => {
      if (value == "en") { i18n.changeLanguage('en') }
      else if (value == "hi") { i18n.changeLanguage('hi') }
    });
  }
  render() {
    const { t } = this.props;
    return (
      <Container>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: 'black' }}>
          <Tab tabStyle={{ backgroundColor: 'white' }}
            activeTabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: 'black' }} activeTextStyle={{ color: 'black', fontWeight: "bold" }} heading={t('Opportunity')}>
            {/* <Entypo style={{ fontSize: 24, top: 4 }} name='new-message' color='#E32626' /> */}
            <OpportunityTab />
          </Tab>
          <Tab tabStyle={{ backgroundColor: 'white' }}
            activeTabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: 'black' }} activeTextStyle={{ color: 'black', fontWeight: "bold" }} heading={t('Ongoing')}>
            <OngoingTab />
          </Tab>
          <Tab tabStyle={{ backgroundColor: 'white' }}
            activeTabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: 'black' }} activeTextStyle={{ color: 'black', fontWeight: "bold" }} heading={t('Upcoming')}>
            <UpcomingTab />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
export default withTranslation()(TabsExample)