import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import UserImg from '../../../../../assets/images/user.png'

import styles from './styles'

const HeaderGames = ({ classes, children }) => (
  <div className={classes.root}>
    <div className={classes.gamesUserBlock}>
      <p className={classes.gamesUserHello}> Hello, Ben A <br />
        <span className={classes.gamesUserVerification}>KYC VERIFICATED</span>
      </p>
      <div className={classes.gamesUserPhoto}>
        <img src={UserImg} alt="" />
      </div>
      <p className={classes.gamesUserBallance}> 764.23 DCB <br />
        <span className={classes.gamesUserBallDescr}>YOUR BALANCE</span>
      </p>
    </div>
    
    {children}
  </div>
)

HeaderGames.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node
}

export default withStyles(styles)(HeaderGames)