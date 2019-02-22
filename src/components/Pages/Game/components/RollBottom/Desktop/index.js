import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const RollBottomDesktop = ({ classes, handlePlayNow, slider }) => (
  <div className={classes.root}>
    <div className={classes.gameRollActions}>
      <div className={classes.playNowBtn} onClick={() => handlePlayNow()}>
        Play Now
      </div>
      <Link to="/" className={classes.addBtn}>
        Add to favorites
      </Link>
    </div>

    <div className={classes.gameRollSlider} id="scrollSlider" tabIndex="5000">
      {slider.map(item => (
        <Link to="/" className={classes.sliderItem} key={item.id}>
          <img src={item.img} alt="" className={classes.sliderItemPhoto} />
        </Link>
      ))}
    </div>
  </div>
)

RollBottomDesktop.propTypes = {
  classes: PropTypes.object,
  handlePlayNow: PropTypes.func,
  slider: PropTypes.array
}

export default withStyles(styles)(RollBottomDesktop)
