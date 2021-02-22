import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUser, IcMenu} from '../assets';

const Header = () => {
  return (
    <View style={styles.page}>
      <IcMenu />
      <Text style={styles.title}>bagzz</Text>
      <Image source={DummyUser} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: 'PlayfairDisplay-Bold',
    flex: 1,
    marginLeft: 18,
  },
});
