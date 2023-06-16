import React from 'react'
import { View,Text,StyleSheet,ImageBackground ,StatusBar} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import {Feather} from '@expo/vector-icons'
import IconItems from '../components/IconItems'

const City = () =>{
    return(
        <SafeAreaView style = {styles.container}>
            <ImageBackground source = {require('weatherapp/assets/CityBackground.jpg')} style = {styles.imagelayout}>
               <View>
                 <Text style = {styles.cityname}>London</Text>
                <Text style = {styles.countryname}>UK</Text>
                </View>
                <View style = {[styles.poplnwrapper,styles.rowlayout]}>
                   <IconItems iconname = {'user'} iconcolor = {'red'} body = {8000} bodystyles = {styles.poplntext} /> 
                </View>
                <View style = {[styles.setwrapper,styles.rowlayout]}>
                <Feather name="sunrise" size={50} color="white" />
                <Text style = {styles.suntext}>10:46:58 AM </Text>
                <Feather name = "sunset" size = {50} color = 'white'/>
                    <Text style = {styles.suntext}>17:28:15 PM</Text>
                </View>
                </ImageBackground>
        </SafeAreaView>
        
    )

    }   

const styles = StyleSheet.create(
    {
        container:{
            flex:1
        },
        imagelayout:{
            flex:1
        },
        cityname:{
            justifyContent:'center',
            alignSelf:'center',
            fontSize:40,
            fontWeight:'bold',
            color:'white'
        },
        countryname:{
            justifyContent:'center',
            alignSelf:'center',
            fontSize:30,
            fontWeight:'bold',
            color:'white'
        },
        poplnwrapper:{
            alignItems:'center',
            marginTop:30
        },
        poplntext:{
            fontSize:25,
            marginLeft:7.5,
            color:'red'
        
        },
        setwrapper:{
            justifyContent:'space-around',
            marginTop:30
        },
        suntext:{
            fontSize:20,
            color:'white'
            
        },
        rowlayout:{
               flexDirection:'row',
            justifyContent:'center'
        }

    }

)
export default City