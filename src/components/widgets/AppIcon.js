import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function AppIcon({source, size, onPress, style}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {height: size, width: size}, style]}>
      <Image style={styles.image} source={source} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {},
  image: {
    height: '100%',
    width: '100%',
  },
});
