import { View, Text,FlatList, Image, TextInput, TouchableOpacity,RefreshControl, StatusBar } from 'react-native'
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

import { GetAllFoods, Logout } from '../../Appwrite/Appwrite';
import useAppwrite from '../../Appwrite/useAppwrite';


const Home = () => {
  const {currentUser,isLoggedIn} = useSelector(state=>state.user)
  const [refreshing,setRefreshing] = useState(false)

  const {data:Foods,isLoading,refetch} = useAppwrite(GetAllFoods)
  // useEffect(()=>{
  //   if(!currentUser && !isLoggedIn){
  //      router.replace('/login')
  //   }
  // },[])

  const onRefresh=async()=>{
     setRefreshing(true)
     await  refetch()

     setRefreshing(false)

  }

  const handleLogout=async()=>{
    try {
       await Logout()

       router.replace('/login')
    } catch (error) {
        console.log(error);
    }
 }



  return (
    <SafeAreaView className=" h-full">

        <View className="px-2 shadow-2xl shadow-gray-800 bg-white space-y-4 relative">

          <View className="flex-row items-center py-4 justify-between">
              <View className="flex-row gap-x-2 items-center">
                <Text className="text-xl font-intro text-[#410C00]">
                  Munchies
                </Text>
               
              </View>

              <View>
                <TouchableOpacity onPress={handleLogout}>
                <ArrowLeftStartOnRectangleIcon color="#000"/>
                </TouchableOpacity>
              </View>
            </View>

        </View>

        <FlatList 
          className="bg-light_white"
          data={Foods}
          keyExtractor={(item)=>item.$id}
          renderItem={({item})=>(
            <Card food={item}/>
          )}
          numColumns={2}

          ListHeaderComponent={()=>(
           <View className='px-2'>
               <View className="py-1">
                 <Text className="text-3xl font-header">Find you best food</Text>
                 <Text className="text-xl text-gray-700">Order & Eat</Text>
            </View>

            <View className="flex-row gap-x-2">
              <TextInput className="flex-1 border border-gray-400 py-3 px-2 rounded-md font-header font-semibold" placeholder='search your food'/>
                <TouchableOpacity className="bg-primaryBtn p-3 rounded-md flex items-center justify-center">
                  <MagnifyingGlassIcon color="#FFF" className="h-4 w-4"/>
                </TouchableOpacity>
            </View>

            <View className="my-4 ">
              <Category/>
            </View>

           </View>
          )}

          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
        />
        <StatusBar backgroundColor='#fff' style='light'/>
    </SafeAreaView>
  )
}

export default Home