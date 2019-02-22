import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const CasesList = ({ classes, cases }) => (
  <div className={classes.root}>
    {cases.map(item => (
      <div className={classes.casesListItem} key={item.id}>
        <div className={classes.casesListItemImg}>
          <img src={item.img} alt="" />
        </div>
        <div className={classes.casesListItemName}>
          Case: <span>{item.title}</span>
        </div>
        <div className={classes.casesListItemPrise}>
          Open for <span>{item.cost}</span>
        </div>
        <div className={classes.casesListItemGame}>
          Case: <span>{item.game}</span>
        </div>
        <div className={classes.casesListItemMarker} />
      </div>
    ))}
  </div>
)

CasesList.propTypes = {
  classes: PropTypes.object,
  cases: PropTypes.array
}

export default withStyles(styles)(CasesList)
