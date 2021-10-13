import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return <HomeScreen />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
