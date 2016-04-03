// pass the following props:
  // * navigator
  // * title
  // * leftButtonType
  // * leftButtonAction
  // * rightButtonType
  // * rightButtonAction

'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

class NavBar extends Component {

  handlePress() {
    this.props.leftButtonAction();
  }

  openMenu() {
    console.log('open menu')
  }

  renderLeftButton(type) {
    switch(type) {
      case 'back':
      return(
        <Image style = {{height: 30, width: 30}} source = {require('../../Assets/NavBar/back.png')} />
      )
      case 'menu':
      return(
        <Image style = {{height: 30, width: 30}} source = {require('../../Assets/NavBar/menu.png')} />
      )
      case 'cancel':
      return(
        <Image style = {{height: 30, width: 30}} source = {require('../../Assets/NavBar/cancel.png')} />
      )
    }
  }
  renderRightButton(type) {
    switch(type) {
      case 'save':
      return(
        <Image style = {{height: 30, width: 30}} source = {require('../../Assets/NavBar/save.png')} />
      )
      case 'add':
      return(
        <View style = {styles.rightButton}>
          <Image style = {{height: 30, width: 30}} source = {require('../../Assets/NavBar/add.png')} />
        </View>
      )
    }
  }

  render() {
    return (
      <View style = {styles.container}>
        <TouchableHighlight underlayColor = 'transparent' onPress = {this.handlePress.bind(this)} style = {{flex:1}}>
          <View style = {{flex:1, marginLeft: 16, alignItems: 'center', justifyContent: 'center'}}>
            {this.renderLeftButton(this.props.leftButtonType)}
          </View>
        </TouchableHighlight>

        <View style = {{alignItems: 'center', flex: 8, justifyContent: 'center'}}>
    		  <Text style = {{color: 'white', textAlign: 'center', fontFamily: 'Calibri', fontSize: 16}}>{this.props.title}</Text>
        </View>

          <TouchableHighlight underlayColor = 'transparent' onPress = {this.props.rightButtonAction} style = {{flex:1}}>
            <View style = {{flex:1, marginRight: 16, alignItems: 'center', justifyContent: 'center'}}>
              {this.renderRightButton(this.props.rightButtonType)}
            </View>
          </TouchableHighlight>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 58,
    flexDirection: 'row'
  },

});

module.exports = NavBar;
