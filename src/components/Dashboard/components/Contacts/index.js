import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import Avatar from '../../../../assets/images/user.jpg'
import CopyIcon from '../../../../assets/images/svg/copy.svg'

import styles from './styles'

const Contacts = ({ classes }) => {
  return (
    <section id="contacts">
      <div className={classes.root}>
        <div className={classes.title}>Contacts</div>
        <div className={classes.content}>
          <div className={classes.wrInfo}>
            <div className={classes.userPhoto}>
              <img src={Avatar} alt="" />
            </div>
            <div className={classes.info}>
              <div>Mike Grinch</div>
              <div>
                0x000000000000000000000000000000000000000000000000000000000
                <img className={classes.copyIcon} src={CopyIcon} alt="" />
              </div>
            </div>
          </div>

          <div className={classes.wrInfo}>
            <div className={classes.userPhoto}>
              <img src={Avatar} alt="" />
            </div>
            <div className={classes.info}>
              <div>Clarck Malkolm</div>
              <div>
                0x000000000000000000000000000000000000000000000000000000000
                <img className={classes.copyIcon} src={CopyIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Contacts.propTypes = {}

export default withStyles(styles)(Contacts)
