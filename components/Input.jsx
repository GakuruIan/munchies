import React,{useState} from 'react';
import { View,Text,TextInput, TouchableOpacity } from 'react-native';

import {  EyeIcon,EyeSlashIcon } from 'react-native-heroicons/outline'

const Input = ({value,handleChange,secure,PreIcon,PostIcon,placeholder,label}) => {
    const [showPassword,setShowPassword] = useState(false);


    return (
        <View className="mb-4">
            <Text className="text-base text-gray-400 mb-2">{label}</Text>
            <View className="flex-row items-center px-2 py-3 border border-gray-400 w-full rounded-md">
                <PreIcon color="#221" scale={20}/>
                <TextInput placeholder={placeholder}  
                  className="ml-2 flex-1"
                  secureTextEntry={secure && !showPassword}
                  value={value}
                  onChangeText={handleChange}
                />
                

                { PostIcon && 
                 
                 <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
                     {
                        showPassword ? <EyeIcon color="#221"/> : <EyeSlashIcon color="#221"/>
                     }
                 </TouchableOpacity>
                }
            </View>
         </View>
    );
}



export default Input;
