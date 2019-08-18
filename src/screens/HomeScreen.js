import React from 'react';
import { Text, StyleSheet,View } from 'react-native';
import {Button} from '../components/commons/index'

import SearchScreen from '../components/SearchScreen'

const HomeScreen = (props) => {
  return(
    <View style={{flex:1}}>
      <SearchScreen></SearchScreen>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
