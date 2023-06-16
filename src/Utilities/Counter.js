import React,{useState} from "react"
import {View,Text,StyleSheet, Button} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Counter = () => {
  const [count,setcount] = useState(0)
    return(
       <View style = {styles.container}> 
        <Text style = {styles.title}>count: {counter}</Text>
        <Button title= {"Increase the count"} color={'red'} onPress={() =>  setcount(count + 1)
        }/>
         <Button title= {"Decrease the count"} color={'green'} onPress={() =>setcount(count - 1)
        }/>
       </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'orange'
        },
        title:{
            fontSize:25,
            marginTop:25,
            alignSelf:'center'
        }
        }


)
export default Counter