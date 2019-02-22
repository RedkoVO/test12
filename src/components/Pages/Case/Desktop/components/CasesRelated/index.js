import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const CasesRelated = ({ classes, relaredItems }) => (
  <div className={classes.root}>
    <div className={classes.casesRelatedTilte}>Related to this case:</div>
    {relaredItems.map(item => (
      <div className={classes.casesRelatedItem} key={item.id}>
        <div className={classes.casesRelatedItemImg}>
          <img src={item.img} alt="" />
        </div>
        <div className={classes.casesRelatedItemName}>
          Gun: <span>{item.title}</span>
        </div>
      </div>
    ))}
  </div>
)

CasesRelated.propTypes = {
  classes: PropTypes.object,
  relaredItems: PropTypes.array
}

export default withStyles(styles)(CasesRelated)
