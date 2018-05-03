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
  View
} from 'react-native'
import CustomImgBackground from '../presentational/CustomImgBackground'
import ProfileImage from '../presentational/ProfileImage'
import ProfileStatsBar from '../presentational/ProfileStatsBar'
import Calendar from './Calendar'

const DATA = [
  { 
    section:'FUTURE', 
    data: [
      {day:15, month:'July', city:'Los Angeles', country:'United States'}
    ]
  },
  { 
    section:'JOINED', 
    data: [
      {day:15, month:'July', city:'Los Angeles', country:'United States'}
    ]
  },
  { 
    section:'PAST', 
    data: [
      {day:15, month:'July', city:'Los Angeles', country:'United States'}
    ]
  },
]

const STATS = [
  {
    section:'followers',
    data:33
  },
  {
    section:'following',
    data:80
  },
  {
    section:'trips',
    data:9
  }
]

export default ({}) =>
  <View style={styles.container}>
    <CustomImgBackground />
    <ProfileImage />
    <Text style={styles.profileName}> Manuel Calvino </Text>
    <ProfileStatsBar data={STATS}/>
    <Calendar data={DATA} />
  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    flexDirection:'column',
    alignItems:'center',
    paddingTop:40
  },
  profileName: {
    marginTop:15,
    marginBottom:5,
    fontWeight:'bold',
    fontSize:16,
    color:'#323438'
  }
})
