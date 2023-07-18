import React, { useState } from 'react';
import { StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainStack from './navigate';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const fonts = () => Font.loadAsync({
  'mt-bold': require('./assets/Poppins-Black.ttf'),
  'mt-light': require('./assets/Poppins-ExtraLightItalic.ttf')
});


export default function App() {
  const [font, setFont] = useState(false);

  if(font) {
    return (
      <MainStack/>
    );
  } else {
    return (
      <AppLoading 
        startAsync = {fonts} 
        onFinish = {() => setFont(true)} 
        onError = {console.warn}/>
    );
  }
}

const styles = StyleSheet.create({
  
});
