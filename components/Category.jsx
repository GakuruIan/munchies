import { View, Text,FlatList, Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import { GetAllCategories } from '../Appwrite/Appwrite'


const Category = () => {
  const [Categories,setCategories] = useState([])
  const[isLoading,setIsLoading] = useState(false)

  useEffect(()=>{
     const FetchCategories =async()=>{
        setIsLoading(true)
        try {
           const response =await GetAllCategories()

           setCategories(response)
        } catch (error) {
          Alert.alert(error)

          console.log(error)
        } finally{
          setIsLoading(false)
        }
     }

     FetchCategories()
  },[])
  return (
    <FlatList
       data={Categories}
       horizontal
       showsHorizontalScrollIndicator={false}
       keyExtractor={(item)=>item.$id}
       renderItem={({item})=>(
        <View className="mr-3 py-2 items-center justify-center px-4  rounded-md bg-[#E9F3EF]">
            <Text className="text-base text-gray-400 font-text-sm ">{item.name}</Text>
         </View>
       )}
    />
  )
}

export default Category