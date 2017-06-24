import React, { Component , PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const StatusIndicator = (props) => {
  console.log(props)
  return(
    <View style={[styles.statusContainer, props.isUp && styles.isUpBorderColor]}>
      <Text style={[styles.statusText, props.isUp && styles.isUpTextColor]}>
        {props.isUp ? '✓' : '❌'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  statusContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 20,
    backgroundColor: '#F5FCFF',
    borderColor: 'rgba(232,11,21,1)',
    borderRadius: 200,
    width: 250,
    height: 250

    // backgroundColor: '#F5FCFF',
  },
  statusText: {
    fontSize: 30,
    color: 'rgba(232,11,21,1)'
  },
  isUpBorderColor: {
    borderColor: 'rgba(22,217,21,1)',
  },
  isUpTextColor: {
    color: 'rgba(22,217,21,1)'
  }
});

StatusIndicator.propTypes = {
  isUp : PropTypes.bool.isRequired,
}

export default StatusIndicator;
