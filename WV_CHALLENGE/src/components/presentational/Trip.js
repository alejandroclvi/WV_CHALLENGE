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
        <BackgroundImg />
        <View style={styles.wrapper}>
            <View style={styles.smallContainer}>
                <ProfileImage small={true}/>
                <TripDetails />
            </View>
            <View style={styles.smallContainer}>
                <CalendarDate />
            </View>
        </View>
    </View>
    
    

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:140,
    },
    smallContainer: {
        height:'50%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    wrapper: {
        paddingLeft:20,
        paddingRight:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    }
})