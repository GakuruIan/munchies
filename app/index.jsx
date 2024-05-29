import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {ScrollView, Text, View, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import pizza from '../assets/images/pizza.png'

const App = () => {
  return (
     <SafeAreaView className="h-full bg-white">
       <ScrollView contentContainerStyle={{height:"100%"}}>
          <View className="items-center justify-center h-full gap-y-4">
             <Image
               source={pizza}
               resizeMode="contain"
               className="h-44 w-44 object-fit"
              />
             <Text className="text-5xl font-intro text-[#410C00]">Munchies</Text>

             <Link href="/edit">Register</Link>
          </View>
        <StatusBar style='auto' backgroundColor='#FFF'/>
       </ScrollView>
     </SafeAreaView>
  );
}

export default App