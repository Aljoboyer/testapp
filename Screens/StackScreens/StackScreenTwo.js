import { View, Text , Pressable} from 'react-native'
import React from 'react'

export default function StackScreenTwo({navigation}) {
  return (
    <View>
      <Text>StackScreenTwo</Text>
      <Pressable onPress={() => navigation.navigate('StackScreenThree')}>
        <Text style={{fontSize: 50, fontWeight: 'bold'}}>Go to Screen Three</Text>
      </Pressable>
    </View>
  )
}