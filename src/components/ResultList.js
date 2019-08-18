import React from 'react'
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import ResultDetails from './resultDetails'
import {withNavigation} from 'react-navigation'

class ResultList extends React.Component {  
    renderItems=({item})=>{
        return (
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Result',{id:item.id})}>
            <ResultDetails image_url={item.image_url}
             name={item.name}
             reviews={item.review_count}
             ratings={item.rating} />
        </TouchableOpacity>
        )
    }
    render(){

        return(
            <View>
                <Text style={style.TitleStyle}>{this.props.title}</Text>
                <FlatList
                 horizontal={true}
                 data={this.props.results}
                 keyExtractor={(result)=>result.id}
                 showsHorizontalScrollIndicator={false}
                 renderItem={this.renderItems}/>
            </View>
        )
    }
     
}

const style=StyleSheet.create({
    TitleStyle:{
      fontSize:25,
      fontWeight:'bold',
      margin:10
    }
})
export default withNavigation(ResultList)