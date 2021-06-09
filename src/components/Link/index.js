import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';

const Link = ({title, style, href}) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      disabled={false}
      onPress={() => navigation.navigate(href)}>
      <Text style={[styles.text, style]}>{title}</Text>
    </TouchableWithoutFeedback>
  );
};

export default Link;
