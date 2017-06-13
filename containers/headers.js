import React from 'react'
import {
  View,
  Text,
  ListView,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { Constants } from 'expo'
import { Octicons } from '@expo/vector-icons'
import { Link  } from 'react-router-native'

import { wrap } from 'react-native-style-tachyons'

const Header = () => {
  return (
    <View
      cls="h3 bg-lightgray jcsb aic flx-row"
      style={{ paddingTop: Constants.statusBarHeight }}
    >
      <TouchableOpacity>
        <Octicons name="mark-github" cls="f3 ml2" />
      </TouchableOpacity>
      <Text cls="black f4">GitHub Trends</Text>
      <Link to='./settings'>
        <Octicons name="gear" cls="f3 mr2" />
      </Link>
    </View>
  )
}



export default wrap(Header)
