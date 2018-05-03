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


export default ({ month, day }) => 
    <View style={styles.container}>
        <Text style={styles.day}>{day}</Text>
        <Text style={styles.month}>{month}</Text>
    </View>
    
    

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    day: {
        fontSize:16,
        color:'red',
        fontWeight:'bold'
    },
    month: {
        color:'white',
        fontSize:16,
    }
})