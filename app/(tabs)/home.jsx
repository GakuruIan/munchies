import { View, Text,FlatList, Image, TextInput, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import  { ArrowLeftStartOnRectangleIcon,MagnifyingGlassIcon } from "react-native-heroicons/outline";

// components
import Category from '../../components/Category';
import Card from '../../components/Card';

// redux
import { useSelector } from 'react-redux';

//expo router
import{router} from 'expo-router'

import { Logout } from '../../Appwrite/Appwrite';

const Home = () => {
  const {currentUser,isLoggedIn} = useSelector(state=>state.user)

  // useEffect(()=>{
  //   if(!currentUser && !isLoggedIn){
  //      router.replace('/login')
  //   }
  // },[])

  const handleLogout=async()=>{
    try {
       await Logout()

       router.replace('/login')
    } catch (error) {
        console.log(error);
    }
 }

  return (
    <SafeAreaView className="bg-white h-full">
        <FlatList 
          data={[1,2,3,4,5]}
          renderItem={({item})=>(
            <Card/>
          )}
          numColumns={2}
          ListHeaderComponent={()=>(
           <View className="px-2 pt-4 space-y-4 relative">

             <View className="flex-row items-center justify-between">
               <View className="flex-row gap-x-2 items-center">
                <Image
                  source={{uri:currentUser.avatar}}
                  resizeMode="contain"
                  className="h-12 w-12 rounded-full"
                 />
                 <View className="items-start">
                   <Text className="text-xl font-header font-semibold">Hi, {currentUser.fullname}</Text>
                   <Text className="text-base text-gray-400 font-text-sm">Current Location</Text>
                 </View>
               </View>

               <View>
                 <TouchableOpacity onPress={handleLogout}>
                  <ArrowLeftStartOnRectangleIcon color="#000"/>
                 </TouchableOpacity>
               </View>
             </View>

              <View className="py-1">
                  <Text className="text-4xl font-header">Find you best food</Text>
                  <Text className="text-2xl text-gray-700">Order & Eat</Text>
              </View>

              <View className="flex-row gap-x-2">
                <TextInput className="flex-1 border border-gray-400 py-3 px-2 rounded-md font-header font-semibold" placeholder='search your food'/>
                 <TouchableOpacity className="bg-primaryBtn p-3 rounded-md flex items-center justify-center">
                   <MagnifyingGlassIcon color="#FFF" className="h-4 w-4"/>
                 </TouchableOpacity>
              </View>

              <Category/>
           </View>
          )}
        />
    </SafeAreaView>
  )
}

export default Home