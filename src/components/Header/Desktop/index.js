import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import MenuNavigation from '../components/MenuNavigation'

import styles from './styles'

const Header = ({ classes }) => (
  <header className={classes.root}>
    <MenuNavigation />

    <div className="headerMain">
      <div className="user">
        <div className="userBlock">
          <p className="userHello"> Hello, Ben A <br />
            <span className="userVerification">KYC VERIFICATED</span>
          </p>
          <div className="userPhoto">
            <img src="img/user_photo.png" alt="" />
          </div>
        </div>
      </div>
      <div className="wallet">
        <div className="walletTitle">
          <p>My btc wallet:</p>
        </div>
        <div className="walletSum">
          <a href="/">2.3122</a>
        </div>
        <ul className="walletNav">
          <li>
            <a href="/" className="walletNavItem">Send Money</a>
          </li>
          <li>
            <a href="/" className="walletNavItem">Tranfer Money</a>
          </li>
          <li>
            <a href="/" className="walletNavItem">Invoice</a>
          </li>
          <li>
            <a href="/" className="walletNavItem">Cashout</a>
          </li>
        </ul>
      </div>
      <div className="actions">
        <div className="actionsStatistics">
          <span className="statisticsTitle">Statistics</span>
          <div className="statisticsGraph">
            <canvas id="cvs" width="200" height="90">
              [No canvas support]
            </canvas>
          </div>
        </div>
        <div className="actionsSend">
          <span className="sendTitle">Send now</span>
          <div className="sendAddress">
            <input type="text" className="sendAddressField" placeholder="Put address you want to send the money" />
          </div>
          <div className="sendAmmount">
            <input type="text" className="sendAmmountField" placeholder="Set ammount" />
          </div>
          <a href="/" className="sendBtn">Send money</a>
        </div>
        <div className="actionsInvoice">
          <span className="invoiceTitle">Invoice</span>
          <div className="invoiceAmmount">
            <input type="text" className="invoiceAmmountField" placeholder="Set ammount you need to receive" />
          </div>
          <a href="/" className="invoiceBtn">Generate link</a>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Header)