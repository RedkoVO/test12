import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import MenuNavigation from '../../MenuNavigation'
import RollTop from '../components/RollTop'
import RollBottom from '../components/RollBottom'
import GameCounter from '../components/GameCounter'
import GameComments from '../components/GameComments'

import styles from './styles'

const Game = ({
  classes,
  handlePlayNow,
  isShowIframe,
  url,
  slider,
  comments,
  handleLogout,
  imgMain
}) => (
  <div className="mainWrapperGame">
    <div className={classes.containerGame}>
      <header className={classes.headerGame}>
        <MenuNavigation page="dark" handleLogout={handleLogout} />
        <div className={classes.gameHeaderMain}>
          <RollTop imgMain={imgMain} />
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
        <div
          className={classes.overlayIframe}
          onClick={() => handlePlayNow()}
        />
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

Game.propTypes = {
  classes: PropTypes.object,
  handlePlayNow: PropTypes.func,
  isShowIframe: PropTypes.bool,
  url: PropTypes.string,
  slider: PropTypes.array,
  comments: PropTypes.array,
  handleLogout: PropTypes.func,
  imgMain: PropTypes.string
}

export default withStyles(styles)(Game)
