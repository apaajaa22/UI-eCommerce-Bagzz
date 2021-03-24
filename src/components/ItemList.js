import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DummyItem1, IcLike_off} from '../assets';

const ItemList = ({title, image}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.page}
      onPress={() => navigation.navigate('itemSelected')}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>Shop Now</Text>
      <TouchableOpacity style={styles.like}>
        <IcLike_off />
      </TouchableOpacity>
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
    marginBottom: 13,
    flex: 1,
    borderRadius: 10,
  },
  image: {height: 111, width: 111},
  like: {position: 'absolute', right: 10, top: 10},
  title: {
    fontSize: 18,
    fontFamily: 'PlayfairDisplay-SemiBold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'PlayfairDisplay-Bold',
    borderBottomWidth: 1,
  },
});
