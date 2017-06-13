import React from 'react'
import { View, Text, ListView } from 'react-native'
import Row from '../components/row'
import { wrap } from 'react-native-style-tachyons'

const Repos = props => {
  return (
    <ListView
      cls="mt2"
      dataSource={props.dataSource}
      enableEmptySections
      renderRow={({ id, ...repo }) => {
        return <Row key={id} id={id} {...repo} />
      }}
    />
  )
}

export default wrap(Repos)
