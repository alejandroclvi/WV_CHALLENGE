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
    this.state = {
      filter:'FUTURE',
      loading:false
    }
  }

  componentDidUpdate() {
    if(this.state.loading) {
      setTimeout(() => this.setState({loading:false}), 500)
    }
  }

  getSections = (data) => data.map(section => section.section)

  handleTap = (filter, loading) => this.setState({filter, loading})

  render() {
    const { data } = this.props
    const { filter, loading } = this.state
    return (
      <View style={styles.container}>
        <CalendarHeader active={filter} sections={this.getSections(data)} onTap={this.handleTap} />
        <CalendarList data={data} active={filter} loading={loading} />
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
