'use strict';

var NavBar = require('../HelperComponents/NavBar')

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Schedule extends Component {

  goBack() {
    this.props.navigator.pop()
  }
  render() {

    return (
      <View style = {styles.container}>
      <NavBar
        title = 'SCHEDULE'
        leftButtonType = 'back'
        leftButtonAction = {this.goBack.bind(this)}/>
      <Text>Info here</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white'
  }
});

module.exports = Schedule;
