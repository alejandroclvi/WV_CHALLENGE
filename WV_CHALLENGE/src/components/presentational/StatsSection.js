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

export default ({ title, data, last}) => 
    <View style={last?styles.lastCotainer:styles.container}>
        <Text style={styles.value}>{data}</Text>
        <Text style={styles.title}>{title}</Text>
    </View>
    
    

const styles = StyleSheet.create({
    container: {
        height:'70%',
        width:'33%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        borderRightWidth:1,
        borderColor:'#d6d6d6'
    },
    lastCotainer: {
        height:'70%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width:'33%',
    },
    value: {
        fontWeight:'bold'
    },
    title: {
        color:'#d6d6d6'
    }
})