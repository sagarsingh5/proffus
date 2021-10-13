import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import AppIcon from './widgets/AppIcon';
const circleSize = 10;
const WIDTH = Dimensions.get('window').width;

export default function First() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const slider = React.useRef(null);
  const scrollX = React.useRef(new Animated.Value(0)).current;

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
    <View style={styles.container}>
      <Animated.ScrollView
        showsHorizontalScrollIndicator={false}
        ref={slider}
        pagingEnabled
        scrollEventThrottle={16}
        horizontal
        onScrollToIndexFailed={info => {
          const wait = new Promise(resolve => setTimeout(resolve, 500));
          wait.then(() => {
            scrollX.current?.scrollToIndex({
              index: index,
              animated: true,
            });
          });
        }}
        onMomentumScrollEnd={v => {
          const index = Math.round(v.nativeEvent.contentOffset.x / WIDTH);
          setCurrentIndex(index);
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}>
        {data.map((card, i) => (
          <View key={i} style={styles.image}>
            <Image
              source={card.image}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        ))}
      </Animated.ScrollView>
      <View style={styles.footer}>
        {data.map((card, i) => (
          <View
            key={i}
            style={[
              styles.circle,
              {backgroundColor: currentIndex === i ? 'red' : 'transparent'},
            ]}
          />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // height: 170,
    width: '100%',
    // backgroundColor: 'red',
    paddingVertical: 20,
  },
  image: {
    height: 190,
    width: WIDTH - 40,
    borderRadius: 20,
  },
  footer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    height: circleSize,
    width: circleSize,
    borderRadius: circleSize / 2,
    backgroundColor: 'darkgreen',
    margin: 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'darkgreen',
  },
});
