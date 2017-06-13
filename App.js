import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import List from './pages/list'
import NativeTachyons from 'react-native-style-tachyons'
import Settings from './pages/settings'
import Show from './pages/show'
import { NativeRouter, Route, Switch } from 'react-router-native'
import { Provider } from 'react-redux'
import store from './store'
import Bookmarks from './pages/bookmarks'


NativeTachyons.build(
  {
    rem: 16
  },
  StyleSheet
)

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <NativeRouter>
        <View>
          <Route exact path="/" component={List} />
          <Switch>
            <Route path="/bookmarks" component={Bookmarks} />
            <Route path="/show" component={Show} />
          </Switch>
        </View>
      </NativeRouter>
    )
  }
}

export default () =>
  <Provider store={store}>
    <App />
  </Provider>
