import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function StackScreenOne({navigation}) {
  return (
    <View>
      <Text style={{paddingTop: 300}}>StackScreenOne</Text>
      <Pressable onPress={() => navigation.navigate('StackScreenTwo')}>
        <Text style={{fontSize: 50, fontWeight: 'bold'}}>Go to Screen Two</Text>
      </Pressable>
    </View>
  )
}