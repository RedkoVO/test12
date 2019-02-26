import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const StreamDescription = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.streamDescriptionLeft}>
      <div className={classes.streamDescriptionText}>
        Integer tempor semper sapien sit amet bibendum. Etiam ornare tellus at
        sapien vehicula, quis scelerisque turpis rokaste egestas quis botona.
      </div>
      <div className={classes.streamHashTags}>
        #ROLLED #BESTCRYPTO #ETH{' '}
        <div className={classes.streamAddHashTags}>+</div>
      </div>
    </div>
    <div className={classes.streamDescriptionRight}>
      <div className={classes.streamAddFavorites}>Add to favorites</div>
      <div className={classes.streamShareSocial}>Share in social</div>
    </div>
  </div>
)

StreamDescription.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(StreamDescription)
