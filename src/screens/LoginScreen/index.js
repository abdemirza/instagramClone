import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import styles from './styles';
import logo from '../../assets/images/instagramLogo.png';
import FAicon from 'react-native-vector-icons/FontAwesome5';
import OrBlock from '../../components/OrBlock';
import Link from '../../components/Link';
import Button from '../../components/Button';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (username.length > 0 && password.length > 0) setDisabled(false);
    else setDisabled(true);
  }, [username, password]);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image style={styles.image} source={logo} />
        <TextInput
          placeholder={'Phone number, email address or username'}
          style={styles.input}
          onChangeText={value => {
            setUsername(value);
          }}
        />
        <TextInput
          placeholder={'Password'}
          style={styles.input}
          secureTextEntry
          onChangeText={value => {
            setPassword(value);
          }}
        />
        <Button
          href={'Home'}
          disabled={disabled}
          style={{
            width: 350,
            backgroundColor: disabled ? '#729fc8' : '#0275d8',
          }}
          title="Log In"
        />

        <View style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Forgotten your login details?</Text>
          <TouchableWithoutFeedback
            onPress={() => console.log('Forgot Button Clicked')}>
            <Text style={styles.forgotButton}>Get help with logging in.</Text>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.loginFacebook}>
          <OrBlock />
          <View style={styles.buttonContainer}>
            <FAicon style={styles.icon} name="facebook" size={23} />
            <Text style={styles.buttonText}>Log In With Facebook</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <Link
          style={{marginLeft: 5, color: 'black'}}
          title="Sign Up"
          href={'Register'}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
