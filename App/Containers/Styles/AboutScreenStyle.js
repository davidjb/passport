import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    ...ApplicationStyles.screen.mainContainer,
    padding: Metrics.doubleBaseMargin
  },
  loginButton: {
    borderWidth: 1,
    borderColor: Colors.charcoal,
    backgroundColor: Colors.panther,
    padding: 6
  },
  loginText: {
    textAlign: 'center',
    color: Colors.silver
  },
  componentLabelContainer: {
    ...ApplicationStyles.darkLabelContainer
  },
  componentLabel: {
    ...ApplicationStyles.darkLabel
  },
  locale: {
    ...Fonts.style.h4,
    color: Colors.snow
  },
  groupContainer: {
    ...ApplicationStyles.groupContainer
  }
})
