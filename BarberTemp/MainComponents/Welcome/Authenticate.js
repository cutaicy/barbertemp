'use-strict';

var Login = require('../Login/Login')
var SignUp = require('../SignUp/SignUp')

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TextInput,
  TouchableHighlight,
  ScrollView
} from 'react-native';

class Authenticate extends Component {

  constructor (props) {
    super(props)
    this.state = {
      visibleHeight: Dimensions.get('window').height,
      visibleWidth: Dimensions.get('window').width
    }
  }

  logInUser() {
    this.props.navigator.push({
      component: Login
    })
  }
  signUpUser() {
    this.props.navigator.push({
      component: SignUp
    })
  }

  render() {
    return (
      <ScrollView
        style = {{height: this.state.visibleHeight}}
        scrollEnabled = {false}>
          <Image style = {{flex: 1, height: this.state.visibleHeight, width: this.state.visibleWidth, alignSelf: 'center'}} source = {require('../Global_Constants/Images/bkg1.jpg')}>
            <View style = {{flex: 1, backgroundColor: "black", opacity: 0.7}}/>
            <View style = {{position: 'absolute', top:0, bottom:0,left:0, right:0}}>
              <View style = {{marginTop: 60}}>
                <Image style = {{flex: 1, height: 250, width: 250, alignSelf: 'center'}} source = {require('../Global_Constants/Images/logo.png')}/>
                <Text style = {{color: 'white', textAlign: 'center', fontSize: 24, fontFamily: 'Calibri'}}>
                  Neatness is the most important requirement.
                </Text>
              </View>
              <View style = {{position: 'absolute', bottom: 42, left: 0, right: 0}}>
                <View style = {{flexDirection: 'row', flex: 1,  marginLeft: 16, marginRight: 16, justifyContent: 'space-between'}}>
                  <TouchableHighlight
                    underlayColor = 'transparent' >
                      <View style = {{width: this.state.visibleWidth/2-26, flex: 1, borderColor: 'white', borderWidth: 1, padding: 16,}}>
                        <Text style = {{color: 'white', textAlign: 'center', fontSize: 16, fontFamily: 'Calibri'}}>FACEBOOK LOGIN</Text>
                      </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    underlayColor = 'transparent'
                    onPress={this.signUpUser.bind(this)}>
                      <View style = {{width: this.state.visibleWidth/2-26, flex: 1, borderColor: 'white', borderWidth: 1, padding: 16}}>
                        <Text style = {{color: 'white', textAlign: 'center', fontSize: 16, fontFamily: 'Calibri'}}>SIGN UP</Text>
                      </View>
                  </TouchableHighlight>
                </View>

                  <TouchableHighlight
                    underlayColor = 'transparent'
                    onPress={this.logInUser.bind(this)}>
                      <View style = {{flex: 1, borderColor: 'white', borderWidth: 1, padding: 16, marginLeft: 16, marginRight: 16, marginTop: 24}}>
                        <Text style = {{color: 'white', textAlign: 'center', fontSize: 16, fontFamily: 'Calibri'}}>LOGIN</Text>
                      </View>
                  </TouchableHighlight>
                </View>
            </View>
          </Image>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

module.exports = Authenticate;
