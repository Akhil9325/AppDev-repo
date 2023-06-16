import React from "react"
import {View,Text,StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'
import RowTexts from "../components/RowTexts"


const Currentweather = () => {
  const {container,wrapper,temp,feels,highlowwrapper,highlow,bodywrapper,descr} = styles
  return (
    <SafeAreaView style = {wrapper}>
    <View style = {container}>
    <Feather name="sun" size={48} color="black" />
       <Text style = {temp}>6</Text>
       <Text style = {feels}>feels like 5</Text> 
    <RowTexts containerstyles = {highlowwrapper} messageone = {'High: 8'} messagetwo = {'Low: 6'} body1styles = {highlow} body2styles = {highlow}/>
    </View>
    <RowTexts containerstyles = {bodywrapper} messageone = {'Its very sunny'} messagetwo = {'Its t-shirt weather'} body1styles = {descr} body2styles = {descr} />
    
    </SafeAreaView>
   
  )}
const styles = StyleSheet.create(
   {
container : {
  alignItems:'center',
  flex:1,
  justifyContent:'center'
},
wrapper:{
  backgroundColor:'pink',
  flex:1}
  ,
  temp:{
    color:'black',
    fontSize:48
  },
  feels:{
    fontSize:30,
    color:'black'
  },
  highlow:{
    color:'black',
    fontSize:20
  },
  highlowwrapper:{
    flexDirection:'row'
  },
  bodywrapper:{
    justifyContent:'flex-start',
    alignItems:'flex-start',
    paddingLeft:25,
    marginBottom:40
  },
  descr:{
    fontSize:30
  }
}
)
export default Currentweather