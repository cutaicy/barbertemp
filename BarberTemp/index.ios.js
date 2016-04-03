/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
var Authenticate = require('./MainComponents/Welcome/Authenticate');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
  StatusBar,

} from 'react-native';


class BarberTemp extends Component {
  renderScene(route, navigator) {
    var Component = route.component;
    return(
      <Component
        navigator = {navigator}
        props = {route.props}/>
    )
  }

  render() {
    StatusBar.setHidden
    return (
      <Navigator
        initialRoute = {{component: Authenticate}}
        renderScene={this.renderScene}
        configureScene={(route) => {
        if (route.sceneConfig) {
          return route.sceneConfig;
        }
        return Navigator.SceneConfigs.FloatFromRight;
      }} />

    );
  }
}

AppRegistry.registerComponent('BarberTemp', () => BarberTemp);
