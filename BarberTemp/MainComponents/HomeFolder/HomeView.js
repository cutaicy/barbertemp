'use strict';
var Communications = require('react-native-communications');

var NavBar = require('../HelperComponents/NavBar')
var Login = require('../Login/Login')
var About = require('../About/About')
// var Facebook = require('../Facebook/Facebook')
// var Instagram = require('../Instagram/Instagram')
// var Twitter = require('../Twitter/Twitter')
var Settings = require('../Settings/Settings')
var Gallery = require('../Gallery/Gallery')
var Schedule = require('../Schedule/Schedule')

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  Dimensions,
  View,
  Image
} from 'react-native';

class HomeView extends Component {

  constructor (props) {
    super(props)
    this.state = {
      visibleHeight: Dimensions.get('window').height,
      visibleWidth: Dimensions.get('window').width
    }
  }

  goBack() {
    this.props.navigator.pop()
  }

  goToView(component) {
    this.props.navigator.push({
      component: component
    })
  }
  renderButton(object) {
    return(
      <TouchableHighlight
        underlayColor = 'transparent'
        onPress={object.method}>
          <View style = {{flex: 1, justifyContent: 'center', width:this.state.visibleWidth/3, height:this.state.visibleWidth/3}}>
            <Image style = {{height: 75, width: 75, alignSelf: 'center'}} source = {object.icon}/>
            <Text style = {{alignSelf:'center', color: '#424143', fontFamily: 'Calibri'}}>{object.text}</Text>
          </View>
      </TouchableHighlight>
    )
  }

  render() {
    var aboutButtonObject = {
      icon: require('../../Assets/HomeIcons/about.png'),
      text: 'ABOUT',
      method: ()=>this.goToView(About)
    }
    var contactButtonObject = {
      icon: require('../../Assets/HomeIcons/contact.png'),
      text: 'CONTACT',
      method: () => Communications.phonecall('0123456789', true)
    }
    var textButtonObject = {
      icon: require('../../Assets/HomeIcons/text.png'),
      text: 'TEXT',
      method: () => Communications.text('0123456789')
    }
    var facebookButtonObject = {
      icon: require('../../Assets/HomeIcons/facebook.png'),
      text: 'FACEBOOK',
      method: () => Communications.web('https://facebook.com')
    }
    var twitterButtonObject = {
      icon: require('../../Assets/HomeIcons/twitter.png'),
      text: 'TWITTER',
      method: () => Communications.web('https://twitter.com')
    }
    var instagramButtonObject = {
      icon: require('../../Assets/HomeIcons/instagram.png'),
      text: 'INSTAGRAM',
      method: () => Communications.web('https://instagram.com')
    }
    var settingsButtonObject = {
      icon: require('../../Assets/HomeIcons/settings.png'),
      text: 'SETTINGS',
      method: ()=>this.goToView(Settings)
    }
    var galleryButtonObject = {
      icon: require('../../Assets/HomeIcons/gallery.png'),
      text: 'GALLERY',
      method: ()=>this.goToView(Gallery)
    }
    var scheduleButtonObject = {
      icon: require('../../Assets/HomeIcons/schedule.png'),
      text: 'SCHEDULE',
      method: ()=>this.goToView(Schedule)
    }

    return (
      <View style = {styles.container}>
      <Image style = {{height: 300, width: this.state.visibleWidth}} source = {require('../Global_Constants/Images/bkg2.jpg')}>
        <View style = {{flex: 1, backgroundColor: "black", opacity: 0.7}}/>
        <View style = {{position: 'absolute', top:0, bottom:0,left:0, right:0}}>
          <View style = {{flex: 1, paddingTop: 10}}>
            <Image style = {{height: 180, width: 180, alignSelf: 'center'}} source = {require('../Global_Constants/Images/logo.png')}/>
            <Text style = {{backgroundColor: 'transparent', color: 'white', textAlign: 'center', fontSize: 40, fontFamily: 'Calibri'}}>BOB WATKINS</Text>
            <Text style = {{backgroundColor: 'transparent', color: '#727175', textAlign: 'center', fontSize: 16, fontFamily: 'Calibri'}}>MR. BARBER CUTZ</Text>
            <Text style = {{backgroundColor: 'transparent', color: '#727175', textAlign: 'center', fontSize: 16, fontFamily: 'Calibri'}}>1234 PARKWAY ST, EMERYVILLE, CA 94608</Text>
          </View>
        </View>
      </Image>
      <View style={styles.list}>
        {this.renderButton(aboutButtonObject)}
        {this.renderButton(contactButtonObject)}
        {this.renderButton(textButtonObject)}
        {this.renderButton(facebookButtonObject)}
        {this.renderButton(twitterButtonObject)}
        {this.renderButton(instagramButtonObject)}
        {this.renderButton(settingsButtonObject)}
        {this.renderButton(galleryButtonObject)}
        {this.renderButton(scheduleButtonObject)}
      </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white'
  },

  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: 100,
    height: 100
  }
});

module.exports = HomeView;
