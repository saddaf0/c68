
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { creatBottomTabNavigator } from 'react-navigation-tabs';

import BookTransitionScreen from './screens/BookTransitionScreen';
import SearchScreen from './screens/searchScreen'

export default class App extends React.Component {
  render() {
    return(
    <AppContainer />
    )
  }
}
const TabNavigator = creatBottomTabNavigator({
  BookTransition: { screen: BookTransitionScreen },
  Search: { screen: SearchScreen }
})
const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
