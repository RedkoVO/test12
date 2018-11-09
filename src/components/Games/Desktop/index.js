import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import MenuNavigation from '../../MenuNavigation'

import UserImg from '../../../assets/images/user.png'

import styles from './styles'

const Games = ({ classes, handleLogout }) => (
  <div className={classes.root}>
    <header className={classes.headerGames}>
      <MenuNavigation page="dark" handleLogout={handleLogout} />

      <div className={classes.catalogUser}>
        <div className={classes.catalogUserBlock}>
          <p className={classes.catalogUserHello}> Hello, Ben A <br />
            <span className={classes.catalogUserVerification}>KYC VERIFICATED</span>
          </p>
          <div className={classes.catalogUserPhoto}>
            <img src={UserImg} alt="" />
          </div>
          <p className={classes.catalogUserBallance}> 764.23 CPT <br />
            <span className={classes.catalogUserBallDescr}>YOUR BALANCE</span>
          </p>
        </div>
        <div className={classes.catalogUserSort}>
          <div className={classes.sortGenre}>
            <span className={classes.sortGenreName}> genre:</span>
            <a href="#" className={classes.sortGenreItem}> dice games</a>
          </div>
          <div className={classes.sortRating}>
            <span className={classes.sortRatingName}> rating:</span>
            <a href="#" className={classes.sortRatingItem}> more than 6 stars</a>
          </div>
          <div className={classes.sortSearch}>
            <input type="text" className={classes.sortSearchField} placeholder="Search..." />
          </div>
          <div className={classes.sortContract}>
            <span className={classes.sortContractName}> volume of smart contract:</span>
            <a href="#" className={classes.sortContractItem}> more than 10.000 CTP</a>
          </div>
        </div>
      </div>
    </header>
  </div>
)

Games.propTypes = {
  classes: PropTypes.object,
  handleLogout: PropTypes.func
}

export default withStyles(styles)(Games)