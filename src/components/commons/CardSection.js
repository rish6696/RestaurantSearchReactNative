import React from 'react';
import { Text,View,StyleSheet } from 'react-native';

const CardSection=(props)=>{
    return(
        <View style={style.container} >
             {props.children}
        </View>
    
    )
}
const style=StyleSheet.create({
    container:{
        borderWidth:1,
        padding:5,
        backgroundColor:'#fff',
        borderColor:'#ddd'
    }

})



export {CardSection}
