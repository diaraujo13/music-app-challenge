import {RFValue} from "react-native-responsive-fontsize";

/** Dark Theme  */
export default {
  colors: {
      primary: '#1de9b6',
      background: {
          primary: '#212121',
          secondary: '#FFFFFF'
      },
      success: '#03B252',
      text: {
          title: '#47474D',
          default: '#7A7A80',
          details: '#AEAEB3',
          inverted: '#FFFFFF',
      },
      shapes: {
          default: '#E1E1E8',
          dark: '#29292E',
          line: '#EBEBF0',
          light: '#FFFFFF',
      },
      input: {
        background: '#303030',
        tintColor: '#a5a5a5'
      },
      border: '#47474D',
      white: '#FFFFFF',
      dark: '#444'
  },
  fontsize: {
    headline: RFValue(40),
    title: RFValue(30),
    subtitle: RFValue(20),
    icon: RFValue(18),
    medium: RFValue(16),
    body: RFValue(14),
    helper: RFValue(10),
  },
  measurements: {
    input: {
      padding: '15px 20px',
      elevation: 5,
    },
    borderRadius: '7px'
  }
}