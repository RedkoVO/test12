import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import GameRollImg from '../../../../assets/images/slider_slot_4clover_m.jpg'
import UserImg from '../../../../assets/images/user.png'

import styles from './styles'

const RollTop = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.gameRollImg}>
      <img src={GameRollImg} alt="" />
    </div>
    <div className={classes.gameRollInf}>
      <div className={classes.gameUser}>
        <div className={classes.gameUserBlock}>
          <p className={classes.gameUserHello}> Hello, Ben A <br />
            <span className={classes.gameUserVerification}>KYC VERIFICATED</span>
          </p>
          <div className={classes.gameUserPhoto}>
            <img src={UserImg} alt="" />
          </div>
          <p className={classes.gameUserBallance}> 764.23 DCB <br />
            <span className={classes.gameUserBallDescr}>YOUR BALANCE</span>
          </p>
        </div>
      </div>
      <div className={classes.gameRollNext}>
        <p>next roll in: <span className={classes.gameRollNextCounter}>00:00:23.12</span></p>
      </div>
      <div className={classes.gameRollDescr}>
        <div className={classes.gameRollDescrleft}>
          <div className={classes.gameRollTitleBlock}>
            <p className={classes.gameRollTitle}>4Clover</p>
            <span className={classes.gameRollOnline}>online: 234</span><br />
            <span className={classes.gameRollCompany}>by Fall Inc.</span>
          </div>
          <div className={classes.gameRollText}>
            <p>Integer tempor semper sapien sit amet bibendum. Etiam ornare teInteger tempor semper sapien sit amet bibendum. Etiam ornare te et bibendum. Etiam ornare te</p>
          </div>
          <div className={classes.gameRollTags}>
            <p>#ROLLED #BESTCRYPTO #ETH </p>
          </div>
        </div>
        <div className={classes.gameRollRating}>
          <p className={classes.ratingValue}>
            <span className={classes.ratingValueNum}>6.5</span>
            <span className={classes.ratingValueFull}>/7</span>
          </p>
          <div className={classes.ratingStars}>
            <div className={classes.fullStars}></div>
            <div className={classes.halfStars}></div>
          </div>
          <span className={classes.ratingCategory}>DICE CATEGORY</span>
        </div>
      </div>
    </div>
  </div>
)

RollTop.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(RollTop)