import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const CategorieItem = ({ classes, game }) => (
  <div className={classes.root}>
    <Link to={`/game/${game.bundle}`} className={classes.gameImg}>
      <img src={game.img} alt="" className={classes.gameImgLink} />
    </Link>
    <Link to={`/game/${game.bundle}`} className={classes.gameLink}>{game.title}: <br /> <span>{game.name}</span></Link>
  </div>
)

CategorieItem.propTypes = {
  classNamees: PropTypes.object,
  game: PropTypes.object
}

export default withStyles(styles)(CategorieItem)