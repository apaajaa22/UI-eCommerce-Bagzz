import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MyTab');
    }, 2000);
  }, [navigation]);
  return (
    <View style={styles.page}>
      <View style={styles.wrapperTop}>
        <Text style={styles.title}>Bagzz</Text>
        <Text style={styles.subtitle}>New Daily Style</Text>
      </View>
      <View style={styles.wrapperBase}>
        <Text style={styles.titleBase}>UI Created by</Text>
        <Text style={styles.subtitleBase}>Rahadian Reza R</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '75%',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 36,
    fontFamily: 'PlayfairDisplay-Bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'PlayfairDisplay-SemiBold',
    textAlign: 'center',
  },
  wrapperTop: {flex: 1},
  wrapperBase: {paddingBottom: 20},
  titleBase: {
    fontSize: 14,
    fontFamily: 'PlayfairDisplay-Regular',
    marginBottom: 10,
    textAlign: 'center',
    color: 'grey',
  },
  subtitleBase: {
    fontSize: 14,
    fontFamily: 'PlayfairDisplay-Regular',
    textAlign: 'center',
  },
});
