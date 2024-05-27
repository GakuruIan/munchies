import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon,ChevronRightIcon } from 'react-native-heroicons/outline';

import Header from '../../components/Header'

import burger from '../../assets/images/burger.jpg'

const Orders = () => {
  return (
    <SafeAreaView className="bg-light_white h-full">
        <ScrollView className="h-full">
            <Header BackIcon={ChevronLeftIcon} text="My Orders" showMore={false}/>
            
            <View className="mt-2 px-2">
                  <View className="bg-white">
                     <View className="px-2 py-4 rounded-md">
                        {/* header */}
                        <View className="border-b border-gray-200">
                            <View className="flex-row items-center justify-between py-2">
                                <View className="flex-row items-center gap-x-2 ">
                                    <View><Text className="text-gray-600">5 May 2024</Text></View>
                                    <View><Text className="text-gray-600">11:40 am</Text></View>
                                </View>

                                <View>
                                    <ChevronRightIcon color="#221"/>
                                </View>
                            </View>
                        </View>
                         {/* header */}

                         {/* body */}
                         <View className="py-2 mt-2 flex-row items-center justify-between">
                            <View>
                                <Text className="text-4xl text-gray-700">Order</Text>
                                <Text className="text-gray-300 text-sm">#40342</Text>
                            </View>
                             
                             <View>

                                <Text className="text-sm text-gray-400 mb-1">Order Status</Text>
                                <View className="bg-blue-400/40 px-2 py-2 rounded-md">
                                    <Text className="text-blue-700">In Kitchen</Text>
                                </View>
                             </View>
                         </View>
                         {/* body */}

                         {/* order images */}
                         <View className="mt-2 py-1">
                            <View className='flex-row gap-x-1'>

                                <Image
                                 source={burger}
                                 resizeMode="cover"
                                 className="h-14 w-14 rounded-md" 
                                />

                                <Image
                                 source={burger}
                                 resizeMode="cover"
                                 className="h-14 w-14 rounded-md" 
                                />

                                <Image
                                 source={burger}
                                 resizeMode="cover"
                                 className="h-14 w-14 rounded-md" 
                                />

                                <Image
                                 source={burger}
                                 resizeMode="cover"
                                 className="h-14 w-14 rounded-md" 
                                />

                                
                                <Image
                                 source={burger}
                                 resizeMode="cover"
                                 className="h-14 w-14 rounded-md" 
                                />
                            </View>
                         </View>
                         {/* order images */}

                         {/* footer of order */}
                         <View className="flex-row items-center justify-between py-2 mt-4">
                            <View>
                                <Text className="text-gray-400 text-sm">8 Items</Text>
                            </View>
                            <View>
                                <Text className="text-gray-400 text-sm">Total Ksh 1500</Text>
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

export default Orders