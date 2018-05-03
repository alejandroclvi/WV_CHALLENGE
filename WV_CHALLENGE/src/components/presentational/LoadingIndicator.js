import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator
} from 'react-native'

export default ({loading}) => 
    <View style={styles.container}>
            <ActivityIndicator
                loading={loading}
                size='small'
                color='lightblue'
            />
    </View>

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    }
})