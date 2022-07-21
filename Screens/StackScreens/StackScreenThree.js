import { View, Text , Pressable} from 'react-native'
import React from 'react'

export default function StackScreenThree({navigation}) {
  return (
    <View>
      <Text>StackScreenThree</Text>
      <Pressable onPress={() => navigation.navigate('StackScreenOne')}>
        <Text style={{fontSize: 50, fontWeight: 'bold'}}>Go to Screen One</Text>
      </Pressable>
    </View>
  )
}