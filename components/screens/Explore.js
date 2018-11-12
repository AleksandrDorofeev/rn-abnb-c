import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Explore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerInput}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerInput: {
    height: 80,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
});

export default Explore;
