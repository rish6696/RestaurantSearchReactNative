import React,{useState,useEffect}from 'react'
import {View,Text,Image} from 'react-native'
import yelp from '../apis/index'
import { FlatList } from 'react-native-gesture-handler';

const ResultsShowScreen=({navigation})=>{
    const id =navigation.getParam('id')
    const [result,setResult]=useState(null)
    console.log(result)

    const getResult=(id)=>{
        yelp.get(`${id}`)
        .then(x=>x.data)
        .then(x=>setResult(x))
    }
    useEffect(()=>{
        getResult(id)
    },[])
    if(!result){
        return null
    }
    const renderItems=({item})=>{
        return(
            <Image source={{uri:item}} style={{height:300,width:'100%'}}/>
        )
    }
    return (
        <FlatList
        keyExtractor={(x)=>x}
        renderItem={renderItems}
        data={result.photos}/>
    )
  
  }
export default ResultsShowScreen