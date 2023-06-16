import React,{useState,useEffect} from 'react'
import { View,Text,StyleSheet,SafeAreaView,ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import * as Location from 'expo-location';
import {WEATHER_API_KEY} from "@env"
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
const app = () => {
  const [loading,setloading] = useState(true)
  const [error,setError] = useState(null)
  const [Weather,setWeather] = useState([])
  const [lat,setLat] = useState([])
  const [lon,setLon] = useState([])
 
  const fetchweatherdata = async() =>{
    try{
      const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
      const data  = await res.json()
      setWeather(data)
    }
    catch(error){
      setError('could not fetch weather')
    }
    finally{
      setloading(false)
    }
   
  }
   useEffect(() => {;(async() =>{
    let {status}= await Location.requestForegroundPermissionsAsync()
    console.log(status,'s')
    if(status !== 'granted'){
      setError('permission for location was denied')
      return
    }
    let location = await Location.getCurrentPositionAsync({})
    setLat(location.coords.latitude)
    setLon(location.coords.longitude)
    await fetchweatherdata()
    })()},[lat,lon])

    if(Weather){
      console.log(Weather)
    }
 
if(loading){
  return(
    <View style = {styles.container}>
      <ActivityIndicator size = 'large' color = 'lightblue'/>
    </View>
  )
}

  return (
    <NavigationContainer>
       <Tabs />
    </NavigationContainer>


  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  }

})

export default app