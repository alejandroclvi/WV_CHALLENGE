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


export default ({ title, city, country }) => 
    <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{`${city}, ${country}`}</Text>
    </View>
    
    

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginLeft:10
    },
    text: {
        color:'white'
    }
})