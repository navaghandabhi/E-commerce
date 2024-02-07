import { View, Text } from 'react-native'
import React from 'react'
import Home from '../Screens/Home';
import Search from '../Screens/Search';
import Profile from '../Screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: '#fff',
          borderRadius: 15,

        },
        tabBarShowLabel: false,
        // tabBarActiveBackgroundColor: '#E36414',
        tabBarActiveTintColor: '#2B2A4C',
        tabBarInactiveTintColor: '#6962AD',

        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home';
          let rn = route.name;

          if (rn === 'MyDashboard') {
            iconName = focused ? 'home' : 'home-outline'
          }
          else if (rn === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline'
          }
          else if (rn === 'Profile') {
            iconName = focused ? 'person' : 'person-outline'
          }
          return <Icon name={iconName} size={size} color={color}></Icon>
        },
        tabBarLabelStyle: {
          fontSize: 18,
          paddingBottom: 4,
        }
      })}
    >
      <Tab.Screen name="MyDashboard" component={Home} options={{
        headerShown: false,
      }} />
      <Tab.Screen name="Settings" component={Search} options={{ headerShown: false, }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false, }} />
    </Tab.Navigator>
  )
}

export default BottomBar