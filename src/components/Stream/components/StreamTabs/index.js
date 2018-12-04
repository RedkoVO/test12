import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import StreamTabsBottom from './components/StreamTabsBottom'

import styles from './styles'

const StreamTabs = ({ classes, streamLive }) => (
  <div className={classes.root}>
    <div className={classes.streamTabsTop}>
      <div href="#" className={classes.streamTabsUpcom}>
        UPCOMING GAMES
      </div>
      <div href="#" className={classes.streamTabsResult}>
        RESULTS
      </div>
    </div>

    <StreamTabsBottom streamLive={streamLive} />
  </div>
)

StreamTabs.propTypes = {
  classes: PropTypes.object,
  streamLive: PropTypes.array,
}

export default withStyles(styles)(StreamTabs)
