import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import index from '../IndexPage';
import SecondPage from '../SecondPage';
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="index" component={index} />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name={'index'} component={index} />
        <Tab.Screen name={'second'} component={SecondPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
