import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Basket, Home, LikeItem, SearchItem, SplashScreen} from '../pages';
import CustomTab from '../components/CustomTab';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTab = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTab {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="SearchItem" component={SearchItem} />
      <Tab.Screen name="LikeItem" component={LikeItem} />
      <Tab.Screen name="Basket" component={Basket} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyTab"
        component={MyTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
