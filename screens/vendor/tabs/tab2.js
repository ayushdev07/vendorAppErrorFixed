import React, { Component } from 'react';
import { Alert, View, ActivityIndicator } from 'react-native';
import { Container, Content, List, Text } from 'native-base';


export default class tab2 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      data: null,
      setModalVisible: false,
      modalArticleData: {}
    }
  }

//   handleItemDataOnPress = (articleData) => {
//     this.setState({
//       setModalVisible: true,
//       modalArticleData: articleData
//     });
//   }

//   handleModalClose = () => {
//     this.setState({
//       setModalVisible: false,
//       modalArticleData: {}
//     });
//   }

//   componentDidMount() {
//     getArticles().then(data => {
//       this.setState({
//         isLoading: false,
//         data: data
//       });
//     }, error => {
//       Alert.alert('Error', 'Something went wrong!');
//     }
//     )
//   }

  render() {
    let view = this.state.isLoading ? (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
        <Text style={{marginTop: 10}} children="Please Wait.." />
      </View>
    ) : (
            //   <DataItem onPress={this.handleItemDataOnPress} data={item} />
            <Text>Hey This is just for testing Tab 2</Text>
    )

    return (
      <Container>
        <Content>
          {view}
        </Content>
        {/* <Modal 
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        /> */}
        <Text>Hey there</Text>
      </Container>
    );
  }
}