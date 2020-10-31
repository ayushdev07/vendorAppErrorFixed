import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import data from '../../components/Data';
import AsyncStorage from '@react-native-community/async-storage'
import { withTranslation } from 'react-i18next'

class VideoSlider extends Component {

  renderItem(item) { return <Image style={{ width: 120, height: 180, marginLeft: 10 }} key={item.key} source={{ uri: item.image }} /> }

  componentDidMount() {
    AsyncStorage.getItem('LANG').then((value) => {
      if (value == "en") { i18n.changeLanguage('en') }
      else if (value == "hi") { i18n.changeLanguage('hi') }
    });
  }

  render() {
    const { t } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{t('Uniworks Movies')}</Text>
          <FlatList
            style={{ marginTop: 20 }}
            horizontal
            ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
            renderItem={({ item }) => this.renderItem(item)}
            data={data}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.text}>{t('Electrical')}</Text>
          <FlatList
            style={{ marginTop: 20 }}
            horizontal
            ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
            renderItem={({ item }) => this.renderItem(item)}
            data={data}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.text}>{t('Carpenter')}</Text>
          <FlatList
            horizontal
            ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
            renderItem={({ item }) => this.renderItem(item)}
            data={data}
            style={{ marginTop: 20 }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#181818',
    fontSize: 20,
    marginLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default withTranslation()(VideoSlider)