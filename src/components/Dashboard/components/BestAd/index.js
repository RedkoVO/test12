import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const BestAd = ({ classes, bestAds }) => (
  <div className={classes.root}>
    {bestAds.map(item => (
      <div className={classes.bestItem} key={item.id}>
        <div className={classes.titleWrap}>
          <a href="/" className={classes.bestTitle}>{item.title}</a>
        </div>
        <div className={classes.bestContent}>
          <a href="/" className={classes.bestImg}>
            <img src={item.img} alt="" className={classes.bestItemImg} />
          </a>
          <a href="/" className={classes.bestLink}>{item.titleLink}: <br /><span>{item.nameLink}</span></a>
        </div>
      </div>
    ))}
  </div>
)

BestAd.propTypes = {
  classNamees: PropTypes.object,
  bestAds: PropTypes.array
}

export default withStyles(styles)(BestAd)