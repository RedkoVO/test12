import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import LeftTeamLogo from '../../../../assets/images/leftTeamLogo.png'
import LeftTeamFlag from '../../../../assets/images/leftTeamFlag.png'
import RightTeamLogo from '../../../../assets/images/rightTeamLogo.png'
import RightTeamFlag from '../../../../assets/images/rightTeamFlag.png'
import StreamEvent from '../../../../assets/images/streamEvent.png'

import styles from './styles'

const StreamBettingTop = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.streamLeftTeam}>
      <div>
        <div className={classes.streamTeamName}>
          <img src={LeftTeamLogo} className={classes.streamLeftLogo} alt="" />
          NRG
        </div>
        <div className={classes.streamCountry}>
          <img src={LeftTeamFlag} className={classes.streamFlag} alt="" />
          France
        </div>
      </div>
    </div>

    <div className={classes.streamCoef}>
      <div className={classes.streamCoefItem}>6.17</div>
      <div className={classes.streamVersus}>vs</div>
      <div className={classes.streamCoefItem}>1.25</div>
    </div>

    <div className={classes.streamRightTeam}>
      <div className={classes.streamRightTeam}>
        <div>
          <div className={classes.streamTeamName}>
            <img src={RightTeamLogo} className={classes.streamRightLogo} alt="" />
            LDLC
          </div>
          <div className={classes.streamCountry}>
            <img src={RightTeamFlag} className={classes.streamFlag} alt="" />
            Spain
          </div>
        </div>
      </div>
      <div className={classes.streamLive}>Live</div>
    </div>

    <div className={classes.streamEvent}>
      Event:
      <img src={StreamEvent} alt="" />
    </div>
  </div>
)

StreamBettingTop.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(StreamBettingTop)
