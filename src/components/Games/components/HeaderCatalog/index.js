import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import UserImg from '../../../../assets/images/user.png'

import Filters from '../Filters'

import styles from './styles'

const HeaderCatalog = ({ classes, isDesktop }) => (
  <div className={classes.root}>
    <div className={classes.catalogUserBlock}>
      <p className={classes.catalogUserHello}> Hello, Ben A <br />
        <span className={classes.catalogUserVerification}>KYC VERIFICATED</span>
      </p>
      <div className={classes.catalogUserPhoto}>
        <img src={UserImg} alt="" />
      </div>
      <p className={classes.catalogUserBallance}> 764.23 DCB <br />
        <span className={classes.catalogUserBallDescr}>YOUR BALANCE</span>
      </p>
    </div>
    
    {isDesktop && <Filters />}
  </div>
)

HeaderCatalog.propTypes = {
  classes: PropTypes.object,
  isDesktop: PropTypes.bool
}

export default withStyles(styles)(HeaderCatalog)