import React,{ Component } from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import { Icon } from 'native-base';
import Images from '@assets/images';
import DefaultHeader from './app/component/DefaultHeader'

class HomeScreen extends Component {

  // navigationOptions 코드 추가

  render() {
    return (
      <View>
        <Text>MainScreen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    
  },
},
  {
    initialRouteName: 'Home',
    headerLayoutPreset: 'center',
    defaultNavigationOptions:{
      header:DefaultHeader,
      title: 'EPL',

    },
  }
);

const App = createAppContainer(AppNavigator)

export default App;