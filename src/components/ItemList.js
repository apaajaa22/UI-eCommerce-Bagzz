import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DummyItem1, IcLike_off} from '../assets';

const ItemList = ({title, image}) => {
  return (
    <TouchableOpacity style={styles.page}>
      <Image source={image} style={styles.image} />
      <Text>{title}</Text>
      <Text>Shop Now</Text>
      <View style={styles.like}>
        <IcLike_off />
      </View>
    </TouchableOpacity>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    width: 170,
    height: 210,
    paddingTop: 28,
    marginRight: 13,
    marginBottom: 24,
    flex: 1,
  },
  image: {height: 111, width: 111},
  like: {position: 'absolute', right: 10, top: 10},
});
