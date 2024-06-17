import { View, Text, ScrollView, Image, TouchableOpacity,ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon, MinusIcon, PlusIcon, ShoppingBagIcon } from 'react-native-heroicons/solid'
import { HeartIcon } from 'react-native-heroicons/outline'

import { router, useLocalSearchParams } from 'expo-router'

import useAppwrite from '../../Appwrite/useAppwrite'
import { GetFood } from '../../Appwrite/Appwrite'


import { COLOR } from '../../Constants'

const Item = () => {
  const {id}= useLocalSearchParams()

  const{data:[Food],isLoading} = useAppwrite(()=>GetFood(id))

  return (
    <SafeAreaView className="bg-white h-full px-2">
    
        <ScrollView className="h-full ">
          {
            isLoading ? 
            (
              <View className="min-h-screen items-center justify-center">
                  <ActivityIndicator size="large" color={COLOR}/>
              </View>
            ) 
            :
         
         ( <View className="mt-4 pb-4  w-full">
            <View className="flex-row items-center justify-between ">
              <TouchableOpacity onPress={()=>router.back()}>
                <ChevronLeftIcon size={26} color="#222"/>
              </TouchableOpacity>
               <HeartIcon  size={24} color="#222"/>
            </View>
             
             <View className="mt-4">
               <Text className="text-5xl font-text-sm text-center mb-2">{Food?.name}</Text>
                <Text className="text-2xl text-center text-gray-500">KSH {Food?.price}</Text>
             </View>

             <View className="items-center justify-center my-6  rounded-md">
                <Image 
                 source={{uri:Food?.image}}
                 resizeMode='cover'
                 className="h-96 w-96 rounded-md"
                />
             </View>

             <View className="flex-row items-center justify-center mt-4 gap-x-8">
                <TouchableOpacity className="bg-primaryBtn p-2 rounded-md">
                      <PlusIcon color="#fff" size={18}/>
                </TouchableOpacity>
                <View className="bg-[#ccc] px-4  py-2 rounded-md">
                   <Text>{1}</Text>
                </View>
                <TouchableOpacity className="bg-primaryBtn p-2 rounded-md">
                   <MinusIcon color="#fff" size={18}/>
                </TouchableOpacity>
             </View>

            <View className="my-4">
              <Text className="text-2xl font-header">Extras</Text>
              <Text className="text-sm mb-3 text-gray-600">Choose your options</Text>

              <View className=" w-full mb-2 py-3 flex-row items-center justify-between px-2 border-[1px] border-primaryBtn rounded-md">
                  <Text className="text-base">Onions +300</Text>
                  <View className="p-2 rounded-full bg-primaryBtn">
                       <PlusIcon color="#fff" size={18}/>
                  </View>
              </View>

              <View className="border w-full mb-2 py-3 flex-row items-center justify-between px-2 border-gray-300 rounded-md">
                  <Text className="text-base">Onions +300</Text>
                  <View className="p-2 rounded-full bg-primaryBtn">
                       <PlusIcon color="#fff" size={18}/>
                  </View>
              </View>

              <View className="border w-full mb-2 py-3 flex-row items-center justify-between px-2 border-gray-300 rounded-md">
                  <Text className="text-base">Onions +300</Text>
                  <View className="p-2 rounded-full bg-primaryBtn">
                       <PlusIcon color="#fff" size={18}/>
                  </View>
              </View>

            </View>

            <View className="px-2 w-full items-center justify-center">
              <TouchableOpacity className="mt-4 bg-primaryBtn w-full flex flex-row items-center justify-center gap-x-2 py-3 px-2 rounded-md">
                <Text className="font-text-sm text-[17px] text-white">Add to cart</Text>
                <ShoppingBagIcon size={18} color="#fff"/>
              </TouchableOpacity>
            </View>

          </View>)
          }
        </ScrollView>
    </SafeAreaView>
  )
}

export default Item