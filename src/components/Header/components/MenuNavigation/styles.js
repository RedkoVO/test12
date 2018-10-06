import DashboardLogo from '../../../../assets/images/svg/wallet.svg'
import WalletLogo from '../../../../assets/images/svg/wallet.svg'
import ShopdLogo from '../../../../assets/images/svg/shopBag.svg'
import PlayLogo from '../../../../assets/images/svg/play.svg'
import SocialLogo from '../../../../assets/images/svg/social.svg'
import SettingsLogo from '../../../../assets/images/svg/settings.svg'

export default () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    listStyleType: 'none',
    width: '65px',
    height: '535px',
    backgroundColor: '#f5f5f5',
    margin: 0,
    padding: 0,
    paddingBottom: '50px',
    borderBottomRightRadius: '25px',
    boxSizing: 'border-box',

    '& li': {
      height: '65px',
      margin: 0,
      padding: 0
    }
  },
  headerMenuItem: {
    display: 'block',
    width: '100%',
    height: '100%',
    textDecoration: 'none',
    color: '#000',
    padding: '20px 10px 10px 10px',
    boxSizing: 'border-box',
    fontSize: '9px',
    textAlign: 'center',
    verticalAlign: 'bottom'
  },
  menuIcon: {
    fontSize: '16px',
    color: '#000',
    paddingRight: '25px',
    paddingTop: '10px',
    marginBottom: '10px',
    lineHeight: '26px'
  },
  dashboard: {
    backgroundImage: `url(${DashboardLogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '17px 17px',
    backgroundPosition: 'center'
  },
  walletIcon: {
    backgroundImage: `url(${WalletLogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '17px 17px',
    backgroundPosition: 'center'
  },
  shop: {
    backgroundImage: `url(${ShopdLogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '17px 17px',
    backgroundPosition: 'center'
  },
  games: {
    backgroundImage: `url(${PlayLogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '22px 17px',
    backgroundPosition: 'center'
  },
  friends: {
    backgroundImage: `url(${SocialLogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '30px',
    backgroundPosition: 'center'
  },
  settings: {
    backgroundImage: `url(${SettingsLogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '25px',
    backgroundPosition: 'center'
  },
})