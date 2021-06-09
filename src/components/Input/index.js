import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

const Input = ({placeholder,style}) => {
  return (
    <View>
        <TextInput style={[styles.input,style]} placeholder={placeholder} />
    </View>
  );
};

export default Input;
