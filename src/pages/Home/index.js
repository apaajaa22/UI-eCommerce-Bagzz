import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList, Image, ScrollView, StyleSheet, View} from 'react-native';
import {
  DummyItem1,
  DummyItem2,
  DummyItem3,
  DummyItem4,
  ILBanner1,
} from '../../assets';
import {Gap, Header, ItemList} from '../../components';

const DATA = [
  {
    id: 1,
    title: 'Artsy',
    image: DummyItem1,
  },
  {
    id: 2,
    title: 'Berkely',
    image: DummyItem2,
  },
  {
    id: 3,
    title: 'Capucinus',
    image: DummyItem3,
  },
  {
    id: 4,
    title: 'Monogram',
    image: DummyItem4,
  },
  {
    id: 11,
    title: 'Artsy',
    image: DummyItem1,
  },
  {
    id: 22,
    title: 'Berkely',
    image: DummyItem2,
  },
  {
    id: 33,
    title: 'Capucinus',
    image: DummyItem3,
  },
  {
    id: 44,
    title: 'Monogram',
    image: DummyItem4,
  },
];
const renderItem = ({item}) => (
  <ItemList title={item.title} image={item.image} />
);
const Home = () => {
  return (
    <View style={styles.page}>
      <Header />
      <Gap height={28} />
      <Image source={ILBanner1} style={styles.image} />
      <Gap height={10} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 12,
    paddingTop: 19,
    backgroundColor: 'white',
    flex: 1,
  },
  image: {
    width: '100%',
    height: 195,
    alignItems: 'center',
    borderRadius: 8,
  },
  containerImage: {
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});
