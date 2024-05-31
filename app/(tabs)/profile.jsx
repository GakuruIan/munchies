import React,{useEffect} from 'react'
import { View, Text, ScrollView, TouchableOpacity,Image} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'

import { ChevronLeftIcon, EllipsisHorizontalIcon, PencilSquareIcon,ChevronRightIcon, BellAlertIcon, LockClosedIcon, DocumentTextIcon, ExclamationTriangleIcon, ClipboardDocumentCheckIcon, PhoneIcon, ExclamationCircleIcon, TrashIcon, ArrowLeftStartOnRectangleIcon } from 'react-native-heroicons/outline';
import ProfileTab from '../../components/ProfileTab';

import african from '../../assets/images/african.jpg'

import { Logout } from '../../Appwrite/Appwrite';
import { router } from 'expo-router';

import { useSelector,useDispatch } from 'react-redux';


import { logout } from '../../redux/UserReducer';

const profile = () => {
  const {currentUser,isLoggedIn}= useSelector(state=>state.user)
  
  const dispatch = useDispatch()

  const handleLogout=async()=>{
     try {
        // await Logout()

        dispatch(logout())

        router.replace('/login')
     } catch (error) {
         console.log(error);
     }
  }

  return (
    <SafeAreaView className="h-full bg-light_white">
      <ScrollView className="h-full">

         <View className="bg-white ">
                <View className="px-2 h-16  w-full flex-row items-center justify-between">
                    <TouchableOpacity>
                      <ChevronLeftIcon color="#222"/>
                    </TouchableOpacity>

                    <Text className="text-2xl font-text-sm">Profile</Text>

                    <TouchableOpacity>
                      <EllipsisHorizontalIcon color="#222"/>
                    </TouchableOpacity>
                </View>   
          </View>

         <View className="px-2">

           

            <View className="bg-white py-4 rounded-md px-2 mb-2 flex-row  items-center justify-between h-28 w-full mt-4">
                  
                  <View className="flex-row items-center gap-x-2">
                    <Image 
                      source={{uri:currentUser.avatar}}
                      resizeMode="contain"
                      className="h-16 w-16 rounded-full"
                    />

                    <View className="">
                      <Text className="text-2xl font-text-sm">{currentUser.fullname}</Text>
                      <Text className="text-base font-text-sm text-gray-400">{currentUser.email}</Text>
                    </View>
                  </View>
                  
                  <TouchableOpacity>
                        <PencilSquareIcon color="#222" size={20}/>
                        {/* <ChevronRightIcon color="#222" size={20}/> */}
                  </TouchableOpacity>
                  
            </View>

            <View className="bg-white py-4 rounded-md px-2">
              <Text className="text-xl text-gray-400 font-header mb-1">Settings</Text>
              
              <View className="px-2 rounded-md">

                <ProfileTab
                  text="Notification"
                  Icon={BellAlertIcon}
                />

                <ProfileTab
                  text="Privacy Policy"
                  Icon={LockClosedIcon }
                />


                <ProfileTab
                  text="Cancellation Policy"
                  Icon={BellAlertIcon }
                  />

                <ProfileTab
                  text="Disclaimer"
                  Icon={ExclamationTriangleIcon}
                />

              </View>

            </View>

            <View className="mt-2 bg-white py-4 rounded-md px-2">
              <Text className="text-xl text-gray-400 font-header mb-1">Support</Text>
              
              <View className="px-2">

              <ProfileTab
                  text="Terms & Conditions"
                  Icon={ClipboardDocumentCheckIcon}
              />

              <ProfileTab
                  text="Contact Us"
                  Icon={PhoneIcon}
              />


             <ProfileTab
                  text="About Us"
                  Icon={ExclamationCircleIcon}
              />

              </View>

            </View>

            <View className="mt-2 bg-white py-4 rounded-md px-2">
              <Text className="text-xl text-gray-400 font-header mb-1">Account</Text>

              <View className=''>

              <TouchableOpacity onPress={handleLogout}>
                <ProfileTab
                    text="Log out"
                    Icon={ArrowLeftStartOnRectangleIcon}
                />
              </TouchableOpacity>
              
              <View className="flex-row items-center justify-between py-4 px-2 my-2 bg-red-300/50 rounded-md">
                <View className="flex-row items-center gap-x-2">
                   <TrashIcon color="#B91C1C"/>
                   <Text className="text-red-700">Delete Account</Text>
                </View>
              </View> 

              </View>
            </View>
         </View>
         <StatusBar style='auto' backgroundColor='#FFF'/>
      </ScrollView>
    </SafeAreaView>
  ) 
}

export default profile