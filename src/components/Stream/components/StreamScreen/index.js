import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import StreamImage from '../../../../assets/images/stream-image.png'

import styles from './styles'

const StreamScreen = ({ classes }) => (
  <div className={classes.root}>
    <img src={StreamImage} alt="" />
  </div>
)

StreamScreen.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(StreamScreen)
