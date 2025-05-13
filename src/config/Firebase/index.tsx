import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDYKk35g0dC6qDSGgSTjmaBoDTlH-25pRw',
  authDomain: 'mobileapps-10c75.firebaseapp.com',
  databaseURL: 'https://mobileapps-10c75-default-rtdb.firebaseio.com',
  projectId: 'mobileapps-10c75',
  storageBucket: 'mobileapps-10c75.firebasestorage.app',
  messagingSenderId: '88569360254',
  appId: '1:88569360254:android:98867f3526b160aed28d2f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;
