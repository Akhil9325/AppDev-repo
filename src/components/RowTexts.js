import React from "react"
import { View,Text,StyleSheet } from "react-native"

const RowTexts = (props) => {
    const {body1styles,body2styles,messageone,messagetwo,containerstyles} = props
    return(
        <View style = {containerstyles}>
           <Text style = {body1styles}>{messageone}</Text>
           <Text style = {body2styles}>{messagetwo}</Text>
        </View>

    )
}
const styles = StyleSheet.create(
    {
        container:{
            alignItems:'center'
        }
    }
)

export default RowTexts