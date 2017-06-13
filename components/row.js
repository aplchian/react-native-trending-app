import React from 'react'
import { View, Text } from 'react-native'
import { wrap } from 'react-native-style-tachyons'
import { Link } from 'react-router-native'
import { type, drop } from 'ramda'
const Row = props => {
  
  return (
    <Link to={`/show/?url=${props.url}&title=${props.title}`}>
      <View cls="jcc aifs bb">
        <Text cls="f5 pv2 mh2">{drop(9, props.title)}</Text>
      </View>
    </Link>
  )
}

export default wrap(Row)
