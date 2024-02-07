import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductDetails from '../Screens/ProductDetails';
import BottomBar from './BottomBar';

export type RootStackParamList = {
  Home: undefined;
  ProductDetails: undefined;
}
const Stack = createNativeStackNavigator();

function MyStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BottomBar'>
        <Stack.Screen name='BottomBar' component={BottomBar} options={{ headerShown: false }} />
        <Stack.Screen name='ProductDetails' component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default MyStackNavigation