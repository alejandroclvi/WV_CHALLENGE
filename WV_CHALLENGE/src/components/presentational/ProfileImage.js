/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
} from 'react-native'

const customRoundedImgRadius = 100

export default ({  }) => 
    <Image style={styles.image} source={require('../../resources/images/profile-pic.jpg')}/>
    
    

const styles = StyleSheet.create({
    image: {
        width: customRoundedImgRadius,
        height: customRoundedImgRadius,
        borderRadius: customRoundedImgRadius / 2,
    }
})