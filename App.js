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
        return ( <WelcomePage navigator = {navigator} />);
      case 'ListaFases':
        return( <ListaFases navigator = {navigator} /> );
    }
  }
  
}

class WelcomePage extends Component{
  render(){
    return(
      <View style={Styles.container}>
        <Text>Bem Vindo!</Text>
        <Text onPress={ () => this.props.navigator.push({id: 'ListaFases'})}>Fases!</Text>
      </View>
    );
  }
}

class ListaFases extends Component{
  render(){
    return(
      <View>
        <Text>Jardineira</Text>
        <Text>Sla oq</Text>
        <Text>Batata doce</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
  },
})