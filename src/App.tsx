import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Screens/Home'
import Details from './Screens/Details'

export type RootStackParamList = {
  Home : undefined;
  Details : {product : Products};
}
const Stack = createNativeStackNavigator<RootStackParamList>()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
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
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})