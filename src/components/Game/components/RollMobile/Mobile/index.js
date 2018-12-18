import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import AddIcon from '../../../../../assets/images/svg/add.svg'

import styles from './styles'

const RollMobile = ({ classes, imgMain, handlePlayNow }) => (
  <div className={classes.root}>
    <div className={classes.gameMobileTop}>
      <div className={classes.gameMobileTitleBlock}>
        <p className={classes.gameMobileTitle}>Rolled-Folled</p>
        <span className={classes.gameMobileTitleComp}>by Fall Inc.</span>
      </div>
      <div className={classes.gameMobileRating}>
        <p className={classes.gameMobileRatingValue}>
          <span className={classes.gameMobileRatingValueNum}>6.5</span>
          <span className={classes.gameMobileRatingValueFull}>/7</span>
        </p>
        <div className={classes.gameMobileRatingStars}>
          <div className={classes.gameMobileFullStars} />
          <div className={classes.gameMobileHalfStars} />
        </div>
        <span className={classes.gameMobileRateCategory}>DICE CATEGORY</span>
      </div>
    </div>
    <div className={classes.gameMobileImg}>
      <img src={imgMain} alt="" />
      <div className={classes.gameMobileActions}>
        <div
          className={classes.playNowBtnMobile}
          onClick={() => handlePlayNow()}
        >
          Play Now
        </div>
        <div className={classes.addBtnMobile}>Add to favorites</div>
      </div>
    </div>
    <div className={classes.gameMobileText}>
      <p>
        Integer tempor semper sapien sit amet dsc s and bibendum. Etiam ornare
        teInteger tempor semper sapien sit amet bibendum. Etiam ornare te et
        bibendum. Etiam ornare te
      </p>
    </div>
    <div className={classes.gameMobileTags}>
      <p className={classes.gameMobileTagsText}>#ROLLED #BESTCRYPTO #ETH </p>
      <div className={classes.addTagBtn}>
        <img src={AddIcon} alt="" />
      </div>
    </div>
  </div>
)

RollMobile.propTypes = {
  classes: PropTypes.object,
  imgMain: PropTypes.string,
  handlePlayNow: PropTypes.func
}

export default withStyles(styles)(RollMobile)
