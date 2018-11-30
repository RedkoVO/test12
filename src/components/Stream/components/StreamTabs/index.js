import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import StreamTabsBottom from './components/StreamTabsBottom'

import styles from './styles'

const StreamTabs = ({ classes }) => (
  <div className={classes.root}>
    <div className="streamTabsTop">
      <a href="#" className="streamTabsUpcom">
        UPCOMING GAMES
      </a>
      <a href="#" className="streamTabsResult">
        RESULTS
      </a>
    </div>

    <StreamTabsBottom />
  </div>
)

StreamTabs.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(StreamTabs)
