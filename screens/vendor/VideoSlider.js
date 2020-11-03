import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Appbar } from 'react-native-paper'
import data from '../../components/Data'
import AsyncStorage from '@react-native-community/async-storage'
import { withTranslation } from 'react-i18next'
import i18n from '../../components/i18n'
import VideoScreen from '../common/VideoScreen'

class VideoSlider extends Component {
  _isMounted = false

  constructor() { super(); this.state = { videoId: "85z53bAebsI" } }

  renderVideo(videoId) { this.setState({ videoId: videoId }) }

  renderItem(item) {
    return (
      <TouchableOpacity onPress={() => { this.renderVideo(item.videoId) }}>
        <Image style={{ width: 120, height: 180, marginLeft: 10 }} key={item.key} source={{ uri: item.image }} />
      </TouchableOpacity>
    )
  }

  componentDidMount() {
    this._isMounted = true
    AsyncStorage.getItem('LANG').then((value) => {
      if (value == "en") { i18n.changeLanguage('en') }
      else if (value == "hi") { i18n.changeLanguage('hi') }
    });
  }

  componentWillUnmount() { this._isMounted = false }

  render() {
    const { t } = this.props;
    return (
      <ScrollView>
        <Appbar.Header style={{ backgroundColor: '#99DD70' }}>
          <Appbar.Content title="Indus" style={{ fontSize: 80, marginLeft: 0 }} />
        </Appbar.Header>
        <VideoScreen videoId={this.state.videoId} />
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>{t('Uniworks Movies')}</Text>
            <FlatList
              style={{ marginTop: 20 }}
              horizontal
              ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
              renderItem={({ item }) => this.renderItem(item)}
              data={data}
              keyExtractor={(item, index) => 'key' + index.toString()}
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
              keyExtractor={(item, index) => 'key' + index.toString()}
            />
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.text}>{t('Carpenter')}</Text>
            <FlatList
              style={{ marginTop: 20 }}
              horizontal
              ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
              renderItem={({ item }) => this.renderItem(item)}
              data={data}
              keyExtractor={(item, index) => 'key' + index.toString()}
            />
          </View>
        </View>
      </ScrollView>
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
    marginTop: 20,
  }
});

export default withTranslation()(VideoSlider)