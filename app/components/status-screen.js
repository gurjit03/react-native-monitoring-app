import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import moment from 'moment';

import StatusIndicator from './status-indicator';
console.log(StatusIndicator);

const StatusScreen = (props) => {
  console.log(props.lastUpTime);
  const lastUpTime = props.isUp ? null : <Text style={{fontSize: 20}}>last Up Time is {moment(props.lastUpTime).fromNow()}</Text>
  return (
    <View style={styles.container}>
      <StatusIndicator isUp={props.isUp} />
      <Text style={styles.serviceText}>{props.isUp ? 'Service Up' : 'Service Down'}</Text>
      {lastUpTime}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: '100%'
  },
  serviceText: {
    marginTop: 60,
    fontSize: 30
  }
});

export default StatusScreen;
