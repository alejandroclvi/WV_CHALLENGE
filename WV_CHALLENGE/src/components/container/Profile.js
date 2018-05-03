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
import { getUserData, getUserStats } from '../../api/API'

export default ({}) =>
  <View style={styles.container}>
    <CustomImgBackground />
    <ProfileImage />
    <Text style={styles.profileName}> Manuel Calvino </Text>
    <ProfileStatsBar data={getUserStats}/>
    <Calendar data={getUserData} />
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
