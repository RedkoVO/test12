import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import MenuNavigation from '../../MenuNavigation'
import HeaderCatalog from '../components/HeaderCatalog'

import GunLogo from '../../../assets/images/gun.png'
import VisaLogo from '../../../assets/images/visa.png'
import BitcnpayLogo from '../../../assets/images/bitcnpay.png'
import AgspayLogo from '../../../assets/images/agspay.png'

import styles from './styles'

const Skins = ({ classes, handleLogout, isDesktop }) => (
  <div className="mainWrapperTrade">
    <div className="containerTradeWrap">
      <div className="containerTrade">
        <header className={classes.headerSkins}>
          <MenuNavigation page="dark" handleLogout={handleLogout} />
          <HeaderCatalog isDesktop={isDesktop} />
        </header>

        <main className="tradeMain">
					<div className="tadeTop">
						<div className="tradeGame">
							<div className="tradeGameSelect">Game:</div>	
							<a href="#" className="tradeGameItem">CS:GO</a>
						</div>
						<div className="tradeStream">
							<div className="tradeStreamTitle">Put your steam trade url: </div>
							<div className="tradeStreamUrlWrap">
								<input type="text" className="tradeStreamUrl" placeholder="https://steamcommunity.com/groups/dota2lounge/discussions/0/558" />
							</div>
						</div>
					</div>




					<div className="tradeSkins">
						<div className="tradeSkinsTitle">Select skins you want to sale:</div>
						<div className="tradeSkinsItemWrap current" style={{display: 'flex'}}>
							<div className="tradeSkinsItem skinSelected" style={{display: 'flex'}}>
								<div className="skinsItemImg">
									<img src={GunLogo} alt="" />
								</div>
								<div className="skinsItemName">Gun: Good Weapon2 1.2</div>
								<div className="skinsItemPrice">$11.10 FN</div>
								<div className="skinsItemSale">$12.30</div>
							</div>
							<div className="tradeSkinsItem " style={{display: 'flex'}}>
								<div className="skinsItemImg">
									<img src={GunLogo} alt="" />
								</div>
								<div className="skinsItemName">Gun: Good Weapon2 1.2</div>
								<div className="skinsItemPrice">$11.10 FN</div>
								<div className="skinsItemSale">$12.30</div>
							</div>
							<div className="tradeSkinsItem skinSelected" style={{display: 'flex'}}>
								<div className="skinsItemImg">
									<img src={GunLogo} alt="" />
								</div>
								<div className="skinsItemName">Gun: Good Weapon2 1.2</div>
								<div className="skinsItemPrice">$11.10 FN</div>
								<div className="skinsItemSale">$12.30</div>
							</div>
							<div className="tradeSkinsItem " style={{display: 'flex'}}>
								<div className="skinsItemImg">
									<img src={GunLogo} alt="" />
								</div>
								<div className="skinsItemName">Gun: Good Weapon2 1.2</div>
								<div className="skinsItemPrice">$11.10 FN</div>
								<div className="skinsItemSale">$12.30</div>
							</div>
							<div className="tradeSkinsItem skinSelected" style={{display: 'flex'}}>
								<div className="skinsItemImg">
									<img src={GunLogo} alt="" />
								</div>
								<div className="skinsItemName">Gun: Good Weapon2 1.2</div>
								<div className="skinsItemPrice">$11.10 FN</div>
								<div className="skinsItemSale">$12.30</div>
							</div>
							<div className="tradeSkinsItem skinSelected" style={{display: 'flex'}}>
								<div className="skinsItemImg">
									<img src={GunLogo} alt="" />
								</div>
								<div className="skinsItemName">Gun: Good Weapon2 1.2</div>
								<div className="skinsItemPrice">$11.10 FN</div>
								<div className="skinsItemSale">$12.30</div>
							</div>
							<div className="tradeSkinsItem " style={{display: 'flex'}}>
								<div className="skinsItemImg">
									<img src={GunLogo} alt="" />
								</div>
								<div className="skinsItemName">Gun: Good Weapon2 1.2</div>
								<div className="skinsItemPrice">$11.10 FN</div>
								<div className="skinsItemSale">$12.30</div>
							</div>
							<div className="tradeSkinsItem " style={{display: 'flex'}}>
								<div className="skinsItemImg">
									<img src={GunLogo} alt="" />
								</div>
								<div className="skinsItemName">Gun: Good Weapon2 1.2</div>
								<div className="skinsItemPrice">$11.10 FN</div>
								<div className="skinsItemSale">$12.30</div>
							</div>
							<div className="tradeSkinsItem skinSelected" style={{display: 'flex'}}>
								<div className="skinsItemImg">
									<img src={GunLogo} alt="" />
								</div>
								<div className="skinsItemName">Gun: Good Weapon2 1.2</div>
								<div className="skinsItemPrice">$11.10 FN</div>
								<div className="skinsItemSale">$12.30</div>
							</div>
							<div className="tradeSkinsItem " style={{display: 'flex'}}>
								<div className="skinsItemImg">
									<img src={GunLogo} alt="" />
								</div>
								<div className="skinsItemName">Gun: Good Weapon2 1.2</div>
								<div className="skinsItemPrice">$11.10 FN</div>
								<div className="skinsItemSale">$12.30</div>
							</div>
							<div className="tradeSkinsItem skinSelected" style={{display: 'flex'}}>
								<div className="skinsItemImg">
									<img src={GunLogo} alt="" />
								</div>
								<div className="skinsItemName">Gun: Good Weapon2 1.2</div>
								<div className="skinsItemPrice">$11.10 FN</div>
								<div className="skinsItemSale">$12.30</div>
							</div>
							<div className="tradeSkinsItem " style={{display: 'flex'}}>
								<div className="skinsItemImg">
									<img src={GunLogo} alt="" />
								</div>
								<div className="skinsItemName">Gun: Good Weapon2 1.2</div>
								<div className="skinsItemPrice">$11.10 FN</div>
								<div className="skinsItemSale">$12.30</div>
							</div>
							<div className="tradeSkinsItem skinSelected" style={{display: 'none'}}>
								<div className="skinsItemImg">
									<img src={GunLogo} alt="" />
								</div>
								<div className="skinsItemName">Gun: Good Weapon2 1.2</div>
								<div className="skinsItemPrice">$11.10 FN</div>
								<div className="skinsItemSale">$12.30</div>
							</div>
							<div className="tradeSkinsItem " style={{display: 'none'}}>
								<div className="skinsItemImg">
									<img src={GunLogo} alt="" />
								</div>
								<div className="skinsItemName">Gun: Good Weapon2 1.2</div>
								<div className="skinsItemPrice">$11.10 FN</div>
								<div className="skinsItemSale">$12.30</div>
							</div>
							<div className="tradeSkinsItem skinSelected" style={{display: 'none'}}>
								<div className="skinsItemImg">
									<img src={GunLogo} alt="" />
								</div>
								<div className="skinsItemName">Gun: Good Weapon2 1.2</div>
								<div className="skinsItemPrice">$11.10 FN</div>
								<div className="skinsItemSale">$12.30</div>
							</div>
							<div className="tradeSkinsItem " style={{display: 'none'}}>
								<div className="skinsItemImg">
									<img src={GunLogo} alt="" />
								</div>
								<div className="skinsItemName">Gun: Good Weapon2 1.2</div>
								<div className="skinsItemPrice">$11.10 FN</div>
								<div className="skinsItemSale">$12.30</div>
							</div>
						</div>
            <ul id="page-navi">
              <li><a href="#" className="previos disable">Prev</a></li>
              <li><a href="#" className="current">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#" className="next">Next</a></li>
            </ul>
					</div>



          
					<div className="tradePayment">
						<div className="paymentTitle">Choose the way to cash out:</div>
						<div className="paymentWay">
							<div className="paymentWayItem paymentSelectItem">
								<div className="paymentWayItemImg">
									<img src={VisaLogo} alt="" />
									
								</div>
								<div className="paymentWayItemName">Credit Card</div>
								<div className="paymentWayItemUnderline selected"></div>
							</div>
							<div className="paymentWayItem">
								<div className="paymentWayItemImg">
									<img src={BitcnpayLogo} alt="" />
									
								</div>
								<div className="paymentWayItemName">Bitcoin</div>
								<div className="paymentWayItemUnderline"></div>
							</div>
							<div className="paymentWayItem">
								<div className="paymentWayItemImg">
									<img src={AgspayLogo} alt="" />
									
								</div>
								<div className="paymentWayItemName">CryptaurCoin</div>
								<div className="paymentWayItemUnderline"></div>
							</div>
						</div>
						<div className="paymentCard">
							<div className="paymentCardTitle">Cashout on my Credit card:</div>
							<div className="paymentInputWrap">
								<input type="text" className="paymentCardNum" placeholder="Card Number" />
							</div>
							<div className="paymentInputWrap2">
								<input type="text" className="paymentCardHolder" placeholder="Card Holder" />
							</div>
							
							<a href="#" className="paymentCardMonth">MM</a>
							<a href="#" className="paymentCardYear">YYYY</a>
							<div className="paymentInputWrap3">
								<input type="text" className="paymentCardCvc" placeholder="CVC" />
							</div>
							
						</div>
						<div className="paymentSelected">
							<div className="paymentSelectedTitle">You selected 6 items:</div>
							<div className="paymentSelectedItem">
								<div className="selectedText">1) Good EWeapon 1.2 ....</div>
								 <div className="selectedPrice">$12.20</div>
								 <a href="#" className="selectedClose"></a>
							</div>
							<div className="paymentSelectedItem">
								<div className="selectedText">1) Good EWeapon 1.2 ....</div>
								 <div className="selectedPrice">$12.20</div>
								 <a href="#" className="selectedClose"></a>
							</div>
							<div className="paymentSelectedItem">
								<div className="selectedText">1) Good EWeapon 1.2 ....</div>
								 <div className="selectedPrice">$12.20</div>
								 <a href="#" className="selectedClose"></a>
							</div>
							<div className="paymentSelectedItem">
								<div className="selectedText">1) Good EWeapon 1.2 ....</div>
								 <div className="selectedPrice">$12.20</div>
								 <a href="#" className="selectedClose"></a>
							</div>
							<div className="paymentSelectedItem">
								<div className="selectedText">1) Good EWeapon 1.2 ....</div>
								 <div className="selectedPrice">$12.20</div>
								 <a href="#" className="selectedClose"></a>
							</div>
							<div className="paymentSelectedItem">
								<div className="selectedText">1) Good EWeapon 1.2 ....</div>
								 <div className="selectedPrice">$12.20</div>
								 <a href="#" className="selectedClose"></a>
							</div>
						</div>
						<div className="paymentAmmount">
							<div className="paymentAmmountText">Total ammount: </div>
							<div className="paymentAmmountFill"></div>
							<div className="paymentAmmountPrice">$67.45</div>
						</div>
						<div className="paymentBonus">
							<input type="checkbox" className="paymentBonusCheck" id="paymentBonusCheck" />
							<label htmlFor="paymentBonusCheck" className="paymentBonusCheckLabel">Yes, I have a bonus code!</label>
						</div>
						<div className="paymentInputWrap4">
								<input type="text" className="paymentBonusInput" placeholder="Enter Your Bonus Code" />
						</div>
						<a href="#" className="paymentBtn">CASHOUT</a>
					</div>
				</main>

      </div>
    </div>
    <footer className="gameFooter">
      <ul className="footerNav">
        <li>
          <a href="#" className="footerNavItem">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="footerNavItem">
            Wallet
          </a>
        </li>
        <li>
          <a href="#" className="footerNavItem">
            Shop
          </a>
        </li>
        <li>
          <a href="#" className="footerNavItem">

            Games
          </a>
        </li>
        <li>
          <a href="#" className="footerNavItem">
            Friends
          </a>
        </li>
        <li>
          <a href="#" className="footerNavItem footerNavSettings ">
            Settings
          </a>
        </li>
      </ul>
      <span className="copyrightGameFooter">
        Vault. All Rights Reserved 2018
      </span>
    </footer>
  </div>
)

Skins.propTypes = {
  classes: PropTypes.object,
  handleLogout: PropTypes.func,
  isDesktop: PropTypes.bool
}

export default withStyles(styles)(Skins)
