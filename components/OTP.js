import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default class OTP extends Component {

  constructor(props) {
    super(props)
    this.state = {
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      otp6: "",
    }
  }

  handle = (val) => {
    console.log(this.state.otp1, this.state.otp2, this.state.otp3, this.state.otp4, this.state.otp5, val)
    this.props.save(this.state.otp1, this.state.otp2, this.state.otp3, this.state.otp4, this.state.otp5, val)
    this.setState({ otp6: val })
  }

  render() {
    return (
      <View style={{ flex: 1 }} >
        <View style={{ flex: 0.6, justifyContent: "space-evenly", flexDirection: 'row' }}  >
          <TextInput
            maxLength={1}
            keyboardType="numeric"
            style={{ backgroundColor: '#ffffff', fontWeight: '600', alignSelf: 'center', padding: 10, fontSize: 20, height: 55, width: '10%', borderRadius: 10, borderWidth: 0.5, borderColor: 'grey' }}
            onChangeText={(val) => this.setState({ otp1: val })}
          />
          <TextInput
            maxLength={1}
            keyboardType="numeric"
            style={{ backgroundColor: '#ffffff', fontWeight: '600', alignSelf: 'center', padding: 10, fontSize: 20, height: 55, width: '10%', borderRadius: 10, borderWidth: 0.5, borderColor: 'grey' }}
            onChangeText={(val) => this.setState({ otp2: val })}
          />
          <TextInput
            maxLength={1}
            keyboardType="numeric"
            style={{ backgroundColor: '#ffffff', fontWeight: '600', alignSelf: 'center', padding: 10, fontSize: 20, height: 55, width: '10%', borderRadius: 10, borderWidth: 0.5, borderColor: 'grey' }}
            onChangeText={(val) => this.setState({ otp3: val })}
          />
          <TextInput
            maxLength={1}
            keyboardType="numeric"
            style={{ backgroundColor: '#ffffff', fontWeight: '600', alignSelf: 'center', padding: 10, fontSize: 20, height: 55, width: '10%', borderRadius: 10, borderWidth: 0.5, borderColor: 'grey' }}
            onChangeText={(val) => this.setState({ otp4: val })}
          />
          <TextInput
            maxLength={1}
            keyboardType="numeric"
            style={{ backgroundColor: '#ffffff', fontWeight: '600', alignSelf: 'center', padding: 10, fontSize: 20, height: 55, width: '10%', borderRadius: 10, borderWidth: 0.5, borderColor: 'grey' }}
            onChangeText={(val) => this.setState({ otp5: val })}
          />
          <TextInput
            maxLength={1}
            keyboardType="numeric"
            style={{ backgroundColor: '#ffffff', fontWeight: '600', alignSelf: 'center', padding: 10, fontSize: 20, height: 55, width: '10%', borderRadius: 10, borderWidth: 0.5, borderColor: 'grey' }}
            onChangeText={(val) => this.handle(val)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  rect5: {
    width: 34,
    height: 20,
    backgroundColor: "#ffffff",
    borderRadius: 0
  },
  rect6: {
    width: 34,
    height: 4,
    backgroundColor: "rgba(112,112,112,1)",
    borderRadius: 100,
    marginLeft: 6
  },
  rect7: {
    width: 34,
    height: 4,
    backgroundColor: "rgba(112,112,112,1)",
    borderRadius: 100,
    marginLeft: 6
  },
  rect8: {
    width: 34,
    height: 4,
    backgroundColor: "rgba(112,112,112,1)",
    borderRadius: 100,
    marginLeft: 6
  },
  rect9: {
    width: 34,
    height: 4,
    backgroundColor: "rgba(112,112,112,1)",
    borderRadius: 100,
    marginLeft: 6
  },
  rect10: {
    width: 34,
    height: 4,
    backgroundColor: "rgba(112,112,112,1)",
    borderRadius: 100,
    marginLeft: 6
  },
  rect5Row: {
    height: 25,
    flexDirection: "row",
    flex: 1
  }
});
