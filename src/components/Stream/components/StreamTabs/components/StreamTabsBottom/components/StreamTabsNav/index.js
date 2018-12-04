import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import cn from 'classnames'

import GamepadIcon from '../../../../../../../../assets/images/svg/gamepad.svg'
import Dota2Icon from '../../../../../../../../assets/images/svg/dota-2.svg'
import StarcraftIcon from '../../../../../../../../assets/images/starcraft.png'
import OverwatchIcon from '../../../../../../../../assets/images/overwatch.png'
import CsgoIcon from '../../../../../../../../assets/images/csgo.png'

import styles from './styles'

const StreamTabsNav = ({ classes }) => (
  <div className={classes.root}>
    <div className={cn(classes.streamTabsNavItem, classes.liveNow)}>
      <span className={classes.streamTabsNavText}>LIVE NOW</span>
      <span className={classes.streamTabsWatch}>2</span>
    </div>
    <div className={classes.streamTabsNavItem}>
      <img
        src={GamepadIcon}
        className={classes.streamTabsNavImg}
        alt=""
      />
      <span className={classes.streamTabsNavText}>ALL GAMES</span>
      <span className={classes.streamTabsWatch}>2</span>
    </div>
    <div className={classes.streamTabsNavItem}>
      <img
        src={StarcraftIcon}
        className={classes.streamTabsNavImg}
        alt=""
      />
      <span className={classes.streamTabsNavText}>STARCRAFT 2</span>
      <span className={classes.streamTabsWatch}>2</span>
    </div>
    <div className={classes.streamTabsNavItem}>
      <img
        src={Dota2Icon}
        className={classes.streamTabsNavImg}
        alt=""
      />
      <span className={classes.streamTabsNavText}>DOTA 2</span>
      <span className={classes.streamTabsWatch}>2</span>
    </div>
    <div className={classes.streamTabsNavItem}>
      <img src={OverwatchIcon} className={classes.streamTabsNavImg} alt="" />
      <span className={classes.streamTabsNavText}>CS:GO</span>
      <span className={classes.streamTabsWatch}>2</span>
    </div>
    <div className={cn(classes.streamTabsNavItem, classes.streamTabsNavActive)}>
      <img src={CsgoIcon} className={classes.streamTabsNavImg} alt="" />
      <span className={classes.streamTabsNavText}>CS:GO</span>
      <span className={classes.streamTabsWatch}>2</span>
    </div>
  </div>
)

StreamTabsNav.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(StreamTabsNav)
