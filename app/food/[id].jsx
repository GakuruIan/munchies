import { View, Text, ScrollView, Image, TouchableOpacity,ActivityIndicator, Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon, MinusIcon, PlusIcon, ShoppingBagIcon } from 'react-native-heroicons/solid'
import { HeartIcon } from 'react-native-heroicons/outline'

import { router, useLocalSearchParams } from 'expo-router'

import useAppwrite from '../../Appwrite/useAppwrite'
import { GetFood } from '../../Appwrite/Appwrite'

// reducers
import { useDispatch } from 'react-redux'
import { addOrder } from '../../redux/CartReducer'

import { COLOR } from '../../Constants'
import { StatusBar } from 'expo-status-bar'

const Item = () => {
  const {id}= useLocalSearchParams()

  const dispatch = useDispatch()

  const [quantity,setQuantity] = useState(1)
  const [total,setTotal]=useState(0)
  
  const{data:[Food],isLoading} = useAppwrite(()=>GetFood(id))

  useEffect(() => {
    if(Food){
      setTotal(Food?.price)
    }
  }, [Food]);

  const handleQuantity=(action)=>{
     if(action === 'remove'){
       quantity > 1 && setQuantity((prevQuantity)=>{
          const newQuantity = prevQuantity - 1
          setTotal((prevTotal) => newQuantity * Food.price);
          return newQuantity;
       }) 
       setTotal(quantity * Food.price)
     }
     else if(action === 'add'){
      setQuantity((prevQuantity) => {
        const newQuantity = prevQuantity + 1;
        setTotal((prevTotal) => newQuantity * Food.price);
        return newQuantity;
      });
     }
     else{
      return
     }
  }

  const handleCart=()=>{
     
      const {$id,name,price,image} = Food

      const Order = {
        id:$id,
        name, 
        price,
        image,
        quantity,
      }

      dispatch(addOrder(Order))

      Alert.alert("Food added to cart")
  }


  return (
    <SafeAreaView className="bg-white h-full">
    
        <ScrollView className="h-full ">

         <View className="flex-row items-center justify-between py-4 px-2">
                <TouchableOpacity onPress={()=>router.back()}>
                  <ChevronLeftIcon size={26} color="#222"/>
                </TouchableOpacity>
                <Text className="text-xl">Order Details</Text>
                <HeartIcon  size={24} color="#222"/>
          </View>
         
          {
            isLoading ? 
            (
              <View className="min-h-screen items-center justify-center">
                  <ActivityIndicator size="large" color={COLOR}/>
              </View>
            ) 
            :
         
         ( 
         <View className="mt-4 pb-4 bg-light_white px-2 w-full">
              
              <View className="items-center justify-center my-6  rounded-md">
                  <Image 
                  source={{uri:Food?.image}}
                  resizeMode='cover'
                  className="h-72 w-72 rounded-md"
                  />
              </View>

              <View className="mt-3">
                <Text className="text-4xl font-text-sm text-center mb-2">{Food?.name}</Text>
                  <Text className="text-2xl text-center text-gray-500">KSH {Food?.price}</Text>
              </View>

              <View className="flex-row items-center justify-center mt-2 gap-x-8">
                  <TouchableOpacity onPress={()=>handleQuantity('remove')} className="bg-primaryBtn p-2 rounded-md">
                    <MinusIcon color="#fff" size={18}/>
                  </TouchableOpacity>
                    <View className="bg-[#ccc] px-4  py-2 rounded-md">
                      <Text>{quantity}</Text>
                    </View>
                  <TouchableOpacity onPress={()=>handleQuantity('add')} className="bg-primaryBtn p-2 rounded-md">
                        <PlusIcon color="#fff" size={18}/>
                  </TouchableOpacity>
              </View>

            <View className="my-4">
              <Text className="text-2xl font-header">Extras</Text>
              <Text className="text-sm mb-3 text-gray-600">Choose your options</Text>
              
              {
                Food?.extras.map((extra)=>{
                    return <View  key={extra.$id} className=" w-full mb-2 py-3 flex-row items-center justify-between px-2 border-[1px] border-primaryBtn rounded-md">
                      <View className="flex-row items-center">
                        <Image
                          source={{uri:extra.image}}
                          resizeMode='cover'
                          className="h-10 w-10 object-fit mr-2"
                        />
                        <Text className="text-base">{extra.name} + (Ksh {extra.price})</Text>
                      </View>
                      <View className="p-2 rounded-full bg-primaryBtn">
                          <PlusIcon color="#fff" size={18}/>
                      </View>
                </View>
                })
              }
             

            </View>

            <View className="">
              <View className="px-2 py-4 w-full rounded-md bg-white">
                  <Text className="text-xl font-header mb-2">Order Summary</Text>

                  <View className="flex-row mb-2 items-center justify-between py-2 border-b border-gray-200">
                    <Text className="text-base font-header">Quantity</Text>
                    <Text className="text-base font-header">{quantity}</Text>
                  </View>

                  <View className="flex-row mb-2 py-2 border-b border-gray-200 items-center justify-between">
                    <Text className="text-base font-header">Price</Text>
                    <Text className="text-base font-header">{Food?.price}</Text>
                  </View>

                  <Text className="text-base font-header mb-4">Extras</Text>

                  <View className="flex-row mb-2 py-2 border-b border-gray-200 items-center justify-between">
                    <Text className="text-base font-header">Price</Text>
                    <Text className="text-base font-header">{Food?.price}</Text>
                  </View>

                  <View className="border-t border-dashed border-gray-600">
                    <View className="flex-row mb-4 items-center justify-between mt-2">
                      <Text className="text-base font-header">Total</Text>
                      <Text className="text-base font-header">{total}</Text>
                    </View>
                  </View>
              </View>
            </View>

            <View className="px-2 w-full items-center justify-center">
              <TouchableOpacity onPress={handleCart} className="mt-4 bg-primaryBtn w-full flex flex-row items-center justify-center gap-x-2 py-3 px-2 rounded-md">
                <ShoppingBagIcon size={18} color="#fff"/>
                <Text className="font-text-sm text-[17px] text-white">Add to cart</Text>
              </TouchableOpacity>
            </View>

          </View>)
          }
        </ScrollView>
        <StatusBar backgroundColor='#fff'/>
    </SafeAreaView>
  )
}

export default Item