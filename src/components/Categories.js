import * as React from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import AppIcon from './widgets/AppIcon';

export default function Categories() {
  const data = [
    {
      id: 1,
      image: require('../assets/images/joints.png'),
      header: 'Joint Care',
      subHeader:
        'Nulla velit nisi dolor non amet irure qui ut sint anim qui reprehenderit. Quis adipisicing quis nisi pariatur',
    },
    {
      id: 2,
      image: require('../assets/images/kidney.png'),
      header: 'Joint Care',
      subHeader:
        'Nulla velit nisi dolor non amet irure qui ut sint anim qui reprehenderit. Quis adipisicing quis nisi pariatur',
    },
    {
      id: 3,
      image: require('../assets/images/immunity.png'),
      header: 'Joint Care',
      subHeader:
        'Nulla velit nisi dolor non amet irure qui ut sint anim qui reprehenderit. Quis adipisicing quis nisi pariatur',
    },
    {
      id: 4,
      image: require('../assets/images/liver.png'),
      header: 'Joint Care',
      subHeader:
        'Nulla velit nisi dolor non amet irure qui ut sint anim qui reprehenderit. Quis adipisicing quis nisi pariatur',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 18, fontWeight: '600'}}>Categories</Text>
        <Text style={{fontSize: 18}}>View All</Text>
      </View>
      {data.map((card, index) => (
        <ImageBackground
          source={
            index % 2 !== 0
              ? require('../assets/images/leafRight.png')
              : require('../assets/images/leafLeft.png')
          }
          key={card.id}
          style={[
            styles.card,
            {
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              borderTopLeftRadius: index % 2 === 0 ? 50 : 0,
              borderBottomLeftRadius: index % 2 === 0 ? 50 : 0,
              borderTopRightRadius: index % 2 !== 0 ? 50 : 0,
              borderBottomRightRadius: index % 2 !== 0 ? 50 : 0,
            },
          ]}>
          <AppIcon source={card.image} size={100} />
          <View
            style={[
              styles.cotent,
              {
                marginRight: index % 2 === 0 ? 15 : 0,
                marginLeft: index % 2 === 0 ? 15 : 0,
              },
            ]}>
            <Text style={styles.cardHeader}>{card.header}</Text>
            <Text style={styles.cardSubHeader}>{card.subHeader}</Text>
            <Text style={styles.explore}>Explore</Text>
          </View>
        </ImageBackground>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  card: {
    padding: 10,
    backgroundColor: '#fff',
    elevation: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    marginVertical: 10,
  },
  cotent: {
    width: '65%',
  },
  explore: {
    alignSelf: 'flex-end',
    fontSize: 18,
    letterSpacing: 3,
    marginTop: 10,
    marginRight: 20,
  },
  cardHeader: {
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 3,
    textTransform: 'uppercase',
  },
  cardSubHeader: {
    fontSize: 12,
  },
});
