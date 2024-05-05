import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon, HeartIcon, MinusIcon, PlusIcon, ShoppingBagIcon } from 'react-native-heroicons/solid'
import { router } from 'expo-router'

import biryani from '../../assets/images/biryani.png'

const Item = () => {
  return (
    <SafeAreaView className="bg-white h-full px-2">
        <ScrollView className="h-full">
          <View className="mt-4 pb-4  w-full">
            <View className="flex-row items-center justify-between ">
              <TouchableOpacity onPress={()=>router.back()}>
                <ChevronLeftIcon size={24} color="#222"/>
              </TouchableOpacity>
               <HeartIcon  size={24} color="#222"/>
            </View>
             
             <View className="mt-4">
               <Text className="text-5xl font-text-sm text-center mb-2">Chicken Biryani</Text>
                <Text className="text-2xl text-center text-gray-500">KSH 1200</Text>
             </View>

             <View className="items-center justify-center my-6  rounded-md">
                <Image 
                 source={biryani}
                 resizeMode='contain'
                 className="h-64 w-64"
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
               <Text className="text-2xl font-text-sm font-semibold mb-2">Ingridents</Text>
               <Text className="font-text-sm text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam consequuntur esse veniam rerum cumque? Repudiandae voluptatibus voluptates error ipsum sit ullam dolore eos ratione quas pariatur nam unde quibusdam reprehenderit, debitis vero. Nulla, placeat est! Architecto est voluptatibus neque quidem.</Text>
            </View>

            <View className="px-2 w-full items-center justify-center">
              <TouchableOpacity className="mt-4 bg-primaryBtn w-full flex flex-row items-center justify-center gap-x-2 py-3 px-2 rounded-md">
                <Text className="font-text-sm text-[17px] text-white">Add to cart</Text>
                <ShoppingBagIcon size={18} color="#fff"/>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Item