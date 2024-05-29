import React from 'react'
import { View, Text, ScrollView,Dimensions } from 'react-native'
import { styled } from "nativewind";

import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import {  EyeIcon, LockClosedIcon, EnvelopeIcon } from 'react-native-heroicons/outline'

import Header from '../../components/Header'
import Input from '../../components/Input';
import Button from '../../components/Button';

const StyledView = styled(View);

const { height } = Dimensions.get('window');
const calculatedHeight = height - 64;

const Login = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView style={{height:'100%'}}>
          <Header text="Login" BackIcon={ChevronLeftIcon}/>

             <View className="mb-6">
                <View className="items-start px-4 mt-6">
                    <Text className="text-4xl font-intro mb-1">Munchies</Text>
                    <Text className="text-sm text-gray-500 ">Welcome back login into account</Text>
                </View>
             </View>
          <View className='items-center justify-center'>

             <View className="w-80">
                <Input PreIcon={EnvelopeIcon} label="Email" placeholder="John@gmail.com"/>
                
                <Input PreIcon={LockClosedIcon} label="Password" placeholder="password" PostIcon={EyeIcon}/>
                
                <View className="flex items-end my-1">
                    <Text className="text-gray-400">Forgot Password ?</Text>
                </View>

                <Button classes="bg-primaryBtn">
                   <Text className="text-white text-base">Login</Text>
                </Button>

                
                <View className="flex items-center my-1">
                    <Text className="text-gray-400">Or</Text>
                </View>

                <Button outline>
                   <Text className="text-teal-800">Create Account</Text>
                </Button>

             </View>
          </View>
      </ScrollView>
      <StatusBar style='auto' backgroundColor='#FFF'/>
    </SafeAreaView>
  )
}

export default Login


// style={{ height: calculatedHeight,display:'flex',alignItems:'center',justifyContent:'center'}}