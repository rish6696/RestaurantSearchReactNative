import api from '../apis/index';
import React,{useEffect,useState} from 'react'
import {View,Text,TextInput,StyleSheet,Image,ActivityIndicator} from 'react-native'


export default ()=>{
    const [results,setResults]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState('')

    const onTermSubmit=(toSearch)=>{
        setLoading(true) 
        api.get('/search',{
            params:{
                limit:50,
                term:toSearch,
                location:'san jose'
            }
        })
        .then(x=>x.data.businesses)
        .then(x=>{
              setLoading(false)
              setResults(x)
        })
        .catch(err=>{
            console.log(err)
           setLoading(false)
           setError('Error can Process Right Now')

        })
    }
    
   const OnFocus=()=>{
    setError('')
   }
  
   useEffect(()=>{
    onTermSubmit('pasta')
    },[])
    const renderLoading=()=>{
        if(loading){
            return(
                <ActivityIndicator size='large'  />
            )
        }
    }
    
    const renderError=()=>{
        if(error){
           return( <Text>{error}</Text>)
        }
    }
    return [OnFocus,onTermSubmit,results,renderError,renderLoading,loading]
}