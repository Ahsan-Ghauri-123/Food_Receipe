// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../../app/(tabs)/Screens/SplashScreen';
import HomeScreen from '../../app/(tabs)/Screens/HomeScreen';
import AllMealsScreen from "../../app/(tabs)/Screens/AllMealsScreen";
import AllVideoDetailScreen from "../../app/(tabs)/Screens/AllVideoDetailScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AllMealsScreen" component={AllMealsScreen} />
        <Stack.Screen name="AllVideoDetailScreen" component={AllVideoDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;