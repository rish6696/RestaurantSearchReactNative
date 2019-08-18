import React from 'react';
import { Text,StyleSheet,TouchableOpacity} from 'react-native'

const Button=(props)=>{
    return(
        <TouchableOpacity onPress={props.onPress} style={style.touchable}>
            <Text style={style.text}>{props.children}</Text>
        </TouchableOpacity>
    )
}

const style=StyleSheet.create({
    touchable:{
      
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#fff',
       borderRadius:5,
       borderWidth:1,
       marginLeft:5,
       marginRight:5,
       marginBottom:3,
       borderColor:'#007aff',
       padding:5
    },
    text:{
        color:'#007aff',
        fontSize:26,
        fontWeight:"600",
        alignSelf:'center'
    }
})

export {Button}