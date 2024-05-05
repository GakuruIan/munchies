import { View, Text,FlatList } from 'react-native'
import React from 'react'

const Category = () => {
  return (
    <FlatList
       data={['All foods','Bakery','Burger','Pizza','Drinks','Meat']}
       horizontal={true}
       renderItem={({item})=>(
         <View className="mr-6 py-2 mt-4 px-4  rounded-md bg-[#E9F3EF]">
            <Text className="text-base text-gray-400 font-text-sm">{item}</Text>
         </View>
       )}
    />
  )
}

export default Category