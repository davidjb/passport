import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  settingsIcon: {
    alignSelf: 'center',
    height: Metrics.icons.medium,
    width: Metrics.icons.medium,
    marginLeft: Metrics.largeMargin
  },
  titleInfo: {
    fontSize: Fonts.regular,
    color: Colors.muted
  },
  listHeader: {
    // textTransform: 'uppercase',
    marginTop: Metrics.largeMargin,
    color: Colors.muted
  }
})
