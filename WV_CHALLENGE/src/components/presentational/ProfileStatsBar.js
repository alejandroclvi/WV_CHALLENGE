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
import StatsSection from './StatsSection'

export default ({  }) => 
    <View style={styles.container}>
        <View style={styles.sectionsContainer}>
            <StatsSection />
            <StatsSection />
            <StatsSection />
        </View>
    </View>
    
    

const styles = StyleSheet.create({
    container: {
        width:'80%',
        height:60,
        justifyContent:'center',
        alignItems:'center'
    },
    sectionsContainer: {
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around'
    }
})