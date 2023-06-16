import React from "react"
import { View,Text,StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import {Feather} from '@expo/vector-icons'

const IconItems = (props) => {
    const{iconname,iconcolor,body,bodystyles} = props
    return(
    <SafeAreaView><View style = {styles.container}>
    <Feather name={iconname} size={50} color={iconcolor} />
    <Text style = {[styles.icontext,bodystyles ]}>{body}</Text> 
</View></SafeAreaView>
    )
}
const styles = StyleSheet.create(
    {
        icontext:{
            fontWeight:'bold'
        },
        container:{
            flexDirection:'row',
          
        }
    }
)
export default IconItems