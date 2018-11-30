import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const StreamTabsBottom = ({ classes }) => (
  <div className="streamTabsBottom">
    <div className="streamTabsNav">
      <a href="#" className="streamTabsNavItem liveNow">
        LIVE NOW <span className="streamTabsWatch">2</span>
      </a>
      <a href="#" className="streamTabsNavItem allGames">
        ALL GAMES <span className="streamTabsWatch">2</span>
      </a>
      <a href="#" className="streamTabsNavItem  dota2">
        DOTA 2<span className="streamTabsWatch">2</span>
      </a>
      <a href="#" className="streamTabsNavItem starcraft2">
        STARCRAFT 2 <span className="streamTabsWatch">2</span>
      </a>
      <a href="#" className="streamTabsNavItem overwatch">
        OVERWATCH <span className="streamTabsWatch">2</span>
      </a>
      <a href="#" className="streamTabsNavItem rainbowSix">
        RAINBOW SIX <span className="streamTabsWatch">2</span>
      </a>
      <a href="#" className="streamTabsNavItem csGo streamTabsNavActive ">
        CS:GO<span className="streamTabsWatch">2</span>
      </a>
    </div>

    <div className="streamTabsLive">
      <div className="streamLiveItem">
        <div className="streamLiveItemDate itemDateLive">LIVE</div>
        <div className="streamLiveItemTeam teamNRG">
          <div className="teamName">NRG</div>
          <div className="teamCountry teamFrance">FRANCE</div>
        </div>
        <div className="streamLiveItemScore">6.14</div>
        <div className="streamLiveItemVs">VS</div>
        <div className="streamLiveItemScore">1.25</div>
        <div className="streamLiveItemTeam teamLDLC">
          <div className="teamName">LDLC</div>
          <div className="teamCountry teamSpain">SPAIN</div>
        </div>
        <div className="streamLiveItemEvent">EVENT</div>
        <div className="streamLiveItemLink" />
      </div>
      <div className="streamLiveItem">
        <div className="streamLiveItemDate ">
          12:30 PM <br />
          <span className="dateDay">7/12/2018</span>
        </div>
        <div className="streamLiveItemTeam teamNRG">
          <div className="teamName">NRG</div>
          <div className="teamCountry teamFrance">FRANCE</div>
        </div>
        <div className="streamLiveItemScore">6.14</div>
        <div className="streamLiveItemVs">VS</div>
        <div className="streamLiveItemScore">1.25</div>
        <div className="streamLiveItemTeam teamLDLC">
          <div className="teamName">LDLC</div>
          <div className="teamCountry teamSpain">SPAIN</div>
        </div>
        <div className="streamLiveItemEvent">EVENT</div>
        <div className="streamLiveItemLink" />
      </div>
      <div className="streamLiveItem">
        <div className="streamLiveItemDate itemDateLive">LIVE</div>
        <div className="streamLiveItemTeam teamNRG">
          <div className="teamName">NRG</div>
          <div className="teamCountry teamFrance">FRANCE</div>
        </div>
        <div className="streamLiveItemScore">6.14</div>
        <div className="streamLiveItemVs">VS</div>
        <div className="streamLiveItemScore">1.25</div>
        <div className="streamLiveItemTeam teamLDLC">
          <div className="teamName">LDLC</div>
          <div className="teamCountry teamSpain">SPAIN</div>
        </div>
        <div className="streamLiveItemEvent">EVENT</div>
        <div className="streamLiveItemLink" />
      </div>
      <div className="streamLiveItem">
        <div className="streamLiveItemDate ">
          12:30 PM <br />
          <span className="dateDay">7/12/2018</span>
        </div>
        <div className="streamLiveItemTeam teamNRG">
          <div className="teamName">NRG</div>
          <div className="teamCountry teamFrance">FRANCE</div>
        </div>
        <div className="streamLiveItemScore">6.14</div>
        <div className="streamLiveItemVs">VS</div>
        <div className="streamLiveItemScore">1.25</div>
        <div className="streamLiveItemTeam teamLDLC">
          <div className="teamName">LDLC</div>
          <div className="teamCountry teamSpain">SPAIN</div>
        </div>
        <div className="streamLiveItemEvent">EVENT</div>
        <div className="streamLiveItemLink" />
      </div>
      <div className="streamLiveItem">
        <div className="streamLiveItemDate itemDateLive">LIVE</div>
        <div className="streamLiveItemTeam teamNRG">
          <div className="teamName">NRG</div>
          <div className="teamCountry teamFrance">FRANCE</div>
        </div>
        <div className="streamLiveItemScore">6.14</div>
        <div className="streamLiveItemVs">VS</div>
        <div className="streamLiveItemScore">1.25</div>
        <div className="streamLiveItemTeam teamLDLC">
          <div className="teamName">LDLC</div>
          <div className="teamCountry teamSpain">SPAIN</div>
        </div>
        <div className="streamLiveItemEvent">EVENT</div>
        <div className="streamLiveItemLink" />
      </div>
      <div className="streamLiveItem">
        <div className="streamLiveItemDate ">
          12:30 PM <br />
          <span className="dateDay">7/12/2018</span>
        </div>
        <div className="streamLiveItemTeam teamNRG">
          <div className="teamName">NRG</div>
          <div className="teamCountry teamFrance">FRANCE</div>
        </div>
        <div className="streamLiveItemScore">6.14</div>
        <div className="streamLiveItemVs">VS</div>
        <div className="streamLiveItemScore">1.25</div>
        <div className="streamLiveItemTeam teamLDLC">
          <div className="teamName">LDLC</div>
          <div className="teamCountry teamSpain">SPAIN</div>
        </div>
        <div className="streamLiveItemEvent">EVENT</div>
        <div className="streamLiveItemLink" />
      </div>
      <div className="streamLiveItem">
        <div className="streamLiveItemDate itemDateLive">LIVE</div>
        <div className="streamLiveItemTeam teamNRG">
          <div className="teamName">NRG</div>
          <div className="teamCountry teamFrance">FRANCE</div>
        </div>
        <div className="streamLiveItemScore">6.14</div>
        <div className="streamLiveItemVs">VS</div>
        <div className="streamLiveItemScore">1.25</div>
        <div className="streamLiveItemTeam teamLDLC">
          <div className="teamName">LDLC</div>
          <div className="teamCountry teamSpain">SPAIN</div>
        </div>
        <div className="streamLiveItemEvent">EVENT</div>
        <div className="streamLiveItemLink" />
      </div>
      <div className="streamLiveItem">
        <div className="streamLiveItemDate ">
          12:30 PM <br />
          <span className="dateDay">7/12/2018</span>
        </div>
        <div className="streamLiveItemTeam teamNRG">
          <div className="teamName">NRG</div>
          <div className="teamCountry teamFrance">FRANCE</div>
        </div>
        <div className="streamLiveItemScore">6.14</div>
        <div className="streamLiveItemVs">VS</div>
        <div className="streamLiveItemScore">1.25</div>
        <div className="streamLiveItemTeam teamLDLC">
          <div className="teamName">LDLC</div>
          <div className="teamCountry teamSpain">SPAIN</div>
        </div>
        <div className="streamLiveItemEvent">EVENT</div>
        <div className="streamLiveItemLink" />
      </div>
      <div className="streamLiveItem">
        <div className="streamLiveItemDate itemDateLive">LIVE</div>
        <div className="streamLiveItemTeam teamNRG">
          <div className="teamName">NRG</div>
          <div className="teamCountry teamFrance">FRANCE</div>
        </div>
        <div className="streamLiveItemScore">6.14</div>
        <div className="streamLiveItemVs">VS</div>
        <div className="streamLiveItemScore">1.25</div>
        <div className="streamLiveItemTeam teamLDLC">
          <div className="teamName">LDLC</div>
          <div className="teamCountry teamSpain">SPAIN</div>
        </div>
        <div className="streamLiveItemEvent">EVENT</div>
        <div className="streamLiveItemLink" />
      </div>
      <div className="streamLiveItem">
        <div className="streamLiveItemDate ">
          12:30 PM <br />
          <span className="dateDay">7/12/2018</span>
        </div>
        <div className="streamLiveItemTeam teamNRG">
          <div className="teamName">NRG</div>
          <div className="teamCountry teamFrance">FRANCE</div>
        </div>
        <div className="streamLiveItemScore">6.14</div>
        <div className="streamLiveItemVs">VS</div>
        <div className="streamLiveItemScore">1.25</div>
        <div className="streamLiveItemTeam teamLDLC">
          <div className="teamName">LDLC</div>
          <div className="teamCountry teamSpain">SPAIN</div>
        </div>
        <div className="streamLiveItemEvent">EVENT</div>
        <div className="streamLiveItemLink" />
      </div>
    </div>
  </div>
)

StreamTabsBottom.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(StreamTabsBottom)
