import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Screens/Home'
import Details from './Screens/Details'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export type RootStackParamList = {
  Home : undefined;
  Details : {product : Products};
}
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>()

export function StackNavigator() {
  return(
    <Stack.Navigator  initialRouteName='Home'>
        <Stack.Screen 
        name='Home' 
        component={Home}
        options={{title: "Trending Products"}}
        />
        <Stack.Screen 
        name='Details' 
        component={Details}
        options={{title: "Product Details"}}
        />
      </Stack.Navigator>
  )
}
export function TabNavigator():JSX.Element {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Trending Products" component={StackNavigator} />
      {/* <Tab.Screen name="Details" component={StackNavigator} /> */}
    </Tab.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
      
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})