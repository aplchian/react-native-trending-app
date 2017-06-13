import React from 'react'
import { View, Text } from 'react-native'
import { wrap } from 'react-native-style-tachyons'
import { Link } from 'react-router-native'

const Row = props => {
  return (
    <Link to="/:id">
      <View cls="jcc aic bb">
        <Text cls="f3 pv2">{props.name}</Text>
      </View>
    </Link>
  )
}

export default wrap(Row)
