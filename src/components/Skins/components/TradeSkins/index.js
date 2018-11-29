import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import cn from 'classnames'

import GunLogo from '../../../../assets/images/gun.png'

import styles from './styles'

const TradeSkins = ({ classes, skins }) => (
  <div className={classes.root}>
    <div className={classes.tradeSkinsTitle}>
      Select skins you want to sale:
    </div>
    <div className={cn(classes.tradeSkinsItemWrap, classes.current)}>
      {skins.map(item => (
        <div className={cn(classes.tradeSkinsItem, classes.skinSelected)} key={item.id}>
          <div className={classes.skinsItemImg}>
            <img src={GunLogo} alt="" />
          </div>
          <div className={classes.skinsItemName}>{item.title}</div>
          <div className={classes.skinsItemPrice}>{item.cost}</div>
          <div className={classes.skinsItemSale}>{item.discountsCost}</div>
        </div>
      ))}
    </div>

    <ul className={classes.pageNavi}>
      <li>
        <div className={cn(classes.previos, classes.disable)}>Prev</div>
      </li>
      <li>
        <div className={classes.current}>1</div>
      </li>
      <li>
        <div>2</div>
      </li>
      <li>
        <div className={classes.next}>Next</div>
      </li>
    </ul>
  </div>
)

TradeSkins.propTypes = {
  classes: PropTypes.object,
  skins: PropTypes.array
}

export default withStyles(styles)(TradeSkins)
