import React from 'react'

import { wrap } from 'react-native-style-tachyons'
import { connect } from 'react-redux'
import { Constants } from 'expo'
import { View, Text, ListView, TouchableOpacity } from 'react-native'
import { pluck } from 'ramda'
import { Octicons } from '@expo/vector-icons'

import Row from '../components/row'

class Bookmarks extends React.Component {
  componentDidMount() {
    const getBookmarks = (dispatch, getState) => {
      console.log('dispatch', dispatch)
      const { db } = getState()
      return db.allDocs({ include_docs: true }).then(res => {
        dispatch({ type: 'SET_BOOKMARKS', payload: pluck('doc', res.rows) })
      })
    }
    this.props.dispatch(getBookmarks)
  }
  render() {
    console.log('props', this.props)
    return (
      <View style={{ paddingTop: Constants.statusBarHeight }}>
        <View
          cls="flx-row h3 bg-lightgray jcsb aic"
          style={{ paddingTop: Constants.statusBarHeight }}
        >
          <TouchableOpacity>
            <Octicons name="mark-github" cls="f3 ml2" />
          </TouchableOpacity>
          <Text cls="black f4 aic jcc">Bookmarks</Text>
        </View>
        <ListView
          enableEmptySections
          dataSource={this.props.bookmarks}
          renderRow={({ _id, ...docs }) => {
              console.log('docs', docs)
            return <Row key={_id} url={docs.url} title={docs.title} />
          }}
        />
      </View>
    )
  }
}

const connector = connect(state => state)

export default connector(wrap(Bookmarks))
