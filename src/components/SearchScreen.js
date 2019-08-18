import React,{useState,useEffect} from 'react'
import {View,Text,TextInput,StyleSheet,Image,ActivityIndicator,ScrollView} from 'react-native'
import {SearchBar} from './commons/index'
import api from '../apis/index'
import UseYelpHook from '../hooks/yelpHook'
import ResultList from './ResultList'

const SearchScreen=()=>{
    const [term,setTerm]=useState('')    
    const [OnFocus,onTermSubmit,results,renderError,renderLoading,loading]=UseYelpHook()
    const onTermChange=(term)=>{
        setTerm(term)
    }
    const filterResultsByPrice=(price)=>{
        return results.filter(x=> x.price===price&&x.image_url)
    }
    const showResults=()=>{
        if(!loading){
            const costEffective=filterResultsByPrice('$')
            const BitPricer=filterResultsByPrice('$$')
            const BigSpender=filterResultsByPrice('$$$')
             return(
            <ScrollView>
                 {costEffective.length>0?<ResultList results={filterResultsByPrice('$')} title='Cost Effective'></ResultList>:null}
                 {BitPricer.length>0?<ResultList results={filterResultsByPrice('$$')} title='Bit Pricier' ></ResultList>:null}
                 {BigSpender.length>0?<ResultList results={filterResultsByPrice('$$$')} title='Big Spender' ></ResultList>:null}
            </ScrollView>
             )
        }
    }
    return(
        
              <View style={{flex:1}}>
                <SearchBar onFocus={OnFocus} term={term} onTermSubmit={()=>onTermSubmit(term)} onTermChanged={onTermChange}></SearchBar>
                 {renderLoading()} 
                 {renderError()}
                 {showResults()}
              </View>

        
      
    )
}


export default SearchScreen