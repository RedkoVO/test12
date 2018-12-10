import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

import CaseXOpen from '../../../../../assets/images/caseXOpen.png'

const CaseOpen = ({ classes, caseItems }) => (
  <div className={classes.root}>
    <div className={classes.caseOpenTop}>
      <div className={classes.caseOpenBackBtn} />
      <div className={classes.caseOpenTopImg}>
        <img src={CaseXOpen} alt="" />
      </div>
      <div className={classes.caseOpenTopDescr}>
        <div className={classes.caseOpenTopMarker} />
        <div className={classes.caseOpenTopName}>
          Case: <span>Hello, buddy!</span>
        </div>
        <div className={classes.caseOpenTopPrice}>
          Open for <span>$34.20</span>
        </div>
        <div className={classes.caseOpenTopGame}>
          Case: <span>CS:GO</span>
        </div>
      </div>
    </div>
    <div className={classes.caseOpenContent}>
      <div className={classes.caseOpenTitle}>This case cointains this stuff:</div>

      {caseItems.map(item => (
        <div className={classes.caseOpenItem} key={item.id}>
          <div className={classes.caseOpenItemImg}>
            <img src={item.img} alt="" />
          </div>
          <div className={classes.caseOpenItemName}>
            Gun: <span>{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
)

CaseOpen.propTypes = {
  classes: PropTypes.object,
  caseItems: PropTypes.array
}

export default withStyles(styles)(CaseOpen)
