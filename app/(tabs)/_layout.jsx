import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'

import { HomeIcon,ShoppingBagIcon,HeartIcon,UserIcon,TruckIcon } from "react-native-heroicons/outline";
const Layout = () => {
  return (
      <Tabs
        screenOptions={{
          tabBarShowLabel:false,
          tabBarActiveTintColor:"#2A6E4F",
          tabBarInactiveTintColor:"#222",
          tabBarStyle:{
            borderTopWidth:1,
            borderTopColor:"#ccc",
             height:65
          }
        }}
       >
        <Tabs.Screen 
          name='home'
          options={{
            title:"Home",
            headerShown:false,
            tabBarIcon:({color,focused})=> <HomeIcon name="Home" color={color} focused={focused}/>
          }}
         />

      <Tabs.Screen 
          name='favorite'
          options={{
            title:"Favorite",
            headerShown:false,
            tabBarIcon:({color,focused})=> <HeartIcon name="Favorite" color={color} focused={focused}/>
          }}
         />

       <Tabs.Screen 
          name='cart'
          options={{
            title:"Cart",
            headerShown:false,
            tabBarIcon:({color,focused})=> <ShoppingBagIcon name="Cart" color={color} focused={focused}/>
          }}
         />

      <Tabs.Screen 
          name='orders'
          options={{
            title:"Orders",
            headerShown:false,
            tabBarIcon:({color,focused})=> <TruckIcon name="Orders" color={color} focused={focused}/>
          }}
         />

        <Tabs.Screen 
            name='profile'
            options={{
              title:"Profile",
              headerShown:false,
              tabBarIcon:({color,focused})=> <UserIcon name="Profile" color={color} focused={focused}/>
            }}
          />

      </Tabs>
  )
}

export default Layout