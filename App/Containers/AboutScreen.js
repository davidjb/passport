import React from 'react'
import { View, ScrollView, Text, Image } from 'react-native'
import { Actions as NavigationActions } from 'react-native-router-flux'

import RoundedButton from '../Components/RoundedButton'
import { Images } from '../Themes'
import styles from './Styles/AboutScreenStyle'

export default class AboutScreen extends React.Component {

  viewOnGitHub () {
    NavigationActions.webScreen({title: 'Project Home', uri: 'https://github.com/davidjb/passport/'})
  }

  reportAnIssue () {
    NavigationActions.webScreen({title: 'Report an Issue', uri: 'https://github.com/davidjb/passport/issues'})
  }

  showLicenses () {
    // TODO: Need to put all other projects' licenses somewhere
    NavigationActions.webScreen({title: 'Licences', uri: 'https://github.com/davidjb/passport/blob/master/LICENSE'})
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.logo} style={styles.logo} />
            <Text style={styles.titleText}>Passport</Text>
            <Text>A mobile port of pass, the standard unix password manager.</Text>
          </View>

          <RoundedButton onPress={this.viewOnGitHub}>
            View on GitHub
          </RoundedButton>

          <RoundedButton onPress={this.reportAnIssue}>
            Report an issue
          </RoundedButton>

          <RoundedButton onPress={this.showLicenses}>
            Licences
          </RoundedButton>

          <View style={styles.centered}>
            <Text>Made by @davidjb and contributors</Text>
            <Text>Licensed under the Apache License, Version 2.0</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
