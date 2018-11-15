import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import CatalogItemImg from '../../../../../../assets/images/catalogItem.png'

import styles from './styles'

const CatalogItem = ({ classes, game }) => (
  <div className={classes.catalogListItem}>
    <div className={classes.catalogItemTop}>
      <div className={classes.catalogItemTitleBlock}>
        <p className={classes.catalogItemTitle}>{game.title}</p>
        <span className={classes.catalogItemTitleComp}>{game.company}</span>
      </div>
      <div className={classes.catalogItemRating}>
        <p className={classes.catalogRatingValue}>
          <span className={classes.catalogRatingValueNum}>{game.rating}</span>
          <span className={classes.catalogRatingValueFull}>/7</span>
        </p>
        <div className={classes.catalogRatingStars}>
          <div className={classes.fullStars} />
          <div className={classes.halfStars} />
        </div>
        <span className={classes.catalogRatingCategory}>{game.category}</span>
      </div>
    </div>
    <Link to="/" className={classes.catalogItemImg}>
      <img src={CatalogItemImg} alt="" className={classes.catalogItemImgGame} />
      <div className={classes.catalogItemOnline}>online: {game.online}</div>
    </Link>
    <div className={classes.catalogItemCounter}>
      <div className={classes.catalogCounterWins}>
        <p className={classes.catalogCounterBigstWin}>
          <span className={classes.catalogCounterValue}>{game.bigWin} dcb</span>{' '}
          <br /> BIGGEST WIN <br /> FOR ALL TIME
        </p>
      </div>
      <div className={classes.catalogCounterHours}>
        <p className={classes.catalogCounterHoursVolume}>
          <span className={classes.catalogCounterValue}>{game.volume} dcb</span>{' '}
          <br /> VOLUME OF <br />
          24 HOURS
        </p>
      </div>
      <div className={classes.catalogCounterContracts}>
        <p className={classes.catalogCounterContractsVolume}>
          <span className={classes.catalogCounterValue}>
            {game.volumeAll} dcb
          </span>{' '}
          <br /> ALL VOLUME OF <br /> SMART CONTRACT
        </p>
      </div>
    </div>
    <Link to="/" className={cn(classes.catalogItem, classes.catalogItemBtn)}>
      Play Now
    </Link>
    <div className={classes.catalogItemNext}>
      <p>
        next roll in:{' '}
        <span className={classes.catalogNextCounter}>{game.rollTime}</span>
      </p>
    </div>
  </div>
)

CatalogItem.propTypes = {
  classes: PropTypes.object,
  game: PropTypes.object
}

export default withStyles(styles)(CatalogItem)
