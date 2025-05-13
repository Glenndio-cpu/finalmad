import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Logo1 } from '../../assets/icon';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Langsung definisikan RootStackParamList di sini
type RootStackParamList = {
  SplashScreen: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
};

type SplashScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SplashScreen'>;
};

const SplashScreen = ({ navigation }: SplashScreenProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Logo1 />
      <Text style={styles.title}>Italianoo's Food</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ab8a54',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
});
