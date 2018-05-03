/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  View
} from 'react-native'

const customRoundedImgRadius = 800
const initialCircleOffSet = 100

export default ({  }) => 
    <View style={styles.backgroundedCustomImg}>
        <Image style={styles.image} source={require('../../resources/images/default-background-img.jpg')}/>
    </View>
    
const styles = StyleSheet.create({
    backgroundedCustomImg: {
        zIndex:-1,
        width:'100%',
        position:'absolute',
        top: - (customRoundedImgRadius / 2) - 290,
        flexDirection:'column',
        alignItems:'center'
    },
    image: {
        width: customRoundedImgRadius,
        height: customRoundedImgRadius,
        borderRadius: customRoundedImgRadius / 2,
    }
})