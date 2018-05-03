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
    <View style={styles.backgroundedCustomImg}>
        <Image source={require('../../resources/images/plane-wing.jpg')} style={styles.image}/>
    </View>
    
    

const styles = StyleSheet.create({
    backgroundedCustomImg: {
        width:'100%',
        zIndex:-1
    },
    image: {
        width:'100%',
        height:'100%',
    }
})