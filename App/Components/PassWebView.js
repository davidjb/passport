import React from 'react'
import { View, WebView, ActivityIndicator, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import ExamplesRegistry from '../Services/ExamplesRegistry'
import RoundedButton from '../Components/RoundedButton'
import styles from './Styles/PassWebViewStyles'
import Colors from '../Themes/Colors'
import Metrics from '../Themes/Metrics'

var WEBVIEW_REF = 'webview'

// Example
ExamplesRegistry.add('Web View', () =>
  <PassWebView
    source='https://github.com'
  />
)

export default class PassWebView extends React.Component {

  static propTypes = {
    uri: React.PropTypes.string
  }

  reload = () => {
    this.refs[WEBVIEW_REF].reload()
  }

  renderLoading = () => (
    <View style={styles.statusContainer}>
      <ActivityIndicator
        color={Colors.primary}
        size='large'
      />
    </View>
  )

  renderError = (errorDomain, errorCode, errorDesc) => (
    <View style={styles.statusContainer}>
      <Icon name='warning' size={Metrics.icons.large} color={Colors.coal} />
      <Text style={styles.titleText}>
        {errorDesc}
      </Text>
      <Text style={styles.muted}>
        {errorDomain}
      </Text>
      <View style={{alignSelf: 'stretch'}}>
        <RoundedButton onPress={this.reload}>
          Try again
        </RoundedButton>
      </View>
    </View>
  )

  render () {
    return (
      <WebView
        ref={WEBVIEW_REF}
        source={{uri: this.props.uri}}
        startInLoadingState
        renderLoading={this.renderLoading}
        renderError={this.renderError}
      />
    )
  }
}
