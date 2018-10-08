import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import CategorieItem from './components/CategorieItem'

import styles from './styles'

const Categories = ({ classes, categories }) => (
  <div className={classes.root}>
    {categories.map(item => (
      <div className={classes.categories} key={item.id}>
        <div className={classes.categTitleWrap}>
          <a href="/" className={classes.categoriesTitle}>Categories:</a>
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