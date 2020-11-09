import React, { Component } from 'react';
import { Alert, View, ActivityIndicator } from 'react-native';
import { Container, Content, List, Text } from 'native-base';

export default class tab3 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      data: null,
    }
  }
  render() {
    let view = this.state.isLoading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
          <Text style={{marginTop: 10}} children="Please Wait.." />
        </View>
      ) : (
              //   <DataItem onPress={this.handleItemDataOnPress} data={item} />
              <Text>Hey This is just for testing Tab 3</Text>
      )

    return (
      <Container>
        <Content>
          {view}
        </Content>
        <Text>Hey there</Text>
      </Container>
    );
  }
}