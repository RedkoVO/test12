import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'

import FilterIcon from '../../../../../assets/images/svg/filter.svg'
import CloseIcon from '../../../../../assets/images/svg/close.svg'

import styles from './styles'

const FiltersMobile = ({ classes, isShowFilter, handleShowFilter }) => (
  <div className={classes.root}>
    <div className={classes.mobileSortSearch}>
      <input
        type="text"
        className={classes.mobileSortSearchField}
        placeholder="Search..."
      />
    </div>

    <div
      className={classes.mobilleFilterBtn}
      onClick={() => handleShowFilter()}
    >
      <img src={FilterIcon} alt="" />
      <span>Filters</span>
    </div>

    {isShowFilter && (
      <div className={classes.mobileSortItems}>
        <div className={classes.mobileSortGenre}>
          <span className={classes.mobileSortGenreName}> genre:</span>
          <Link to="/" className={classes.mobileSortGenreItem}>
            dice games
          </Link>
        </div>
        <div className={classes.mobileSortRating}>
          <span className={classes.mobileSortRatingName}> rating:</span>
          <Link to="/" className={classes.mobileSortRatingItem}>
            more than 6 stars
          </Link>
        </div>
        <div className={classes.mobileSortContract}>
          <span className={classes.mobileSortContractName}>
            volume of smart contract:
          </span>
          <Link to="/" className={classes.mobileSortContractItem}>
            more than 10.000 CTP
          </Link>
        </div>
        <Link to="/" className={classes.mobileSortApplyBtn}>
          APPLY
        </Link>
        <div
          className={classes.mobileSortCloseBtn}
          onClick={() => handleShowFilter()}
        >
          <img src={CloseIcon} alt="" />
        </div>
      </div>
    )}
  </div>
)

FiltersMobile.propTypes = {
  classes: PropTypes.object,
  isShowFilter: PropTypes.bool,
  handleShowFilter: PropTypes.func
}

export default withStyles(styles)(FiltersMobile)
