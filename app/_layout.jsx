import React,{useEffect} from 'react'

import {Stack} from 'expo-router'
import {useFonts} from 'expo-font'
import { SplashScreen } from 'expo-router'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from '../redux/store'

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

  const [loadedFonts,error] = useFonts({
    "LobsterTwo-Bold":require('../assets/fonts/LobsterTwo-Bold.ttf'),
    "SairaCondensed-Regular":require('../assets/fonts/SairaCondensed-Regular.ttf'),
    "BarlowCondensed-Bold":require('../assets/fonts/BarlowCondensed-Bold.ttf'),
    "BarlowCondensed-Regular":require('../assets/fonts/BarlowCondensed-Regular.ttf')
  })

  useEffect(()=>{
      if(error) throw error

      if(loadedFonts){
        SplashScreen.hideAsync()
      }
  },[loadedFonts,error])

  if (!loadedFonts) {
    return null;
  }

  if (!loadedFonts && !error) {
    return null;
  }

 
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{headerShown:false}}/>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(food)"  options={{headerShown:false}} />
        </Stack>
      </PersistGate>
    </Provider>
  )
}

export default RootLayout