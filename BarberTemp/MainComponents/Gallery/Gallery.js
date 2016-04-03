'use strict';

var NavBar = require('../HelperComponents/NavBar')

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Gallery extends Component {

  goBack() {
    this.props.navigator.pop()
  }
  render() {

    return (
      <View style = {styles.container}>
      <NavBar
        title = 'GALLERY'
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

module.exports = Gallery;
