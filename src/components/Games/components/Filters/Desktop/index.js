import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const FiltersDesktop = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.sortGenre}>
      <span className={classes.sortGenreName}>genre:</span>
      <a href="#" className={classes.sortGenreItem}>
        dice games
      </a>
    </div>
    <div className={classes.sortRating}>
      <span className={classes.sortRatingName}>rating:</span>
      <a href="#" className={classes.sortRatingItem}>
        more than 6 stars
      </a>
    </div>
    <div className={classes.sortSearch}>
      <input
        type="text"
        className={classes.sortSearchField}
        placeholder="Search..."
      />
    </div>
    <div className={classes.sortContract}>
      <span className={classes.sortContractName}>
        volume of smart contract:
      </span>
      <a href="#" className={classes.sortContractItem}>
        more than 10.000 CTP
      </a>
    </div>
  </div>
)

FiltersDesktop.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(FiltersDesktop)
