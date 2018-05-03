/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import ProfileHeader from './components/container/ProfileHeader'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProfileHeader />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  test: {
    height:50,
    width:50,
    backgroundColor:'yellow'
  }
})
