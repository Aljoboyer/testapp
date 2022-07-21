import { View, Text } from 'react-native'
import React from 'react'
import StackScreenOne from './StackScreens/StackScreenOne';
import StackScreenTwo from './StackScreens/StackScreenTwo';
import StackScreenThree from './StackScreens/StackScreenThree';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
export default function StackScreen() {
  return (
        <Stack.Navigator initialRouteName='StackScreenOne'>
        <Stack.Screen options={{headerShown: true}}  name='StackScreenOne' component={StackScreenOne}/>
        <Stack.Screen options={{headerShown: false}}  name='StackScreenTwo' component={StackScreenTwo}/>
        <Stack.Screen options={{headerShown: false}}  name='StackScreenThree' component={StackScreenThree}/>
        </Stack.Navigator>

  )
}