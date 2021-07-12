import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import index from '../IndexPage';
import SecondPage from '../SecondPage';
import ThridPage from '../ThridPage';
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const RootTab = () => {
  return  <Tab.Navigator>
  <Tab.Screen name={'index'} component={index} />
  <Tab.Screen name={'second'} component={SecondPage} />
</Tab.Navigator>
}

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RootTab" component={RootTab} />
        <Stack.Screen name="ThridPage" component={ThridPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
