import * as React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import AppIcon from './widgets/AppIcon';

export default function CardContainer({header}) {
  const data =
    header !== 'Our Media Associates'
      ? [
          {
            id: 1,
            image: require('../assets/images/list_ol.png'),
            text: 'My Orders',
          },
          {
            id: 2,
            image: require('../assets/images/delivery.png'),
            text: 'Track Order',
          },
          {
            id: 3,
            image: require('../assets/images/discount.png'),
            text: 'Best Offers',
          },
          {
            id: 4,
            image: require('../assets/images/chat.png'),
            text: 'Chat',
          },
          {
            id: 5,
            image: require('../assets/images/refer.png'),
            text: 'Refer Patient',
          },
          {
            id: 6,
            image: require('../assets/images/pay.png'),
            text: 'Make Payment',
          },
        ]
      : [
          {
            id: 1,
            image: require('../assets/images/cnn.png'),
            // text: 'My Orders',
          },
          {
            id: 2,
            image: require('../assets/images/aajtak.png'),
            // text: 'Track Order',
          },
          {
            id: 3,
            image: require('../assets/images/tez.png'),
            // text: 'Best Offers',
          },
          {
            id: 4,
            image: require('../assets/images/disha.png'),
            // text: 'Chat',
          },
          {
            id: 5,
            image: require('../assets/images/jus.png'),
            // text: 'Refer Patient',
          },
          {
            id: 6,
            image: require('../assets/images/care.png'),
            // text: 'Make Payment',
          },
        ];
  // const data1 =
  return (
    <>
      <View>{header && <Text style={styles.header}>{header}</Text>}</View>
      <View style={styles.container}>
        {data.map((card, index) => (
          <View
            key={card.id}
            style={[
              styles.card,
              {
                marginLeft: index === 1 || 4 ? 4 : 0,
                marginRight: index === 3 || 6 ? 4 : 0,
                backgroundColor:
                  header === 'Our Media Associates'
                    ? 'rgba(144,	238,	144,0.4)'
                    : 'darkgreen',
                height: header === 'Our Media Associates' ? 120 : 150,
              },
            ]}>
            <AppIcon
              source={card.image}
              size={header !== 'Our Media Associates' ? 60 : 80}
            />
            {card.text && <Text style={styles.text}>{card.text}</Text>}
          </View>
        ))}
        {/* <View style={styles.card}>
            <AppIcon source={item.image} size={50} />
          </View> */}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#0fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 60,
  },
  card: {
    width: '31%',
    // margin: 4,
    marginVertical: 4,
    alignItems: 'center',
    paddingVertical: 10,
    // paddingHorizontal: 10,
    borderRadius: 20,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    margin: 15,
    textAlign: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: '500',
  },
});
