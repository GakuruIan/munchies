import React from 'react';
import { Alert, Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { ChevronLeftIcon,PlusIcon,MinusIcon } from 'react-native-heroicons/outline';
import { SafeAreaView } from 'react-native-safe-area-context';

import { router } from 'expo-router';

import biryani from '../../assets/images/biryani.png'

import { useSelector,useDispatch } from 'react-redux';
import { clearCart,reduceQuantity,addQuantity } from '../../redux/CartReducer';

const Cart = () => {
    const dispatch=useDispatch()
    const Cart = useSelector((state)=>state.cart)

    const {orders,quantity,total} = Cart

    const handleClearCart=()=>{
        dispatch(clearCart())

        Alert.alert("Cart cleared")
    }

    // const handleReduceQuantity=(id)=>{
        
    // }



    return (
        <SafeAreaView className="h-full bg-light_white">
            <ScrollView className="h-full">
               <View className="">

                 <View className="bg-white py-4 flex-row items-center justify-between mb-1">
                    <TouchableOpacity className="  px-1.5 py-1.5 flex items-center justify-center rounded-full"
                     onPress={()=>router.back()}
                    >
                        <ChevronLeftIcon color="#222"/>
                    </TouchableOpacity>

                    <Text className="text-3xl font-text-sm">Cart</Text>
                    <Text></Text>
                 </View>

                 <View className="mt-2">
                 {
                    orders.map((order)=>{
                        return <View key={order.id} className="py-4 px-2 mb-2 bg-white rounded-md">
                        <View className="flex-row justify-between  ">
                            <View>
                                <Image 
                                source={{uri:order.image}}
                                resizeMode='cover'
                                className="h-12 w-12 rounded-md object-fit"
                                />
                            </View>

                            {/* food details */}
                            <View>
                                <Text className="font-header text-xl">{order.name}</Text>
                                <Text className="font-header text-sm text-gray-400">Quantity X{order.quantity}</Text>
                            </View>

                            {/* price and manipulating quantity */}
                            <View>
                            <Text className="font-header text-base mb-1">Ksh {order.price}</Text>

                            <View className="flex-row items-center justify-center  gap-x-1">
                                <TouchableOpacity onPress={()=>dispatch(reduceQuantity(order.id))} className="bg-red-600 p-2 rounded-md">
                                    <MinusIcon color="#fff" size={10}/>
                                </TouchableOpacity>

                                <View className="bg-[#F5F6F9] px-3  py-1 rounded-md">
                                    <Text>{order.quantity}</Text>
                                </View>

                                <TouchableOpacity onPress={()=>dispatch(addQuantity(order.id))} className="bg-primaryBtn p-2 rounded-md">
                                    <PlusIcon color="#fff" size={10}/>
                                </TouchableOpacity>

                            </View>
                            </View>
                        </View>
                     </View>

                    {/* list of items in cart */}
                    })
                 }
                 </View>

                 <View className=" mt-4 bg-white px-2 py-4 rounded-md">
                    <View className="flex-row justify-between items-center pt-1">
                        <Text className="text-base font-header">SubTotal</Text>
                        <Text className="text-gray-400 text-sm">KSH {total}</Text>
                    </View>
                    <View className="flex-row justify-between items-center py-2">
                        <Text className="text-base font-header">Delivery Fee</Text>
                        <Text className="text-gray-400 text-sm">KSH 100</Text>
                    </View>
                    <View className="flex-row justify-between items-center border-t py-2 border-[#E9F3EF]">
                        <Text className="text-base font-header">Total</Text>
                        <Text className="text-gray-400 text-sm">KSH 900</Text>
                    </View>
                 </View>

                 <View className="flex-row items-center w-full gap-x-2 mt-4">
                     <TouchableOpacity onPress={handleClearCart} className="bg-red-300   flex-1 py-4  rounded-md items-center justify-center">
                        <Text className="text-red-600 font-header text-xl">Clear Cart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="bg-primaryBtn flex-1 py-4  rounded-md items-center justify-center">
                        <Text className="text-white font-header text-xl">CheckOut</Text>
                    </TouchableOpacity>
                 </View>

               </View>
              <StatusBar style='auto' backgroundColor='#FFF'/>
            </ScrollView>
        </SafeAreaView>
    );
}


export default Cart;
