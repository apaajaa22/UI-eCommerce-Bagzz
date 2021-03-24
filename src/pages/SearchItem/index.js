import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcClose} from '../../assets';
import {Gap, Header} from '../../components';

const SearchItem = () => {
  return (
    <View style={styles.page}>
      <Header />
      <Gap height={20} />
      <TouchableOpacity style={styles.logo}>
        <IcClose />
      </TouchableOpacity>
      <TextInput placeholder="Type hre to search" style={styles.input} />
    </View>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  page: {
    paddingTop: 19,
    paddingHorizontal: 12,
    backgroundColor: 'white',
    flex: 1,
  },
  logo: {alignItems: 'flex-end'},
  input: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginHorizontal: 15,
    fontSize: 18,
  },
});
