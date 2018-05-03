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

export default ({ data }) => 
    <View style={styles.container}>
        <View style={styles.sectionsContainer}>
            {
                data.map((section, index) => <StatsSection title={section.section} key={section.section} data={section.data} last={index===data.length-1} />)
            }
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
    }
})