// An All Components Screen is a great way to dev and quick-test components
import React, { PropTypes } from 'react'
import { View, ScrollView, Text } from 'react-native'

import styles from './Styles/PassFileScreenStyle.js'

const DUMMY_FILE_DATA = [
  {field: 'Password', data: '*************'},
  {field: 'User ID', data: 'davidjb'},
  {field: 'URL', data: 'https://example.com'},
  {field: 'Full text', data: '*************'}
]

export default class PassFileScreen extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    filename: PropTypes.string
  }

  constructor (props) {
    super(props)

    // Some form of state data to determine if we have decrypted content
    this.state = {
      isDecrypted: false,
      auditLog: []
    }
  }

  renderCard (cardTitle, rowData) {
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>{cardTitle.toUpperCase()}</Text>
        {this.renderRows(rowData)}
      </View>
    )
  }

  renderRows (rowData) {
    return rowData.map((row) => {
      const {field, data} = row
      return (
        <View key={field} style={styles.rowContainer}>
          <View style={styles.rowLabelContainer}>
            <Text style={styles.rowLabel}>{field}</Text>
          </View>
          <View style={styles.rowInfoContainer}>
            <Text style={styles.rowInfo}>{data}</Text>
          </View>
        </View>
      )
    })
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.titleText} >
          {this.props.title}
        </Text>
        <Text style={styles.subtitleText}>
          This password entry will eventually represent a GPG encrpyted
          file's contents.
        </Text>
        <ScrollView style={styles.container}>
          {this.renderCard(this.props.filename, DUMMY_FILE_DATA)}
        </ScrollView>
      </View>
    )
  }
}
