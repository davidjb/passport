import React from 'react'
import { View, Text, ListView, TouchableHighlight } from 'react-native'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import AlertMessage from '../Components/AlertMessageComponent'
import styles from './Styles/PassFolderScreenStyle'
import Colors from '../Themes/Colors'

class PassFolderScreen extends React.Component {

  constructor (props) {
    super(props)
    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = [
      {title: 'eBay', description: 'ebay.com.au'},
      {title: 'PayPal'},
      {title: 'GitHub', description: 'Social coding'},
      {title: 'Google', description: 'Mail and more'},
      {title: 'Online Banking', description: 'My bank'},
      {title: 'Amazon', description: 'amazon.com'},
      {title: 'Work', description: 'Nested folder', type: 'folder'}
    ]

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects),
      title: 'Home'
    }
  }

  /* ***********************************************************
  * STEP 3
  * `_renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  _renderRow (rowData) {
    return (
      <TouchableHighlight style={styles.row} underlayColor={Colors.primaryDark} onPress={() => { NavigationActions.passFileScreen({title: rowData.title, filename: rowData.title + '.gpg'}) }}>
        <View>
          <Text style={styles.boldLabel}>{rowData.title}</Text>
          <Text style={styles.label}>{rowData.description}</Text>
          <Text style={styles.label}>{rowData.type}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  _onPressButton () {
    window.alert('Nice work!')
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newProps.someData)
        })
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  _noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    return (
      <View style={styles.container}>
        <AlertMessage title='Nothing to See Here, Move Along' show={this._noRowData()} />
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

export default connect(mapStateToProps)(PassFolderScreen)
