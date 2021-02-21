import { createTheme, lightThemePrimitives } from 'baseui'
import colors from './colors'

const MeValorizaTheme = createTheme(
  {
    ...lightThemePrimitives,
    colors: {
      negative: '',
    },               
  },
  {
    colors: {
      ...colors,

      button: {
        icon: '',
        text: '',
      },
    },
  },
  {
    font: {
      family: '',
    }
  }
)

export default MeValorizaTheme

