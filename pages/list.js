import React from 'react'
import Header from '../containers/headers'
import Repos from '../containers/repos'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'




class List extends React.Component {
  componentDidMount() {
    //getLatestTrneds
    //get the top showHN
    //dispatch to redux
    const getTrendingRepos = (dispatch) => {
      return fetch('https://runkit.io/twilson63/58f64c0ce5dc270012c6eaa6/branches/master')
              .then(res => res.json())
              .then(repos => dispatch({
                type: 'SET_REPOS', payload: repos
              }))
    }
    this.props.dispatch(getTrendingRepos)
    console.log('list props', this.props)
  }

  render() {

    return (
      <View>
        <Header {...this.props} />
        <Repos dataSource={this.props.dataSource} />
      </View>
    )
  }
}

const connector = connect(state => state)

export default connector(List)
