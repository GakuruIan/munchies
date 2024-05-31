import React,{useState,useEffect} from 'react'
import { View, Text, ScrollView,Dimensions } from 'react-native'
import { styled } from "nativewind";

import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import {  EyeIcon, LockClosedIcon, EnvelopeIcon } from 'react-native-heroicons/outline'

import Header from '../../components/Header'
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Redirect, router } from 'expo-router'

// redux
import { useSelector,useDispatch } from 'react-redux'
import {login} from '../../redux/UserReducer'

import { LoginUser,GetCurrentUser } from '../../Appwrite/Appwrite';

const StyledView = styled(View);

const { height } = Dimensions.get('window');
const calculatedHeight = height - 64;

const Login = () => {
   const dispatch = useDispatch()

   const [submitting,setSubmitting] = useState(false)

   const isLoggedIn = useSelector(state=>state.user.isLoggedIn)

   useEffect(()=>{
      if(isLoggedIn){
         router.replace('/home')
      }
   },[])


   const [form,setForm] = useState({
       Email:'',
       password:''
   })

   const handleSubmit=async()=>{
      const {Email,password} = form
      
      if(!Email || !password){
         Alert.alert("Please fill in the fields")
      }

      try {
        setSubmitting(true)
        await LoginUser(Email,password)

        const user=await GetCurrentUser()

        const {accountID,avatar,email,fullname,phone} = user
         
        dispatch(login({accountID,avatar,email,fullname,phone}))
       
        router.replace('/home')
      } catch (error) {
        console.log(error);
      }
      finally{
       setSubmitting(false)
      }
    }

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
                <Input 
                   PreIcon={EnvelopeIcon} 
                   label="Email" 
                   placeholder="John@gmail.com"
                   secure={false}
                   value={form.Email}
                   handleChange={(e)=>setForm({...form,Email:e})}
                />
                
                <Input 
                  PreIcon={LockClosedIcon} 
                  label="Password" 
                  placeholder="password" 
                  PostIcon={true}
                  secure={true}
                  value={form.password}
                  handleChange={(e)=>setForm({...form,password:e})}
                  />
                
                <View className="flex items-end my-1">
                    <Text className="text-gray-400">Forgot Password ?</Text>
                </View>

                <Button classes="bg-primaryBtn" isLoading={submitting} handlePress={handleSubmit}>
                   <Text className="text-white text-base">Login</Text> 
                </Button>

                
                <View className="flex items-center my-1">
                    <Text className="text-gray-400">Or</Text>
                </View>

               
                  <Button outline handlePress={()=>router.replace('/home')}>
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