import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({title, link}) => {
  if (link) {
    return (
      <TouchableOpacity style={styles.page(link)}>
        <Text style={styles.text(link)}>{title}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.page(link)} activeOpacity={0.6}>
      <Text style={styles.text(link)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  page: (link) => ({
    backgroundColor: link ? 'white' : 'black',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  text: (link) => ({
    color: link ? 'black' : 'white',
    borderBottomWidth: link ? 1 : 0,
  }),
});
