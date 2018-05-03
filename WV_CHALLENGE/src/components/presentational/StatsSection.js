/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

export default ({  }) => 
    <View style={styles.container}>
        <Text style={styles.value}>33</Text>
        <Text style={styles.title}>followers</Text>
    </View>
    
    

const styles = StyleSheet.create({
    container: {
        height:'100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    }
})