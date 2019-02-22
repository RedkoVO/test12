import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const BestAd = ({ classes, bestAds }) => {
  return (
    <section id="shops">
      <div className={classes.bestTitle}>Shops</div>
      <div className={classes.root}>
        {bestAds.map(item => (
          <div className={classes.bestItem} key={item.id}>
            <div className={classes.titleWrap}>
              <Link to={item.link} className={classes.bestTitle}>
                {item.title}
              </Link>
            </div>
            <div className={classes.bestContent}>
              <Link to={item.link} className={classes.bestImg}>
                <img src={item.img} alt="" className={classes.bestItemImg} />
              </Link>
              <Link to={item.link} className={classes.bestLink}>
                {item.titleLink}: <br />
                <span>{item.nameLink}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

BestAd.propTypes = {
  classNamees: PropTypes.object,
  bestAds: PropTypes.array
}

export default withStyles(styles)(BestAd)
