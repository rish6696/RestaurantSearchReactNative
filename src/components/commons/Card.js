import React from 'react';
import { Text,View,StyleSheet } from 'react-native';

const Card=(props)=>{
    return(
        <View style={style.container} >
             {props.children}
        </View>
    
    )
}
const style=StyleSheet.create({
    container:{
        borderWidth:1,
        borderRadius:3,
        borderColor:'#ddd',
        borderBottomWidth:0,
        elevation:6,
        marginLeft:5,
        marginRight:5,
        marginTop:10
    }

})



export {Card}
