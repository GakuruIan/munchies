import React,{useState,useEffect} from 'react';
import {  Text,View,Dimensions,ScrollView ,KeyboardAvoidingView,Platform} from 'react-native';

import Input from '../../components/Input';
import Header from '../../components/Header';
import Button from '../../components/Button';

import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { LockClosedIcon, UserIcon,EnvelopeIcon,PhoneIcon } from 'react-native-heroicons/outline'

import { RegisterUser } from '../../Appwrite/Appwrite';

import { Link, router } from 'expo-router'

// redux
import { useSelector } from 'react-redux'

const { height } = Dimensions.get('window');
const calculatedHeight = height - 64;


const Register = () => {
    
  const isLoggedIn =useSelector(state=>state.user.isLoggedIn)

  console.log(isLoggedIn)

  //  useEffect(()=>{

  //      if(isLoggedIn){
  //       router.replace('/home')
  //      }

  //   },[])

   const [form,setForm] = useState({
      fullname:'',
      email:'',
      phone:'',
      password:''
      });

      const [submitting,setSubmitting] = useState(false)

      const handleSubmit=async()=>{
        const {fullname,email,password,phone} = form
        
        if(!fullname || !email || !phone || !password){
           Alert.alert("Please fill in the fields")
        }

        try {
          setSubmitting(true)
          const response = await RegisterUser(fullname,email,password,phone)
      
          router.replace('/login')
        } catch (error) {
          console.log(error);
        }
        finally{
         setSubmitting(false)
        }
      }

    return (
        <SafeAreaView className="bg-white h-full">
        <KeyboardAvoidingView className="flex-1"  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView style={{height:'100%'}}>
                <Header text="Register" BackIcon={ChevronLeftIcon}/>
      
                  <View className="mb-6">
                      <View className="items-start px-4 mt-2">
                          <Text className="text-4xl font-intro mb-1">Munchies</Text>
                          <Text className="text-sm text-gray-500 ">Welcome create an account</Text>
                      </View>
                  </View>

                

                <View className='items-center justify-center'>
      
                  <View className="w-[330px]">
                      <Input 
                        PreIcon={UserIcon} 
                        label="Fullname" 
                        value={form.fullname}
                        handleChange={(e)=>setForm({...form,fullname:e})}
                        placeholder="John Doe" 
                        secure={false}
                      />

                      <Input 
                      PreIcon={EnvelopeIcon} 
                      label="Email" 
                      placeholder="John@gmail.com" 
                      secure={false}
                      value={form.email}
                      handleChange={(e)=>setForm({...form,email:e})}
                      />

                      <Input 
                        PreIcon={PhoneIcon } 
                        label="Phone" 
                        placeholder="+254 72 222 333" 
                        secure={false}
                        value={form.phone}
                        handleChange={(e)=>setForm({...form,phone:e})}
                        />

                      <Input 
                        PreIcon={LockClosedIcon} 
                        label="Password" 
                        placeholder="create password" 
                        PostIcon={true} 
                        secure={true}
                        value={form.password}
                        handleChange={(e)=>setForm({...form,password:e})}
                      />
                      
                      <View className="flex items-end my-1">
                        <Link href="/login">
                          <Text className="text-gray-400">Have an account? Login</Text>
                        </Link>
                      </View>
      
                      <Button classes="bg-primaryBtn" handlePress={handleSubmit} isLoading={submitting}>
                        <Text className="text-white text-base">Register</Text>
                      </Button>
      
                  </View>
                </View>

             </ScrollView>
          </KeyboardAvoidingView>
        <StatusBar style='auto' backgroundColor='#FFF'/>
      </SafeAreaView>
    );
}


export default Register;
