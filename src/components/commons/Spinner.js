import React from 'react';
import {Text,View,ActivityIndicator,StyleSheet} from 'react-native';

const Spinner=(props)=>{
    return(
        <View>
            <ActivityIndicator size={props.size||'large'}/>
        </View>
    )
}

const styles=StyleSheet.create({
    spinnerStyle:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    }
})

export {Spinner}