import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import List from './pages/list'
import NativeTachyons from 'react-native-style-tachyons'
import Settings from './pages/settings'
import Show from './pages/show'
import { NativeRouter, Route, Switch } from 'react-router-native'

NativeTachyons.build(
  {
    rem: 16
  },
  StyleSheet
)

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <Route exact path="/" component={List} />
          <Switch>
            <Route path="/settings" component={Settings} />
            <Route path="/:id" component={Show} />
          </Switch>
        </View>
      </NativeRouter>
    )
  }
}
