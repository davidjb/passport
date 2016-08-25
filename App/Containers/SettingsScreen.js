import React from 'react'
import { Picker, View, Alert } from 'react-native'
import SettingsList from 'react-native-settings-list'

// import { Images } from '../Themes'
import styles from './Styles/SettingsScreenStyle'

export default class SettingsScreen extends React.Component {

  constructor (props) {
    super(props)

    this.onValueChange = this.onValueChange.bind(this)
    this.state = {switchValue: false}
  }

  onValueChange (value) {
    this.setState({switchValue: value})
  }

  render () {
    // <ScrollView style={styles.container}>
    // </ScrollView>
    // </View>
    return (
      <View style={[styles.mainContainer, {backgroundColor: '#EFEFF4'}]}>
        <View style={{backgroundColor: '#EFEFF4', flex: 1}}>
          <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
            <SettingsList.Header headerStyle={styles.listHeader} headerText='Security' />
            <SettingsList.Item
              hasSwitch
              switchState={this.state.switchValue}
              switchOnValueChange={this.onValueChange}
              hasNavArrow={false}
              title='Require TouchID and open app'
            />
            <SettingsList.Item
              hasSwitch
              switchState={this.state.switchValue}
              switchOnValueChange={this.onValueChange}
              hasNavArrow={false}
              title='Require TouchID for passwords'
            />
            <SettingsList.Item
              hasSwitch
              switchState={this.state.switchValue}
              switchOnValueChange={this.onValueChange}
              hasNavArrow={false}
              title='Record audit Log'
            />
            <SettingsList.Item
              title='Identities'
              titleInfo='3 available'
              titleInfoStyle={styles.titleInfo}
              onPress={() => Alert.alert('Route to Identities page')}
            />

            <SettingsList.Header headerStyle={styles.listHeader} headerText='General' />
            <SettingsList.Item
              hasSwitch
              switchState={this.state.switchValue}
              switchOnValueChange={this.onValueChange}
              hasNavArrow={false}
              title='Show favourites'
            />
            <SettingsList.Item
              title='Clipboard copy duration'
              titleInfo='45 seconds'
              titleInfoStyle={styles.titleInfo}
              onPress={() => Alert.alert('Route to Clipboard Page')}
            />
            <Picker
              selectedValue={this.state.language}
              onValueChange={(lang) => this.setState({language: lang})}>
              <Picker.Item label='15 seconds' value='15' />
              <Picker.Item label='30 seconds' value='30' />
              <Picker.Item label='45 seconds' value='45' />
              <Picker.Item label='1 minute' value='60' />
              <Picker.Item label='2 minutes' value='120' />
              <Picker.Item label='Never' value='0' />
            </Picker>

            <SettingsList.Header headerStyle={styles.listHeader} headerText='Git' />
            <SettingsList.Item
              hasSwitch
              switchState={this.state.switchValue}
              switchOnValueChange={this.onValueChange}
              hasNavArrow={false}
              title='Enable Git commits'
            />
            <SettingsList.Item
              title='User name'
              titleInfoStyle={styles.titleInfo}
              hasTextInput
              textInputProps={{defaultValue: 'Required'}}
              hasNavArrow={false}
              onPress={() => Alert.alert('User name editing')}
            />
            <SettingsList.Item
              title='Email'
              titleInfoStyle={styles.titleInfo}
              hasTextInput
              textInputProps={{defaultValue: 'email@example.com'}}
              hasNavArrow={false}
              onPress={() => Alert.alert('Email editing')}
            />
          </SettingsList>
        </View>
      </View>
    )
  }
}
