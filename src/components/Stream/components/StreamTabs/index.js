import React from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import withStyles from '@material-ui/core/styles/withStyles'

import StreamTabsBottom from './components/StreamTabsBottom'

import styles from './styles'

const StreamTabs = ({ classes, streamLive }) => (
  <div className={classes.root}>
    <Tabs>
      <TabList className={classes.streamTabsTop}>
        <Tab className={classes.streamTab}>UPCOMING GAMES</Tab>
        <Tab className={classes.streamTab}>RESULTS</Tab>
      </TabList>

      <TabPanel>
        <StreamTabsBottom streamLive={streamLive} />
      </TabPanel>
      <TabPanel>
        Test
        <StreamTabsBottom streamLive={streamLive} />
      </TabPanel>
    </Tabs>
  </div>
)

StreamTabs.propTypes = {
  classes: PropTypes.object,
  streamLive: PropTypes.array
}

export default withStyles(styles)(StreamTabs)
