import * as React from 'react';
import {Text, View, StyleSheet, Platform, SafeAreaView} from 'react-native';
import AppIcon from './widgets/AppIcon';

export default function Header() {
  return (
    <View style={styles.header}>
      <SafeAreaView style={styles.headerContainer}>
        <AppIcon
          source={require('../assets/images/image1.png')}
          style={styles.appIcon}
        />
        <AppIcon source={require('../assets/images/menu_24px.png')} size={50} />
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: Platform.OS === 'ios' ? 120 : 70,
    elevation: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    backgroundColor: 'white',
    paddingHorizontal: 30,
  },
  appIcon: {
    height: 30,
    width: 150,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
