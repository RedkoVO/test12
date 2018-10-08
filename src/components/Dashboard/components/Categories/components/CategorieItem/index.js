import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const CategorieItem = ({ classes, game }) => (
  <div className={classes.root}>
    <a href="/" className={classes.gameImg}>
      <img src={game.img} alt="" className={classes.gameImgLink} />
    </a>
    <a href="/" className={classes.gameLink}>{game.title}: <br /> <span>{game.name}</span></a>
  </div>
)

CategorieItem.propTypes = {
  classNamees: PropTypes.object,
  game: PropTypes.object
}

export default withStyles(styles)(CategorieItem)