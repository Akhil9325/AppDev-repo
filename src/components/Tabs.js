import React from 'react'
import { View,Text,StyleSheet,SafeAreaView } from 'react-native'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Feather} from '@expo/vector-icons'
const Tab = createBottomTabNavigator()

const Tabs = () => {
    return(
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor:'tomato',
            tabBarInactiveTintColor:'grey',
            headerTitleStyle:{
              fontWeight:'bold',
              fontSize:25,
              color:'tomato'
            },
            headerStyle:{
              backgroundColor:'lightblue'
            },
            tabBarStyle:{
              backgroundColor:'lightblue'
            }
           }}>
              <Tab.Screen name = {"Current"} component = {CurrentWeather} options={{
                tabBarIcon:({focused}) => <Feather name="droplet" size={24} color={focused ? 'tomato':'black'} />
              }}/>
              <Tab.Screen name = {"Upcoming"} component = {UpcomingWeather} options={{
                tabBarIcon:({focused}) => <Feather name="clock" size={24} color={focused ? 'tomato':'black'} />
              }} />
              <Tab.Screen name = {"City"} component = {City} options={{
                tabBarIcon:({focused}) => <Feather name="home" size={24} color={focused ? 'tomato':'black'} />
              }}/>
    
          </Tab.Navigator>
    )
}
export default Tabs