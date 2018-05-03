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
import ProfileImage from './ProfileImage'
import TripDetails from './TripDetails'
import CalendarDate from './CalendarDate'

export default ({  }) => 
    <View style={styles.container}> 
        <View style={styles.smallContainer}>
            <ProfileImage small={true}/>
            <TripDetails />
        </View>
        <View style={styles.smallContainer}>
            <CalendarDate />
        </View>
    </View>
    
    

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:140,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:20,
        paddingRight:20
    },
    smallContainer: {
        height:'50%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
})