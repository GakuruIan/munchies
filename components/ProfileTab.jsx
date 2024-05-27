import { View, Text } from 'react-native'
import React from 'react'

import { ChevronRightIcon } from 'react-native-heroicons/outline'

const ProfileTab = ({text,Icon}) => {

  return (
    <>
      <View className="flex-row items-center justify-between py-2 my-2">
            <View className="flex-row gap-x-2 items-center">
             <Icon  color="#222"/>
             <Text>{text}</Text>
          </View>
        <ChevronRightIcon color="#222" size={20}/>
      </View>
    </>
  )
}

export default ProfileTab