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

  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      filter:'FUTURE',
      data:data,
      visibleData:this.getVisibleData(data,'FUTURE'),
      loading:false
    }
  }

  componentDidUpdate() {
    console.log(this.state.visibleData)
    if(this.state.loading) {
      setTimeout(() => this.setState({loading:false}), 500)
    }
  }

  getVisibleData = (data, active) => {
    let relevantData = []
    for(let section of data) {
        if(section.section === active) {
          relevantData.push(...section.data)
        }
    }
    console.log(relevantData)
    return relevantData
  }

  getSections = (data) => data.map(section => section.section)

  handleTap = (filter, loading) => this.setState({filter, loading})

  render() {
    const { filter, loading, data, visibleData } = this.state
    return (
      <View style={styles.container}>
        <CalendarHeader active={filter} sections={this.getSections(data)} onTap={this.handleTap} />
        <CalendarList data={visibleData} active={filter} loading={loading} />
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
