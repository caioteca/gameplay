import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {
  Inter_400Regular,
  Inter_500Medium,
  useFonts,
} from '@expo-google-fonts/inter';
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';
import { Background } from './src/components/Background';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepareApp = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
          setAppIsReady(true);
        }
      } catch (error) {
        console.warn('Error while preparing the app:', error);
      }
    };

    prepareApp();
  }, [fontsLoaded]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Background>
      <StatusBar backgroundColor="transparent" translucent />
      <Routes />
    </Background>
  );
}
