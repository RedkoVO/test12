import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'

import styles from './styles'

const FiltersDesktop = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.sortGenre}>
      <span className={classes.sortGenreName}>genre:</span>
      <Link to="/" className={classes.sortGenreItem}>
        dice games
      </Link>
    </div>
    <div className={classes.sortRating}>
      <span className={classes.sortRatingName}>rating:</span>
      <Link to="/" className={classes.sortRatingItem}>
        more than 6 stars
      </Link>
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
      <Link to="/" className={classes.sortContractItem}>
        more than 10.000 CTP
      </Link>
    </div>
  </div>
)

FiltersDesktop.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(FiltersDesktop)
