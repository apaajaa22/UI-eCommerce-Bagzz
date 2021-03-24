import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyItemBag1} from '../../assets';
import {Button, Gap, Header} from '../../components';

const itemSelected = () => {
  return (
    <View style={styles.page}>
      <Header />
      <Gap height={33} />
      <View style={styles.wrapper}>
        <View>
          <Image source={DummyItemBag1} style={styles.image} />
        </View>
        <Gap width={21} />
        <View>
          <Text style={styles.title}>Artsy</Text>
          <Gap height={4} />
          <Text style={styles.desc}>wallet with chain</Text>
          <Gap height={4} />
          <Text style={styles.code}>Style #36252 0YK0G 1000</Text>
          <Gap height={9} />
          <Text style={styles.price}>$564</Text>
          <Gap height={15} />
          <View style={styles.container}>
            <Button title="BUY NOW" />
          </View>
          <Gap height={15} />
          <View style={styles.container}>
            <Button title="ADD TO CART" link />
          </View>
        </View>
      </View>
    </View>
  );
};

export default itemSelected;

const styles = StyleSheet.create({
  page: {
    paddingTop: 19,
    paddingHorizontal: 12,
    flex: 1,
    backgroundColor: 'white',
  },
  title: {fontSize: 22, fontFamily: 'PlayfairDisplay-Bold'},
  desc: {fontSize: 12},
  code: {fontSize: 12, color: '#848484'},
  price: {fontSize: 20, fontWeight: 'bold'},

  image: {width: 170, height: 155},
  wrapper: {flexDirection: 'row'},
  container: {
    maxWidth: 97,
  },
});
