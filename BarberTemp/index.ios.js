/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
var Authenticate = require('./MainComponents/Welcome/Authenticate');

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('BarberTemp', () => BarberTemp);
