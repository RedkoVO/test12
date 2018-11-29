import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import MenuNavigation from '../../MenuNavigation'
import HeaderCatalog from '../components/HeaderCatalog'
import Footer from '../../Footer/Desktop'

import LeftTeamLogo from '../../../assets/images/leftTeamLogo.png'
import LeftTeamFlag from '../../../assets/images/leftTeamFlag.png'
import RightTeamLogo from '../../../assets/images/rightTeamLogo.png'
import RightTeamFlag from '../../../assets/images/rightTeamFlag.png'
import StreamEvent from '../../../assets/images/streamEvent.png'
import StreamImage from '../../../assets/images/stream-image.png'
import TmpStreamTabsImage from '../../../assets/images/tmp-stream-tabs.png'

import styles from './styles'

const Stream = ({ classes, handleLogout, isDesktop }) => (
  <div className="containerStreamWrap">
    <div className={classes.containerTradeWrap}>
      <div className={classes.containerTrade}>
        <header className={classes.headerStream}>
          <MenuNavigation page="dark" handleLogout={handleLogout} />
          <HeaderCatalog isDesktop={isDesktop} />
        </header>

        <main className="streamMain">
          <div className="streamBettingTop">
            <div className="streamLeftTeam">
              <div>
                <div className="streamTeamName">
                  <img src={LeftTeamLogo} className="streamLogo" alt="" />
                  NRG
                </div>
                <div className="streamCountry">
                  <img src={LeftTeamFlag} className="streamFlag" alt="" />
                  France
                </div>
              </div>
            </div>

            <div className="streamCoef">
              <div className="streamCoefItem">6.17</div>
              <div className="streamVersus">vs</div>
              <div className="streamCoefItem">1.25</div>
            </div>

            <div className="streamRightTeam">
              <div className="streamRightTeam">
                <div>
                  <div className="streamTeamName">
                    <img src={RightTeamLogo} className="streamLogo" alt="" />
                    LDLC
                  </div>
                  <div className="streamCountry">
                    <img src={RightTeamFlag} className="streamFlag" alt="" />
                    Spain
                  </div>
                </div>
              </div>
              <div className="streamLive">Live</div>
            </div>

            <div className="streamEvent">
              Event:
              <img src={StreamEvent} />
            </div>
          </div>

          <div className="streamContent">
            <img src={StreamImage} alt="" />
          </div>

          <div className="streamDescription">
            <div className="streamDescriptionLeft">
              <div className="streamDescriptionText">
                Integer tempor semper sapien sit amet bibendum. Etiam ornare
                tellus at sapien vehicula, quis scelerisque turpis rokaste
                egestas quis botona.
              </div>
              <div className="streamHashTags">
                #ROLLED #BESTCRYPTO #ETH{' '}
                <div className="streamAddHashTags">+</div>
              </div>
            </div>
            <div className="streamDescriptionRight">
              <div className="streamAddFavorites">Add to favorites</div>
              <div className="streamShareSocial">Share in social</div>
            </div>
          </div>

          <div className="streamTmpTabs">
            <img src={TmpStreamTabsImage} alt="" />
          </div>
        </main>
      </div>
    </div>
    <Footer />
  </div>
)

Stream.propTypes = {
  classes: PropTypes.object,
  handleLogout: PropTypes.func,
  isDesktop: PropTypes.bool
}

export default withStyles(styles)(Stream)
