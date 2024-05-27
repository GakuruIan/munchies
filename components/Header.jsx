import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const Header = ({text,BackIcon,MoreIcon,showMore}) => {
  return (
    <View className="bg-white ">
        <View className="px-2 h-16  w-full flex-row items-center justify-between">
            <TouchableOpacity>
                <BackIcon color="#222"/>
            </TouchableOpacity>

            <Text className="text-2xl font-text-sm">{text}</Text>

            {showMore ? 
            <TouchableOpacity>
                <MoreIcon color="#222"/>
            </TouchableOpacity> 
            : <Text></Text>}
           
        </View>   
    </View>
  )
}

export default Header