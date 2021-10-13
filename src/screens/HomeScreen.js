import * as React from 'react';
import {Text, View, StyleSheet, Platform, SafeAreaView} from 'react-native';
import AppIcon from '../components/widgets/AppIcon';
import Header from '../components/Header';
import Body from '../components/Body';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
