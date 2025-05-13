// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/pages/SplashScreen';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import HomePage from './src/pages/HomePage';
import AddTransaction from './src/pages/AddTransaction';
import './src/config/Firebase';
import FlashMessage from 'react-native-flash-message';

// 1) Define your routes and params
export type RootStackParamList = {
  Splash: undefined;
  SignIn: undefined;
  SignUp: undefined;
  HomePage: { uid: string };
  AddTransaction: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => (
  <>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="AddTransaction" component={AddTransaction} />
      </Stack.Navigator>
    </NavigationContainer>
    <FlashMessage position="top" />
  </>
);

export default App;
