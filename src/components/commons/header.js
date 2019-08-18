import React from 'react';
import { Text,View } from 'react-native';

const Header=(props)=>{
    return(
        <View style={{backgroundColor:'#F8F8F8',
         alignItems:'center',
         justifyContent:'center',
         height:60,
         paddingTop:15,
         elevation:5,
         position:'relative'
         }}>
            <Text style={{fontSize:35,color:'black'}}>{props.text}</Text>
        </View>
    )
}


export {Header}
