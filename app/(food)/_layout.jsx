import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const FoodLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='item' options={{headerShown:false}}/>
    </Stack>
  )
}

export default FoodLayout