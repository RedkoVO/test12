import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import MenuNavigation from '../../MenuNavigation'
import HeaderCatalog from '../components/HeaderCatalog'
import TradeTop from '../components/TradeTop'
import TradeSkins from '../components/TradeSkins'
import Footer from '../../Footer/Desktop/'

import VisaLogo from '../../../assets/images/visa.png'
import BitcnpayLogo from '../../../assets/images/bitcnpay.png'
import AgspayLogo from '../../../assets/images/agspay.png'

import styles from './styles'

const Skins = ({ classes, handleLogout, isDesktop, skins }) => (
  <div className="mainWrapperTrade">
    <div className={classes.containerTradeWrap}>
      <div className={classes.containerTrade}>
        <header className={classes.headerSkins}>
          <MenuNavigation page="dark" handleLogout={handleLogout} />
          <HeaderCatalog isDesktop={isDesktop} />
        </header>

        <main className={classes.tradeMain}>
          <TradeTop />
          <TradeSkins skins={skins} />

          <div className="tradePayment">
            <div className="paymentTitle">Choose the way to cash out:</div>
            <div className="paymentWay">
              <div className="paymentWayItem paymentSelectItem">
                <div className="paymentWayItemImg">
                  <img src={VisaLogo} alt="" />
                </div>
                <div className="paymentWayItemName">Credit Card</div>
                <div className="paymentWayItemUnderline selected" />
              </div>
              <div className="paymentWayItem">
                <div className="paymentWayItemImg">
                  <img src={BitcnpayLogo} alt="" />
                </div>
                <div className="paymentWayItemName">Bitcoin</div>
                <div className="paymentWayItemUnderline" />
              </div>
              <div className="paymentWayItem">
                <div className="paymentWayItemImg">
                  <img src={AgspayLogo} alt="" />
                </div>
                <div className="paymentWayItemName">CryptaurCoin</div>
                <div className="paymentWayItemUnderline" />
              </div>
            </div>
            <div className="paymentCard">
              <div className="paymentCardTitle">Cashout on my Credit card:</div>
              <div className="paymentInputWrap">
                <input
                  type="text"
                  className="paymentCardNum"
                  placeholder="Card Number"
                />
              </div>
              <div className="paymentInputWrap2">
                <input
                  type="text"
                  className="paymentCardHolder"
                  placeholder="Card Holder"
                />
              </div>

              <a href="#" className="paymentCardMonth">
                MM
              </a>
              <a href="#" className="paymentCardYear">
                YYYY
              </a>
              <div className="paymentInputWrap3">
                <input
                  type="text"
                  className="paymentCardCvc"
                  placeholder="CVC"
                />
              </div>
            </div>
            <div className="paymentSelected">
              <div className="paymentSelectedTitle">You selected 6 items:</div>
              <div className="paymentSelectedItem">
                <div className="selectedText">1) Good EWeapon 1.2 ....</div>
                <div className="selectedPrice">$12.20</div>
                <a href="#" className="selectedClose" />
              </div>
              <div className="paymentSelectedItem">
                <div className="selectedText">1) Good EWeapon 1.2 ....</div>
                <div className="selectedPrice">$12.20</div>
                <a href="#" className="selectedClose" />
              </div>
              <div className="paymentSelectedItem">
                <div className="selectedText">1) Good EWeapon 1.2 ....</div>
                <div className="selectedPrice">$12.20</div>
                <a href="#" className="selectedClose" />
              </div>
              <div className="paymentSelectedItem">
                <div className="selectedText">1) Good EWeapon 1.2 ....</div>
                <div className="selectedPrice">$12.20</div>
                <a href="#" className="selectedClose" />
              </div>
              <div className="paymentSelectedItem">
                <div className="selectedText">1) Good EWeapon 1.2 ....</div>
                <div className="selectedPrice">$12.20</div>
                <a href="#" className="selectedClose" />
              </div>
              <div className="paymentSelectedItem">
                <div className="selectedText">1) Good EWeapon 1.2 ....</div>
                <div className="selectedPrice">$12.20</div>
                <a href="#" className="selectedClose" />
              </div>
            </div>
            <div className="paymentAmmount">
              <div className="paymentAmmountText">Total ammount: </div>
              <div className="paymentAmmountFill" />
              <div className="paymentAmmountPrice">$67.45</div>
            </div>
            <div className="paymentBonus">
              <input
                type="checkbox"
                className="paymentBonusCheck"
                id="paymentBonusCheck"
              />
              <label
                htmlFor="paymentBonusCheck"
                className="paymentBonusCheckLabel"
              >
                Yes, I have a bonus code!
              </label>
            </div>
            <div className="paymentInputWrap4">
              <input
                type="text"
                className="paymentBonusInput"
                placeholder="Enter Your Bonus Code"
              />
            </div>
            <a href="#" className="paymentBtn">
              CASHOUT
            </a>
          </div>
        </main>
      </div>
    </div>

    <Footer />
  </div>
)

Skins.propTypes = {
  classes: PropTypes.object,
  handleLogout: PropTypes.func,
  isDesktop: PropTypes.bool,
  skins: PropTypes.array
}

export default withStyles(styles)(Skins)
