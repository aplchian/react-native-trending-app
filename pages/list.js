import React from 'react'
import Header from '../containers/headers'
import Repos from '../containers/repos'
import { StyleSheet, Text, View } from 'react-native'

class List extends React.Component {
  componentDidMount() {
    //getLatestTrneds
  }

  render() {
    return (
      <View>
        <Header />
        <Repos />
      </View>
    )
  }
}

export default List
