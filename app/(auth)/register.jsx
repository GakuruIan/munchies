import React from 'react';
import {  Text,View,Dimensions,ScrollView } from 'react-native';

import Input from '../../components/Input';
import Header from '../../components/Header';
import Button from '../../components/Button';

import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import {  EyeIcon, LockClosedIcon, UserIcon,EnvelopeIcon,PhoneIcon } from 'react-native-heroicons/outline'

const { height } = Dimensions.get('window');
const calculatedHeight = height - 64;


const Register = () => {
    return (
        <SafeAreaView className="bg-white h-full">
        <ScrollView style={{height:'100%'}}>
            <Header text="Register" BackIcon={ChevronLeftIcon}/>
  
               <View className="mb-6">
                  <View className="items-start px-4 mt-6">
                      <Text className="text-4xl font-intro mb-1">Munchies</Text>
                      <Text className="text-sm text-gray-500 ">Welcome create an account</Text>
                  </View>
               </View>
            <View className='items-center justify-center'>
  
               <View className="w-[330px]">
                  <Input PreIcon={UserIcon} label="Username" placeholder="John Doe"/>

                  <Input PreIcon={EnvelopeIcon} label="Email" placeholder="John@gmail.com"/>

                  {/* <Input PreIcon={PhoneIcon } label="Phone" placeholder="+254 72 222 333"/> */}

                  <Input PreIcon={LockClosedIcon} label="Password" placeholder="create password" PostIcon={EyeIcon}/>
                  
                  <View className="flex items-end my-1">
                      <Text className="text-gray-400">Have an account? Login</Text>
                  </View>
  
                  <Button classes="bg-primaryBtn">
                     <Text className="text-white text-base">Register</Text>
                  </Button>
  
               </View>
            </View>
        </ScrollView>
        <StatusBar style='auto' backgroundColor='#FFF'/>
      </SafeAreaView>
    );
}


export default Register;
