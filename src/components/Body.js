// import {doc, getDoc} from '@react-native-firebase/firestore';

import * as React from 'react';
import {Text, View, StyleSheet, ScrollView, LogBox, Image} from 'react-native';
import {data} from '../config/firebase';
import CardContainer from './CardContainer';
import Categories from './Categories';
import FeaturedProducts from './FeaturedProducts';
import First from './First';
import AppIcon from './widgets/AppIcon';

export default function Body() {
  const [name, setName] = React.useState('');
  // React.useEffect(() => {
  //   getData();
  // }, []);
  // const getData = async () => {
  //   try {
  //     const docRef = doc('Data', 'data');
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       console.log('Document data:', docSnap.data());
  //     } else {
  //       // doc.data() will be undefined in this case
  //       console.log('No such document!');
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
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
          <Text style={styles.subHeader}>How to are</Text>
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
