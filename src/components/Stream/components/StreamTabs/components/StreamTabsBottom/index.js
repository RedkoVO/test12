import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import StreamTabsNav from './components/StreamTabsNav'
import StreamLive from './components/StreamLive'

import styles from './styles'

const StreamTabsBottom = ({ classes, streamLive }) => (
  <div className={classes.root}>
    <StreamTabsNav />
    <StreamLive streamLive={streamLive} />
  </div>
)

StreamTabsBottom.propTypes = {
  classes: PropTypes.object,
  streamLive: PropTypes.array
}

export default withStyles(styles)(StreamTabsBottom)
