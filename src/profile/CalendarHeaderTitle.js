/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

export default ({ active, section, onTap }) =>
    <TouchableOpacity onPress={ () => onTap(section, true)}>
        <View style={(active===section)?styles.active:styles.container}>
            <Text style={styles.title}>
                {section}
            </Text>
        </View>
    </TouchableOpacity> 

const styles = StyleSheet.create({
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
    },
    container: {
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
    }
})