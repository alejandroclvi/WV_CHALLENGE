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


export default ({ small }) => 
    <Image style={small?styles.smallImage:styles.image} source={require('../../resources/images/profile-pic.jpg')}/>
    
    

const styles = StyleSheet.create({
    container: {
    },
})