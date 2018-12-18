import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const RollBottomMobile = ({ classes, slider }) => (
  <div className={classes.root}>
    <div className={classes.gameRollSlider} id="scrollSlider" tabIndex="5000">
      {slider.map(item => (
        <Link to="/" className={classes.sliderItem} key={item.id}>
          <img src={item.img} alt="" className={classes.sliderItemPhoto} />
        </Link>
      ))}
    </div>
  </div>
)

RollBottomMobile.propTypes = {
  classes: PropTypes.object,
  handlePlayNow: PropTypes.func,
  slider: PropTypes.array,
}

export default withStyles(styles)(RollBottomMobile)
