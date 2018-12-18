import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Header from '../../../../Header/Desktop/AsyncHeaderDesktop'

import styles from './styles'

const RollTopDesktop = ({ classes, imgMain }) => (
  <div className={classes.root}>
    <div className={classes.gameRollImg}>
      <img src={imgMain} alt="" />
    </div>

    <div className={classes.gameRollInf}>
      <Header type="game" />

      <div className={classes.gameRollNext}>
        <p>
          next roll in:{' '}
          <span className={classes.gameRollNextCounter}>00:00:23.12</span>
        </p>
      </div>
      <div className={classes.gameRollDescr}>
        <div className={classes.gameRollDescrleft}>
          <div className={classes.gameRollTitleBlock}>
            <p className={classes.gameRollTitle}>4Clover</p>
            <span className={classes.gameRollOnline}>online: 234</span>
            <br />
            <span className={classes.gameRollCompany}>by Fall Inc.</span>
          </div>
          <div className={classes.gameRollText}>
            <p>
              Integer tempor semper sapien sit amet bibendum. Etiam ornare
              teInteger tempor semper sapien sit amet bibendum. Etiam ornare te
              et bibendum. Etiam ornare te
            </p>
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
            <div className={classes.fullStars} />
            <div className={classes.halfStars} />
          </div>
          <span className={classes.ratingCategory}>DICE CATEGORY</span>
        </div>
      </div>
    </div>
  </div>
)

RollTopDesktop.propTypes = {
  classes: PropTypes.object,
  imgMain: PropTypes.string
}

export default withStyles(styles)(RollTopDesktop)
