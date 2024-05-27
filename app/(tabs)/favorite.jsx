import { View, Text, ScrollView,Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'

import { ChevronLeftIcon, ShoppingBagIcon} from 'react-native-heroicons/outline';
import {  HeartIcon } from 'react-native-heroicons/solid';
import Header from '../../components/Header';

import burger from '../../assets/images/burger.jpg'

const Favorite = () => {
  return (
   <SafeAreaView className="bg-light_white h-full">
     <ScrollView className="h-full">
      <Header BackIcon={ChevronLeftIcon} text="Favorites"/>

      <View className=" px-2">
        <View className="bg-white py-2 px-2 rounded-md mt-2">
            <View className="  flex-row items-center gap-x-2">
              <Image
                  source={burger}
                  resizeMode="cover"
                  className="h-14 w-14 rounded-md" 
                />
                <View className="flex-1 flex-row items-center justify-between">
                    <View>
                      <Text className="text-gray-800 text-xl">Double Burger</Text>
                      <Text className="text-gray-400">Ksh 1500</Text>
                    </View>

                    <View className="flex-row item-center gap-x-4">
                      <TouchableOpacity>
                        <HeartIcon color="#FF0000" size={24}/>
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <ShoppingBagIcon color="#222"/>
                      </TouchableOpacity>

                    </View>
                </View>
                
            </View>
        </View>

        
      </View>
      
     </ScrollView>
     <StatusBar style='auto' backgroundColor='#FFF'/>
   </SafeAreaView>
  )
}

export default Favorite