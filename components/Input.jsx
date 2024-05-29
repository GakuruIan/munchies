import React from 'react';
import { View,Text,TextInput } from 'react-native';

const Input = ({secure,PreIcon,PostIcon,placeholder,label}) => {
    return (
        <View className="mb-4">
            <Text className="text-base text-gray-400 mb-2">{label}</Text>
            <View className="flex-row items-center px-2 py-3 border border-gray-400 w-full rounded-md">
                <PreIcon color="#221" scale={20}/>
                <TextInput placeholder={placeholder}  className="ml-2 flex-1"/>
                
                { PostIcon && <PostIcon color="#444"/>}
            </View>
         </View>
    );
}



export default Input;
