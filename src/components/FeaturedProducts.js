import * as React from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import BatchedBridge from 'react-native/Libraries/BatchedBridge/BatchedBridge';
import AppIcon from './widgets/AppIcon';

export default function FeaturedProducts({header}) {
  const data = [
    {
      id: 1,
      image: require('../assets/images/cephalgoBottle.png'),
      header: 'Cephalgo',
      subHeader:
        'Nulla velit nisi dolor non amet irure qui ut sint anim qui reprehenderit. Quis adipisicing quis nisi pariatur',
      amount: 214,
      capsules: 40,
    },
    {
      id: 2,
      image: require('../assets/images/stressBottle.png'),
      header: 'Joint Care',
      subHeader:
        'Nulla velit nisi dolor non amet irure qui ut sint anim qui reprehenderit. Quis adipisicing quis nisi pariatur',
      amount: 850,
      capsules: 40,
    },
    {
      id: 3,
      image: require('../assets/images/immuneBottle.png'),
      header: 'Joint Care',
      subHeader:
        'Nulla velit nisi dolor non amet irure qui ut sint anim qui reprehenderit. Quis adipisicing quis nisi pariatur',
      amount: 2500,
      capsules: 40,
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{header}</Text>
      <View>
        {data.map((card, index) => (
          <ImageBackground
            // resizeMode="cover"
            source={require('../assets/images/leafBoth.png')}
            key={card.id}
            style={[styles.card]}>
            <View>
              <AppIcon source={card.image} style={styles.image} />
              <Text style={styles.capsules}>{card.capsules} capsules</Text>
            </View>
            <View style={styles.vr} />
            <View style={styles.content}>
              <Text style={styles.cardHeader}>{card.header}</Text>
              <Text style={styles.cardSubHeader}>{card.subHeader}</Text>
              <Text style={styles.amount}>₹ {card.amount}.00</Text>
              <View style={styles.hr} />
              <View style={styles.cardFooter}>
                <Text style={styles.cart}>Add to cart</Text>
                <AppIcon
                  size={20}
                  source={require('../assets/images/bi_share-fill.png')}
                />
              </View>
            </View>
          </ImageBackground>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
  },
  headerText: {
    fontSize: 20,
    marginVertical: 40,
    fontWeight: '600',
  },
  card: {
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    borderRadius: 10,
    // overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  image: {
    height: 130,
    width: 70,
  },
  content: {
    width: '70%',
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: '600',
  },
  cardSubHeader: {
    fontSize: 13,
  },
  amount: {
    fontSize: 16,
    marginVertical: 10,
  },
  hr: {
    height: 1,
    width: '100%',
    backgroundColor: 'red',
  },
  vr: {
    height: '100%',
    width: 1,
    backgroundColor: 'red',
    marginHorizontal: 15,
  },
  capsules: {
    fontSize: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  cart: {
    fontSize: 16,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});
