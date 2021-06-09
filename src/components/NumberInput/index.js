import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

const NumberInput = ({placeholder, label, footNote, style}) => {
  return (
    <View style={{width: 400}}>
      <View style={styles.inputBox}>
        <View style={styles.countryCode}>
          <Text>IN +91</Text>
        </View>
        <TextInput style={[styles.input, style]} placeholder={placeholder} />
      </View>
      <Text style={styles.footNote}>{footNote}</Text>
    </View>
  );
};

export default NumberInput;
