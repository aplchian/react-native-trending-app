import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { wrap } from 'react-native-style-tachyons'
import { Constants } from 'expo'
import { Link } from 'react-router-native'
import qs from 'querystring'
import { tail, replace, concat, pathOr } from 'ramda'
import { connect } from 'react-redux'
import { Octicons } from '@expo/vector-icons'


const saveRepo = (dispatch, getState) => {
  const { db, repo } = getState()
  db.post(repo)
    .then(res => {
      if(res.ok){
        history.push('/')
      }
    })
    .catch(err => console.log('err', err))
}

const getReadMe = (url, title) => (dispatch) => {
  return fetch(url).then(res => res.text()).then(readme => dispatch({type: 'SET_REPO', payload: { readme, url, title }}))
}
class Show extends React.Component {
  componentDidMount() {
    const { url, title } = qs.parse(tail(this.props.location.search))
    const readMeUrl = concat(replace('https://github.com', 'https://raw.githubusercontent.com', url), '/master/README.md')
    this.props.dispatch(getReadMe(readMeUrl, title))
  }

  
  render() {
    return (
      <View cls="jcsb" style={{ paddingTop: Constants.statusBarHeight }}>
        <View cls="h3 bg-lightgray jcsb aic flx-row">
          <Text cls="ml2 f4"><Text>{pathOr('', ['props', 'repo', 'title'], this)}</Text></Text>
          <TouchableOpacity>
            <Octicons name="bookmark" onPress={() => this.props.dispatch(saveRepo(this.props.history))} />
          </TouchableOpacity>
          <Link to="/">
            <Text cls='mr2'>close</Text>
          </Link>
        </View>
        <ScrollView cls='ma2 h5'>
          <Text>{pathOr('', ['props', 'repo', 'readme'], this)}</Text>
        </ScrollView>
        <View cls='absolute bottom-0 left-0 right-0 h3 bg-lightgray jcsb aic'>
          <Text>Footer</Text>
        </View>
      </View>
    )
  }
}

const connector = connect(state => state)

export default connector(wrap(Show))
