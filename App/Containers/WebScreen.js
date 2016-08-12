import React, { PropTypes } from 'react'
import { View } from 'react-native'

import PassWebView from '../Components/PassWebView'
import styles from './Styles/WebScreenStyle'

export default class WebScreen extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    uri: PropTypes.string
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <PassWebView uri={this.props.uri} />
      </View>
    )
  }
}
