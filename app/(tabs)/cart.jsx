import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ChevronLeftIcon,PlusIcon,MinusIcon } from 'react-native-heroicons/outline';
import { SafeAreaView } from 'react-native-safe-area-context';

import { router } from 'expo-router';

import biryani from '../../assets/images/biryani.png'
const Cart = () => {
    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView className="h-full">
               <View className="px-2 py-2">
                 <View className="flex-row items-center justify-between my-3">
                    <TouchableOpacity className=" bg-[#E9F3EF] px-1.5 py-1.5 flex items-center justify-center rounded-full"
                     onPress={()=>router.back()}
                    >
                        <ChevronLeftIcon color="#222"/>
                    </TouchableOpacity>

                    <Text className="text-3xl font-text-sm">Cart</Text>
                    <Text></Text>
                 </View>


                 <View>
                    {/* list of items in cart */}
                    <View className="flex-row border-b border-[#E9F3EF] py-2 px-2 mb-2">
                        <Image
                         source={biryani}
                         resizeMode="contain"
                         className="h-20 w-20 rounded-md"
                        />

                        <View className="flex-col gap-y-0.5 ml-2">
                            <Text className="text-xl font-header">Chicken Biryani</Text>
                            <Text className="text-sm text-gray-400">Quantity X2</Text>
                            <Text className="text-sm text-gray-400">Ksh 800</Text>

                            <View className="flex-row  w-full gap-x-3 py-1">
                                <TouchableOpacity className="bg-primaryBtn p-1 rounded-full">
                                    <PlusIcon color="#fff" size={18}/>
                                </TouchableOpacity>

                                <View className="bg-[#ccc] px-4  py-1 rounded-md">
                                    <Text>{1}</Text>
                                </View>

                                <TouchableOpacity className="bg-primaryBtn p-1 rounded-full">
                                    <MinusIcon color="#fff" size={18}/>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    {/* list of items in cart */}
                 </View>

                 <View className=" mt-4">
                    <View className="flex-row justify-between items-center pt-1">
                        <Text className="text-base font-header">SubTotal</Text>
                        <Text className="text-gray-400 text-sm">KSH 800</Text>
                    </View>
                    <View className="flex-row justify-between items-center py-2">
                        <Text className="text-base font-header">Delivery Fee</Text>
                        <Text className="text-gray-400 text-sm">KSH 100</Text>
                    </View>
                    <View className="flex-row justify-between items-center border-t py-1 border-[#E9F3EF]">
                        <Text className="text-base font-header">Total</Text>
                        <Text className="text-gray-400 text-sm">KSH 900</Text>
                    </View>
                 </View>

                    <TouchableOpacity className="bg-primaryBtn w-full py-4 mt-4 rounded-md items-center justify-center">
                        <Text className="text-white">CheckOut</Text>
                    </TouchableOpacity>
               </View>
            </ScrollView>
        </SafeAreaView>
    );
}


export default Cart;
