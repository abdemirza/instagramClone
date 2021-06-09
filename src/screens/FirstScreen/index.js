import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import logo from '../../assets/images/instagramLogo.png';
import Button from '../../components/Button';
import Link from '../../components/Link';
import OrBlock from '../../components/OrBlock';
import styles from './styles';

const FirstScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <Button showIcon={true} style={{marginTop: 160}} title="Log In With Facebook" />
      <OrBlock style={{marginTop: 40}} />
      <Link href={'Register'} title="Sign Up With Email or Phone Number" />
    </View>
  );
};

export default FirstScreen;
