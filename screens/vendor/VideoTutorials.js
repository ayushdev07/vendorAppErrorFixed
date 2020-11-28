import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import data from '../../components/Data'
import AsyncStorage from '@react-native-community/async-storage'
import { Appbar } from 'react-native-paper'
import { withTranslation } from 'react-i18next'
import i18n from '../../components/i18n'
import YoutubeScreen from '../common/Youtube'

class VideoTutorials extends Component {
  _isMounted = false

  constructor() { super(); this.state = { videoId: "ml5wVLbxIiw" } }

  renderVideo(videoId) { this.setState({ videoId: videoId }) }

  renderItem(item) {
    return (
      <TouchableOpacity onPress={() => { this.renderVideo(item.videoId) }}>
        <Image style={{ width: 120, height: 150, marginLeft: 10 }} key={item.key} source={{ uri: item.image }} />
      </TouchableOpacity>
    )
  }

  componentDidMount() {
    this._isMounted = true
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      AsyncStorage.getItem('LANG').then((value) => {
        if (value == "en") { i18n.changeLanguage('en') }
        else if (value == "hi") { i18n.changeLanguage('hi') }
      });
    });
  }

  componentWillUnmount() { this._isMounted = false; this._unsubscribe(); }

  render() {
    const { t } = this.props;
    return (
      <ScrollView style={{ backgroundColor: "black" }}>
        <Appbar.Header style={{ backgroundColor: '#fff', marginTop:'2%' }}>
          <Appbar.Content title={t('Login/SignUp')} style={{ fontSize: 10, marginTop:'-1%', alignItems:'center' }}  onPress={()=>this.props.navigation.navigate('LogInScreen')} />
        </Appbar.Header>
        <View style={styles.container}>
          <YoutubeScreen videoId={this.state.videoId} />
          <View style={{ marginTop: 20 }}>
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
    marginTop: 40,
    backgroundColor: "rgba(250,255,255,1)"
    // backgroundColor:'rgba(250,255,255,0.3)'
  }
});

export default withTranslation()(VideoTutorials)