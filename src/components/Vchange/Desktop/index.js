import React from 'react'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import withStyles from '@material-ui/core/styles/withStyles'

import Graph from '../components/Graph'
import PricesBuy from '../components/PricesBuy'
import PricesSell from '../components/PricesSell'

import BTCIcon from '../../../assets/images/btc_icon.png'
import USDIcon from '../../../assets/images/usd_icon.png'

import styles from './styles'

const Vchange = ({
  classes,
  pricesBuyData,
  pricesSellData,
  curencySelectFirstValue,
  curencySelectSecondValue,
  handleChangeFirsCurrency,
  handleChangeSecondCurrency
}) => (
  <main>
    <div className={classes.root}>
      <div className={classes.title}>Pair to exchange</div>
      <div className={classes.wrChooseCurrency}>
        <div className={classes.wrCurrency}>
          <Select
            className={classes.selectCurency}
            value={curencySelectFirstValue}
            onChange={e => handleChangeFirsCurrency(e.target.value)}
            IconComponent={props => (
              <i {...props} className={classes.curencyIcon} />
            )}
            inputProps={{
              id: 'curencyDropdownFirst',
              name: 'firstCurency'
            }}
            SelectDisplayProps={{ className: classes.selectField }}
            MenuProps={{ classes: { paper: classes.dropdownStyle } }}
          >
            <MenuItem value={'BTC'} key={1}>
              <div className={classes.curency}>
                <img src={BTCIcon} alt="" />
                BTC
              </div>
            </MenuItem>
            <MenuItem value={'USD'} key={2}>
              <div className={classes.curency}>
                <img src={USDIcon} alt="" />
                USD
              </div>
            </MenuItem>
            <MenuItem value={'EUR'} key={3}>
              <div className={classes.curency}>
                <img src={BTCIcon} alt="" />
                EUR
              </div>
            </MenuItem>
          </Select>
          <div className={classes.balance}>
            Balance: 0.2658 {curencySelectFirstValue}
          </div>
        </div>

        <div className={classes.hyphen}>-</div>

        <div className={classes.wrCurrency}>
          <Select
            className={classes.selectCurency}
            value={curencySelectSecondValue}
            onChange={e => handleChangeSecondCurrency(e.target.value)}
            IconComponent={props => (
              <i {...props} className={classes.curencyIcon} />
            )}
            inputProps={{
              id: 'curencyDropdownSecond',
              name: 'secondCurency'
            }}
            SelectDisplayProps={{ className: classes.selectField }}
            MenuProps={{ classes: { paper: classes.dropdownStyle } }}
          >
            <MenuItem value={'BTC'} key={1}>
              <div className={classes.curency}>
                <img src={BTCIcon} alt="" />
                BTC
              </div>
            </MenuItem>
            <MenuItem value={'USD'} key={2}>
              <div className={classes.curency}>
                <img src={USDIcon} alt="" />
                USD
              </div>
            </MenuItem>
            <MenuItem value={'EUR'} key={3}>
              <div className={classes.curency}>
                <img src={BTCIcon} alt="" />
                EUR
              </div>
            </MenuItem>
          </Select>
          <div className={classes.balance}>
            Balance: 2378.89 {curencySelectSecondValue}
          </div>
        </div>
      </div>

      <Graph />

      <div className={classes.prices}>
        <PricesBuy pricesBuyData={pricesBuyData} />
        <PricesSell pricesSellData={pricesSellData} />
      </div>
    </div>
  </main>
)

Vchange.propTypes = {
  pricesBuyData: PropTypes.array,
  pricesSellData: PropTypes.array,
  curencySelectFirstValue: PropTypes.string,
  curencySelectSecondValue: PropTypes.string,
  handleChangeFirsCurrency: PropTypes.func,
  handleChangeSecondCurrency: PropTypes.func
}

export default withStyles(styles)(Vchange)
