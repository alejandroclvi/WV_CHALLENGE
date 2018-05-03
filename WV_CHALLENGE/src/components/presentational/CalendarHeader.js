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
import CalendarHeaderTitle from './CalendarHeaderTitle'

export default ({ sections, active, onTap }) => 
    <View style={styles.container}>
        <View style={styles.wrapper}>
            {
                sections.map( section => <CalendarHeaderTitle active={active} section={section} onTap={onTap}/> )
            }
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
    }
})