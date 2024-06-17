import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import{Link} from 'expo-router'

import {  StarIcon } from 'react-native-heroicons/solid'

const Card = ({food:{name,image,price,rating,$id}}) => {
  
  return (
    <Link href={`/food/${$id}`} className="px-2 flex-1 h-64 pt-4  my-2 mr-1">
      
        <View className="flex-1 ">
          <Image 
          source={{uri:image}}
          resizeMode='cover'
          className="h-44  w-44 rounded-md"
          />
          
          
          <View className="flex-row justify-between items-center w-full">
              {/* food name */}
              <Link href={`/food/${$id}`}>
                  <Text numberOfLines={1} className="text-xl font-text-sm">{name}</Text>   
              </Link>
            {/* price */}
            <Text className="text-gray-600 text-sm">KSH {price}</Text>
          </View>

          <View className="w-full items-center justify-between flex-row my-1">
              {/* time to prepare */}
              <Text className="text-gray-500 text-sm">10min </Text>
              {/* rating */}
              <View className="flex-row items-center justify-center gap-x-1">
                  <StarIcon color="#333" size={16}/>
                  <Text className="text-gray-500 text-sm">{rating}</Text>
              </View>  
          </View>

        </View>
      
    </Link>
  )
}


export default Card