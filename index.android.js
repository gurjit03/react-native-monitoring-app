/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import TabBarContainer from './app/components/tab-bar-container.js';

export default class myFirstProject extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isUp : false,
      lastUpTime : new Date(2012,7,4)
    }
  }
  render() {
    return (
      <TabBarContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: '100%',
    height: '100%'
  }
});

AppRegistry.registerComponent('myFirstProject', () => myFirstProject);
