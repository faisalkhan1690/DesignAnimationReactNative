import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeComponent from './src/HomeComponent'
import ProfileComponent from './src/ProfileComponent'



const AppNavigator = createStackNavigator({
  HomeComponent: {
    screen: HomeComponent,
    navigationOptions: {
      header: null 
    }
  },
  ProfileComponent: {
    screen: ProfileComponent,
    navigationOptions: {
      header: null 
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}