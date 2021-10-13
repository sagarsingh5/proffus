import * as React from 'react';
import {Text, View, StyleSheet, ScrollView, LogBox, Image} from 'react-native';
import CardContainer from './CardContainer';
import Categories from './Categories';
import FeaturedProducts from './FeaturedProducts';
import First from './First';
import AppIcon from './widgets/AppIcon';

export default function Body() {
  LogBox.ignoreAllLogs();
  const data = [
    {
      id: 1,
      image: require('../assets/images/ayurveda.png'),
      // text: 'My Orders',
    },
    {
      id: 2,
      image: require('../assets/images/giloy.png'),
      // text: 'Track Order',
    },
    {
      id: 3,
      image: require('../assets/images/honey.png'),
      // text: 'Best Offers',
    },
  ];
  return (
    <>
      <AppIcon
        source={require('../assets/images/bag.png')}
        style={styles.fly}
        size={60}
      />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Hello There,</Text>
          <Text style={styles.subHeader}>How to serce</Text>
          <First />

          <CardContainer />
          <Categories />
          <FeaturedProducts header="Featured Products" />
          <FeaturedProducts header="Most Purchased Produts" />
          <CardContainer header="Our Media Associates" />
          <Text style={styles.footer}>
            © ND Care Nirogram Pvt. Ltd. - All Rights Reserved
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 20,
    color: 'blue',
  },
  subHeader: {
    color: 'blue',
  },
  footer: {
    marginVertical: 20,
    fontSize: 12,
    alignSelf: 'flex-end',
  },
  fly: {
    position: 'absolute',
    bottom: 45,
    right: 20,
    backgroundColor: 'darkgreen',
    padding: 10,
    borderRadius: 30,
    zIndex: 1,
  },
  image: {
    height: 180,
    width: '100%',
    borderRadius: 20,
    marginRight: 10,
  },
});
