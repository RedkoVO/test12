import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import gC from '../../../constants'

import MenuNavigation from '../../MenuNavigation'
import RollTop from '../components/RollTop'
import RollBottom from '../components/RollBottom'
import GameCounter from '../components/GameCounter'
import GameComments from '../components/GameComments'

import styles from './styles'

const Game = ({ classes, handlePlayNow, isShowIframe, address, slider, comments, handleLogout }) => {
  const url = `${gC.IFRAME_URL}${address}`
  // const url = "http://34.212.109.62:3333/en/web/fourclover/?sid=dcb_1y7u83jps7j1aqzgekqhwi6pr4z35dqz1icjegrkfcfqwmtzcrzk3abxgrdx#"

  return (
    <div className={classes.root}>
      <div className={classes.containerGame}>
        <header className={classes.headerGame}>
          <MenuNavigation page="dark" handleLogout={handleLogout} />

          <div className={classes.gameHeaderMain}>
            <RollTop />
            <RollBottom handlePlayNow={handlePlayNow} slider={slider} />
          </div>
        </header>

        <main className={classes.gameMain}>
          <GameCounter />
          <GameComments comments={comments} />
        </main>
      </div>

      {isShowIframe && (
        <div>
          <div className={classes.overlayIframe} onClick={() => handlePlayNow()} />
          <div className={classes.wrIframe}>
            <iframe
              id="gameFrame"
              className={classes.gameIframe}
              title="game"
              src={url}
            />
          </div>
        </div>
      )}
    </div>
  )
}

Game.propTypes = {
  classes: PropTypes.object,
  handlePlayNow: PropTypes.func,
  isShowIframe: PropTypes.bool,
  address: PropTypes.string,
  slider: PropTypes.array,
  comments: PropTypes.array,
  handleLogout: PropTypes.func
}

export default withStyles(styles)(Game)