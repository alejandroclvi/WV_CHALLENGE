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

export default ({ city, country, title, month, day }) => 
    <View style={styles.container}> 
        <BackgroundImg />
        <View style={styles.wrapper}>
            <View style={styles.detailsContainer}>
                <ProfileImage small={true}/>
                <TripDetails city={city} country={country} title={title} />
            </View>
            <View style={styles.dateContainer}>
                <CalendarDate day={day} month={month} />
            </View>
        </View>
    </View>
    
    

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:140,
    },
    detailsContainer: {
        height:'50%',
        width:'80%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    dateContainer: {
        height:'50%',
        width:'20%',
        justifyContent:'center',
        alignItems:'center'
    },
    wrapper: {
        paddingLeft:20,
        paddingRight:5,
        paddingTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    }
})