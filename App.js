import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import NavBar from './components/NavBar';
import CreateBook from './screens/CreateBook';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{gestureEnabled: true,  swipeEnabled: true}}>
      <Stack.Screen name="Home" options={{
        headerShown: false,  swipeEnabled: false, navIconColor : 'black'
      }} component={HomeScreen} />
      <Stack.Screen name="Settings" options={{
        headerShown: true,  swipeEnabled: false, navIconColor : 'black'
      }} component={SettingsScreen} />
       <Stack.Screen name="Create Book" options={{
        headerShown: true,  swipeEnabled: false, navIconColor : 'black'
      }} component={CreateBook} />
      </Stack.Navigator>
      <NavBar/>
    </NavigationContainer>
  )
}