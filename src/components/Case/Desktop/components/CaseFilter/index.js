import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const CaseFilter = ({ classes }) => (
  <div className={classes.root}>
    <input type="text" className={classes.caseFilterSearch} placeholder="Search" />
    <div className={classes.caseFilterOptions}>
      <div className={classes.caseFilterType}>
        <div className={classes.caseFilterItem}>less than $15&lt;</div>
        <div className={classes.caseFilterItem}>$15-30</div>
        <div className={cn(classes.caseFilterItem, classes.selectedItem)}> $30-60</div>
        <div className={classes.caseFilterItem}>$60-90</div>
        <div className={classes.caseFilterItem}>less than $15&lt;</div>
      </div>
      <div className={classes.caseFilterType}>
        <div className={classes.caseFilterItem}>CS:GO</div>
        <div className={classes.caseFilterItem}>Dota 2</div>
        <div className={cn(classes.caseFilterItem, classes.selectedItem)}>Starcraft 2</div>
        <div className={classes.caseFilterItem}> Maincraft</div>
        <div className={classes.caseFilterItem}>Rainbow Six</div>
      </div>
    </div>
    <div className={classes.caseFilterBtn} />
  </div>
)

CaseFilter.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(CaseFilter)
