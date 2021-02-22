import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Gap = ({width, height}) => {
  return <View style={styles.page(width, height)}></View>;
};

export default Gap;

const styles = StyleSheet.create({
  page: (width, height) => ({
    width: width,
    height: height,
  }),
});
