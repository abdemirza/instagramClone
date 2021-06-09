import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const OrBlock = ({style}) => {
  return (
    <View style={[styles.orContainer,style]}>
      <View style={styles.line} />
      <Text style={{padding: 10, color: '#8c8c8c'}}>OR</Text>
      <View style={styles.line} />
    </View>
  );
};

export default OrBlock;
