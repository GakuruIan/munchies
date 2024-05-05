import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import{Link} from 'expo-router'

import african from '../assets/images/burger.jpg'

import {  StarIcon } from 'react-native-heroicons/solid'
const Card = () => {
  return (
    <View className="px-2 mt-4 flex-1  mx-1 p-2">
      <View className="flex-1 items-start">
        <Image 
         source={african}
         resizeMode='cover'
         className="h-44 w-full rounded-md"
        />
        
        
        <View className="flex-row justify-between items-center w-full">
            {/* food name */}
            <Link href="item">
                <Text numberOfLines={1} className="text-xl font-text-sm">African Dish</Text>   
            </Link>
           {/* price */}
           <Text className="text-gray-600 text-sm">KSH 800</Text>
        </View>

        <View className="w-full items-center justify-between flex-row my-1">
            {/* time to prepare */}
            <Text className="text-gray-500 text-sm">10min </Text>
            {/* rating */}
            <View className="flex-row items-center justify-center gap-x-1">
                <StarIcon color="#333" size={16}/>
                <Text className="text-gray-500 text-sm">4.5</Text>
            </View>  
        </View>

      </View>
    </View>
  )
}

export default Card