import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CityList from '../screens/CityList'
import CityDetail from '../screens/CityDetail'


const AppNavigator = createStackNavigator({
  CityList: {
    screen: CityList,
  },
  CityDetail: {
    screen: CityDetail,
  },
});

export default createAppContainer(AppNavigator);
