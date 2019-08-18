import React from 'react'
import {View,Image,TextInput,StyleSheet} from 'react-native'

class SearchBar extends React.Component{
    render(){
        return(
            <View style={style.Container}>
              <Image style={style.SearchIcon} source={require('../../assests/search.png')} ></Image>
              <TextInput onFocus={this.props.onFocus} onEndEditing={this.props.onTermSubmit} placeholder='Search' value={this.props.term} onChangeText={this.props.onTermChanged} style={style.Input}></TextInput>
             </View>
        )
    }
 }
 const style=StyleSheet.create({
    Container:{
        backgroundColor:'#F0EEEE',
        margin:10,
        borderRadius:5,
        flexDirection:'row'
    },
    Input:{
        flex:1,
        fontSize:20
    },
    SearchIcon:{
        margin:10
    }
})
export  {SearchBar}