import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'

import CategorieItem from './components/CategorieItem'

import styles from './styles'

const Categories = ({ classes, categories }) => (
  <div className={classes.root}>
    {categories.map(item => (
      <div className={classes.categories} key={item.id}>
        <div className={classes.categTitleWrap}>
          <Link to="/" className={classes.categoriesTitle}>Categories:</Link>
        </div>

        {item.game.map(itemGames => (
          <CategorieItem game={itemGames} key={itemGames.id} />
        ))}
      </div>
    ))}
  </div>
)

Categories.propTypes = {
  classNamees: PropTypes.object,
  categories: PropTypes.array
}

export default withStyles(styles)(Categories)