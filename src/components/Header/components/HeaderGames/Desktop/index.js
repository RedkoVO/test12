import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'

import UserImg from '../../../../../assets/images/user.jpg'

import styles from './styles'

const HeaderGames = ({ classes, children }) => (
  <div className={classes.root}>
    <div className={classes.gamesUserBlock}>
      <p className={classes.gamesUserHello}> Hello, Ben A <br />
        <Link to={'/'} className={classes.gamesUserVerification}>KYC VERIFICATION</Link>
      </p>
      <div className={classes.gamesUserPhoto}>
        <img src={UserImg} alt="" />
      </div>
    </div>
    
    {children}
  </div>
)

HeaderGames.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node
}

export default withStyles(styles)(HeaderGames)