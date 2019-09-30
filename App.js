import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

export default class App extends Component {
  render(){
     return (
        <Navigator initialRoute = {{id: 'WelcomePage'}} 
        renderScene = {this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene(route, navigator){
    switch (route.id) {
      case 'WelcomePage':
        return ( <WelcomePage navigator = {navigator} />)
    }
  }
  
}

class WelcomePage extends Component{
  render(){
    return(
      <View>
        <Text>Bem Vindo!</Text>
      </View>
    );
  }
}


const Styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginLeft: 20,
  },
})