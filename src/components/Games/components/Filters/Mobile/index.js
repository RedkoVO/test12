import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const FiltersMobile = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.mobileSortSearch}>
      <input
        type="text"
        className={classes.mobileSortSearchField}
        placeholder="Search..."
      />
    </div>
    <div className={classes.mobileSortItems}>
      <div className={classes.mobileSortGenre}>
        <span className={classes.mobileSortGenreName}> genre:</span>
        <a href="#" className={classes.mobileSortGenreItem}>
          dice games
        </a>
      </div>
      <div className={classes.mobileSortRating}>
        <span className={classes.mobileSortRatingName}> rating:</span>
        <a href="#" className={classes.mobileSortRatingItem}>
          more than 6 stars
        </a>
      </div>
      <div className={classes.mobileSortContract}>
        <span className={classes.mobileSortContractName}>
          volume of smart contract:
        </span>
        <a href="#" className={classes.mobileSortContractItem}>
          more than 10.000 CTP
        </a>
      </div>
      <a href="#" className={classes.mobileSortApplyBtn}>
        APPLY
      </a>
      <a href="#" className={classes.mobileSortCloseBtn}>
        <img src="img/svg/close.svg" alt="" />
      </a>
    </div>
    <a href="#" className={classes.mobilleFilterBtn}>
      <img src="img/svg/filter.svg" alt="" />
      <span>Filters</span>
    </a>
  </div>
)

FiltersMobile.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(FiltersMobile)
