/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  FlatList,
  View
} from 'react-native'
import Trip from './Trip'

let index = 0;

export default ({  }) => 
    <FlatList
        data={['papa', 'coca cola', 'papa', 'pi']}
        renderItem={({item}) =>  <Trip /> }
        keyExtractor={() => (index++).toString() }
    />  

