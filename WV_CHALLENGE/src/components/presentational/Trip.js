/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import BackgroundImg from './BackgroundImg'

export default ({  }) => 
    <View style={styles.container}>
        <BackgroundImg />
    </View>
    
    

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:140,
        backgroundColor:'grey'
    }
})