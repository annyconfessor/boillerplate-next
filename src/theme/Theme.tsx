import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import { styles } from 'theme'

const Theme = ({ theme = styles }) => <ThemeProvider theme={theme} />

Theme.propTypes = {
  theme: PropTypes.object
}

export default Theme
