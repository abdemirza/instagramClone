import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NumberInput from '../../components/NumberInput';
import Button from '../../components/Button';
import styles from './styles';
import Input from '../../components/Input';
import Link from '../../components/Link';

const RegisterScreen = () => {
  const [phoneInput, setPhoneInput] = useState(false);
  return (
    <View style={styles.container}>
      <MaterialIcons name="person-outline" style={styles.icon} size={100} />
      <View style={styles.header}>
        <View style={styles.tags}>
          <TouchableWithoutFeedback onPress={() => setPhoneInput(true)}>
            <View style={[{alignItems: 'center'}]}>
              <Text style={{color: phoneInput ? 'black' : 'grey'}}>
                PHONE NUMBER
              </Text>
              <View
                style={[
                  styles.line,
                  {borderBottomColor: phoneInput ? 'black' : 'grey'},
                ]}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => setPhoneInput(false)}>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: phoneInput ? 'grey' : 'black'}}>
                EMAIL ADDRESS
              </Text>
              <View
                style={[
                  styles.line,
                  {borderBottomColor: phoneInput ? 'grey' : 'black'},
                ]}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      {phoneInput ? (
        <NumberInput
          footNote="You may receive SMS updates from Instagram and can opt out at any time"
          placeholder="Phone number"
        />
      ) : (
        <Input placeholder="Email address" />
      )}
      <Button href={'Home'} showIcon={false} style={{width: 341}} title="Next" />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <Link href={'Login'} style={{marginLeft:5,color:'black'}} title="Log in." />
      </View>
    </View>
  );
};

export default RegisterScreen;
