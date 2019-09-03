import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import SearchPage from './views/SearchPage'


const App = createStackNavigator({
  Home: {
    screen: SearchPage,
    navigationOptions: () => ({
      title: 'Property Finder'
    })
  },
})

const AppContainer = createAppContainer(App);

export default AppContainer;
