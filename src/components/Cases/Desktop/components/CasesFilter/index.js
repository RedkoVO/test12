import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const CasesFilter = ({ classes }) => (
  <div className={classes.root}>
    <input type="text" className={classes.casesFilterSearch} placeholder="Search" />
    <div className={classes.casesFilterOptions}>
      <div className={classes.casesFilterType}>
        <div className={classes.casesFilterItem}>less than $15&lt;</div>
        <div className={classes.casesFilterItem}>$15-30</div>
        <div className={cn(classes.casesFilterItem, classes.selectedItem)}> $30-60</div>
        <div className={classes.casesFilterItem}>$60-90</div>
        <div className={classes.casesFilterItem}>less than $15&lt;</div>
      </div>
      <div className={classes.casesFilterType}>
        <div className={classes.casesFilterItem}>CS:GO</div>
        <div className={classes.casesFilterItem}>Dota 2</div>
        <div className={cn(classes.casesFilterItem, classes.selectedItem)}>Starcraft 2</div>
        <div className={classes.casesFilterItem}> Maincraft</div>
        <div className={classes.casesFilterItem}>Rainbow Six</div>
      </div>
    </div>
    <div className={classes.casesFilterBtn} />
  </div>
)

CasesFilter.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(CasesFilter)
