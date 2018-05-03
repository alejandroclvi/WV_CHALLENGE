/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image
} from 'react-native'

export default ({  }) => 
    <Image source={require('../../resources/images/plane-wing.jpg')} style={styles.image}/>
    
    

const styles = StyleSheet.create({
    image: {
        width:'100%',
        height:'100%',
        zIndex:-1
    }
})