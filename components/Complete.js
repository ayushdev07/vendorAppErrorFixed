import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

function Complete(props) {
  return (
    <View style={[ props.style]}>
      <TouchableOpacity style={styles.icon1Stack}>
        <FeatherIcon name="arrow-right" style={styles.icon1}></FeatherIcon>
        <View style={styles.rect4}>
          <FeatherIcon name="arrow-right" style={styles.icon2}></FeatherIcon>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  icon1: {
    top: 8,
    left: 9,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  rect4: {
    top: 0,
    width: 60,
    height: 60,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(112,112,112,1)",
    borderStyle: "solid",
    borderRadius: 100,
    left: 0
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 41,
    width: 40,
    marginTop: 8,
    marginLeft: 9
  },
  icon1Stack: {
    width: 60,
    height: 60
  }
});

export default Complete;
