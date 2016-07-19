'use strict';

var NavBar = require('../HelperComponents/NavBar')

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  WebView
} from 'react-native';

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state= {
      url: 'www.google.com',
      status: 'No Page Loaded',
      backButtonEnabled: false,
      forwardButtonEnabled: false,
      loading: true,
      scalesPageToFit: true,
    };
  }
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
        <WebView
            style={{
              backgroundColor: 'white',
              height: 200,
            }}
            source={{uri: 'https://www.facebook.com/media/set/?set=a.385715789235.163710.159616034235&type=3'}}
            scalesPageToFit={this.state.scalingEnabled}
          />
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
