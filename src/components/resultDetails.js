import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'

class ResultDetails extends React.Component{
    
     render(){
        console.log(this.props.image_url)
         return(
            <View style={styles.container}>
              <Image style={styles.image} source={{uri:this.props.image_url}} ></Image>
              <Text style={styles.name} >{this.props.name}</Text>
              <Text style={styles.description}>{this.props.ratings} stars,{this.props.reviews} reviews</Text>
           </View>
         )
     }

 }

 const styles=StyleSheet.create({
     container:{
         margin:10
     },
     image:{
         height:150,
         width:'100%'
     },
     name:{
         fontWeight:'bold',
         fontSize:20,
         margin:4
     },
     description:{
         color:'gray',
         fontSize:15,
         margin:4
     }
 })
export default ResultDetails