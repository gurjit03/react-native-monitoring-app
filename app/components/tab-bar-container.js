import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import StatusScreen from './status-screen.js';

const TabBarContainer = (props) => (
  <ScrollableTabView tabBarPosition="bottom">
      <StatusScreen tabLabel="Service Up" isUp={true} lastUpTime={new Date().getTime()}/>
      <StatusScreen tabLabel="Service Down" isUp={false} lastUpTime={new Date().getTime()}/>
  </ScrollableTabView>
)

export default TabBarContainer;
