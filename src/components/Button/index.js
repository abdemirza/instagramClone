import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import FAicon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Button = ({title, showIcon ,style,href ,disabled}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={() => navigation.navigate(href)} >
      <View style={[styles.button, style]}>
        { showIcon && <FAicon style={styles.icon} name="facebook" size={23} />}
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
