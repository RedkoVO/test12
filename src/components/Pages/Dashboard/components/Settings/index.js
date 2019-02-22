import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox'
import withStyles from '@material-ui/core/styles/withStyles'
import cn from 'classnames'

import styles from './styles'

const Settings = ({
  classes,
  handleSubscribeCheckbox,
  isSubscribeCheckbox
}) => {
  return (
    <section id="settings">
      <div className={classes.root}>
        <div className={classes.title}>Settings</div>
        <div className={classes.themeTitle}>Theme</div>
        <div className={classes.wrBtns}>
          <button className={classes.btn}>Light</button>
          <button className={cn(classes.btn, classes.disableBtn)}>Dark</button>
        </div>

        <div className={classes.wrCheckbox}>
          <Checkbox
            checked={isSubscribeCheckbox}
            onChange={() => handleSubscribeCheckbox()}
            value="checkedB"
            color="primary"
          />
          Subscribe for funds receiving
        </div>
      </div>
    </section>
  )
}

Settings.propTypes = {
  handleSubscribeCheckbox: PropTypes.func,
  isSubscribeCheckbox: PropTypes.bool
}

export default withStyles(styles)(Settings)
