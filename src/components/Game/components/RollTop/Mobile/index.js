import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Header from '../../../../Header/Desktop/AsyncHeaderDesktop'

import styles from './styles'

const RollTopMobile = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.gameRollInf}>
      <Header type="game" />
    </div>
  </div>
)

RollTopMobile.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(RollTopMobile)
