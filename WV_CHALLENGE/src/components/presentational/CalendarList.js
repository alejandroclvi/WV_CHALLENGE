/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  FlatList,
  View,
  ActivityIndicator
} from 'react-native'
import Trip from './Trip'
import LoadingIndicator from './LoadingIndicator'

let index = 0

export default ({ loading, data, active }) => 
    loading?
    <LoadingIndicator loading={loading} />
    :
    <FlatList
        data={data}
        renderItem={({item}) =>  <Trip /> }
        keyExtractor={() => (index++).toString() }
    />  

