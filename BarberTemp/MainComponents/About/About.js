'use strict';

var NavBar = require('../HelperComponents/NavBar')

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  View,
  ScrollView
} from 'react-native';

class About extends Component {

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


  render() {

    return (
      <View style = {styles.container}>
      <NavBar
        title = 'ABOUT'
        leftButtonType = 'back'
        leftButtonAction = {this.goBack.bind(this)}/>
      <Image style = {{height: 300, width: this.state.visibleWidth}} source = {require('../Global_Constants/Images/profile.jpg')}/>
      <View style = {{flex: 1, paddingTop: 16, marginLeft: 16, marginRight: 16}}>
        <ScrollView>
          <Text style = {{alignSelf:'center', color: '#424143', fontFamily: 'Calibri'}}>
            Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting.
          </Text>
          <Text></Text>
          <Text style = {{alignSelf:'center', color: '#424143', fontFamily: 'Calibri'}}>
            Ought these are balls place mrs their times add she. Taken no great widow spoke of it small. Genius use except son esteem merely her limits. Sons park by do make on. It do oh cottage offered cottage in written. Especially of dissimilar up attachment themselves by interested boisterous. Linen mrs seems men table. Jennings dashwood to quitting marriage bachelor in. On as conviction in of appearance apartments boisterous.
          </Text>
          <Text></Text>
          <Text style = {{textAlign:'right', color: '#424143', fontFamily: 'Calibri', fontSize: 16}}>Bob Watkins</Text>
        </ScrollView>
      </View>
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

module.exports = About;
