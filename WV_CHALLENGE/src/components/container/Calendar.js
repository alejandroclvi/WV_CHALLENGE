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
import CalendarList from '../presentational/CalendarList'
import CalendarHeader from '../presentational/CalendarHeader'

export default class TripCalendar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CalendarHeader />
        <CalendarList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    flex:1,
    backgroundColor:'white'
  }
})
