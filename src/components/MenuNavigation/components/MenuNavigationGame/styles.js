import DashboardLogo from '../../../../assets/images/svg/wallet.svg'
import WalletLogo from '../../../../assets/images/svg/wallet.svg'
import ShopdLogo from '../../../../assets/images/svg/shopBag.svg'
import PlayLogo from '../../../../assets/images/svg/play.svg'
import SocialLogo from '../../../../assets/images/svg/social.svg'
import SettingsLogo from '../../../../assets/images/svg/settings.svg'

export default theme => ({
  root: {
    position: 'absolute',
    left: 0,
    top: 0,
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
    },

    '&.dark': {
      position: 'absolute',
      left: 0,
      top: 0,
      backgroundColor: 'rgba(0,0,0, 0.71)',

      '& li': {
        '& a': {
          color: '#fff'
        }
      },

      [theme.breakpoints.down('sm')]: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '80px',
        padding: '0 0 10px 0',
        width: '100%',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        order: 2
      }
    },

    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      flexDirection: 'row',
      justifyContent: 'space-around',
      height: '80px',
      padding: '0 0 10px 0',
      width: '100%',
      borderBottomLeftRadius: '0px',
      borderBottomRightRadius: '0px',
      order: 2
    }
  },
  headerMenuItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    textDecoration: 'none',
    color: '#000',
    paddingTop: '10px',
    boxSizing: 'border-box',
    fontSize: '9px',
    textAlign: 'center',
    verticalAlign: 'bottom',

    '&:hover, &:active': {
      '& i': {
        boxShadow: '0px 0px 15px 6px  rgba(0, 0, 0, .6) inset',
        backgroundColor: 'rgba(255,255,255,0.5)'
      }
    },

    [theme.breakpoints.down('sm')]: {
      width: '40px'
    }
  },
  menuIcon: {
    display: 'block',
    minHeight: '35px',
    width: '35px',
    borderRadius: '5px'
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
  logout: {
    cursor: 'pointer',
    display: 'block',
    textAlign: 'center'
  }
})
