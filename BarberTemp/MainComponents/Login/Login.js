'use strict';

var NavBar = require('../HelperComponents/NavBar')
var Home = require('../HomeFolder/HomeView')

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

class Login extends Component {

  constructor (props) {
    super(props)
    this.state = {
      visibleHeight: Dimensions.get('window').height,
      visibleWidth: Dimensions.get('window').width,
      email: null,
      password: null
    }
  }
  goBack() {
    this.props.navigator.pop()
  }
  goToHome() {
    this.props.navigator.push({
      component: Home
    })
  }
  renderTextBoxes(object){
    return (
      <TextInput
        style={{height: 50, color:'white', fontFamily: 'Calibri', backgroundColor: 'white', opacity: 0.3, padding: 16, marginLeft: 16, marginRight: 16, marginBottom: object.marginBottom}}
        onChangeText={(text) => this.setState({text})}
        value={object.value}
        placeholder = {object.placeholder}/>
    )
  }

  render() {

    var emailObject = {
      placeholder: 'Email',
      value: this.state.email,
      marginBottom: 16
    }
    var passwordObject = {
      placeholder: 'Password',
      value: this.state.password,
      marginBottom: 34
    }

    return (
      <View style = {styles.container}>
      <NavBar
        title = 'LOGIN'
        leftButtonType = 'back'
        leftButtonAction = {this.goBack.bind(this)}/>

        <Image style = {{flex: 1, height: this.state.visibleHeight, width: this.state.visibleWidth, alignSelf: 'center'}} source = {require('../Global_Constants/Images/bkg1.jpg')}>
          <View style = {{flex: 1, backgroundColor: "black", opacity: 0.7}}/>
          <View style = {{position: 'absolute', top:0, bottom:0,left:0, right:0}}>
            <View style = {{flex: 1, marginTop: 68}}>
            {this.renderTextBoxes(emailObject)}
            {this.renderTextBoxes(passwordObject)}
              <TouchableHighlight
                underlayColor = 'transparent'
                onPress={this.goToHome.bind(this)}>
                  <View style = {{flex: 1, borderColor: 'white', borderWidth: 1, padding: 16, marginLeft: 16, marginRight: 16}}>
                    <Text style = {{color: 'white', textAlign: 'center', fontSize: 16, fontFamily: 'Calibri'}}>LOGIN</Text>
                  </View>
              </TouchableHighlight>
              <Text style = {{backgroundColor: 'transparent', color: 'white', textAlign: 'center', fontSize: 14, fontFamily: 'Calibri', marginTop: 34}}>Forgot Password?</Text>
            </View>
          </View>
        </Image>

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

module.exports = Login;
