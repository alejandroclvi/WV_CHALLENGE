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

export default ({ small }) => 
    <Image style={small?styles.smallImage:styles.image} source={require('../../resources/images/profile-pic.jpg')}/>
    
    

const styles = StyleSheet.create({
    image: {
        zIndex:1,
        width: customRoundedImgRadius,
        height: customRoundedImgRadius,
        borderRadius: customRoundedImgRadius / 2,
    },
    smallImage: {
        zIndex:1,
        width: customRoundedImgRadius / 2,
        height: customRoundedImgRadius / 2,
        borderRadius: customRoundedImgRadius / 4,
    }
})