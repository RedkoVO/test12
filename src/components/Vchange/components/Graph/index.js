import React from 'react'
// import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import GraphTMPImage from '../../../../assets/images/graphTMP.png'

import styles from './styles'

const Graph = ({ classes }) => (
  <div className={classes.root}>
    <img src={GraphTMPImage} alt="" />
  </div>
)

Graph.propTypes = {}

export default withStyles(styles)(Graph)
