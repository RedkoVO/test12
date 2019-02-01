import LogoutLogo from '../../../../assets/images/logout.png'
import WalletLogo from '../../../../assets/images/svg/wallet.svg'
import VexchangeLogo from '../../../../assets/images/svg/vexchange.svg'
import ShopdLogo from '../../../../assets/images/svg/shopBag.svg'
import AppsLogo from '../../../../assets/images/app.png'
import PlayLogo from '../../../../assets/images/svg/play.svg'
import SocialLogo from '../../../../assets/images/svg/social.svg'
import SettingsLogo from '../../../../assets/images/svg/settings.svg'

export default theme => ({
  root: {
    position: 'fixed',
    left: 0,
    top: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    listStyleType: 'none',
    width: '65px',
    height: '600px',
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

      [theme.breakpoints.down('md')]: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '500px',
        height: '112px',
        margin: 0,
        padding: '0 0 10px 0',
        borderBottomRightRadius: '25px',
        borderBottomLeftRadius: '25px',
        backgroundColor: 'rgba(0,0,0,0.74)',
        order: 2
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        margin: 0
      }
    },

    [theme.breakpoints.down('md')]: {
      position: 'relative',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '500px',
      height: '80px',
      margin: 0,
      padding: '0 0 10px 0',
      borderBottomRightRadius: '25px',
      borderBottomLeftRadius: '25px',
      order: 2
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      borderBottomLeftRadius: '0px',
      borderBottomRightRadius: '0px',
      margin: 0
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

    '&.active': {
      '& i': {
        boxShadow: '0px 0px 15px 6px  rgba(0, 0, 0, .6) inset',
        backgroundColor: 'rgba(255,255,255,0.5)'
      }
    },

    [theme.breakpoints.down('md')]: {
      width: '40px'
    }
  },
  wrLogout: {
    cursor: 'pointer'
  },
  menuIcon: {
    display: 'block',
    minHeight: '35px',
    width: '35px',
    borderRadius: '5px'
  },
  logout: {
    backgroundImage: `url(${LogoutLogo})`,
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
  vexchange: {
    backgroundImage: `url(${VexchangeLogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '17px 17px',
    backgroundPosition: 'center'
  },
  apps: {
    backgroundImage: `url(${AppsLogo})`, //
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
  }
})
