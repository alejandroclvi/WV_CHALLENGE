/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

export default ({  }) => 
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.active}>
                <Text style={styles.title}>FUTURE</Text>
            </TouchableOpacity>
            <Text style={styles.title}>JOINED</Text>
            <Text style={styles.title}>PAST</Text>
        </View>
    </View>
    
    

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 35,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#dedede'
    },
    wrapper: {
        width:'80%',
        height:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    title: {
        fontSize:14,
        fontWeight:'bold',
        color:'#323438',
    },
    active: {
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        borderBottomWidth:3,
        borderBottomColor: '#739ac7'
    }
})