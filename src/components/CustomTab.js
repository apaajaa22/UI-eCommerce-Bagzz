import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IcBasket, IcHome, IcLike, IcSearch} from '../assets';

const Icon = ({label}) => {
  switch (label) {
    case 'Home':
      return <IcHome />;
    case 'SearchItem':
      return <IcSearch />;
    case 'LikeItem':
      return <IcLike />;
    case 'Basket':
      return <IcBasket />;
    default:
      return <IcHome />;
  }
};

const CustomTab = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.tab}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTab;

const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 'auto',
    height: 65,
    backgroundColor: 'white',
    margin: 8,
    paddingHorizontal: 40,
    borderRadius: 100,
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 2,
  },
});
