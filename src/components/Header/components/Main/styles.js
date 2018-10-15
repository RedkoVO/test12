import BitcoinLogo from '../../../../assets/images/svg/bitcoin.svg'
import DownLogo from '../../../../assets/images/svg/down.svg'

export default () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center',
    padding: '30px 25px 0 25px',
    width: '100%',
    boxSizing: 'border-box'
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%'
  },
  userBlock: {
    display: 'flex',
    '-ms-align-items': 'center',
    alignItems: 'center'
  },
  userHello: {
    fontSize: '18px',
    margin: '0 0 20px 0',
  },
  userVerification: {
    fontSize: '10px',
    fontWeight: '500'
  },
  wallet: {
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'stretch',
    alignItems: 'stretch',
    width: 'initial'
  },
  walletTitle: {
    textAlign: 'center',
    fontSize: '39px',
    fontWeight: 400,

    '& p': {
      margin: '30px 0 0 0'
    }
  },
  walletSum: {
    position: 'relative',
    padding: 0,
    paddingLeft: '0',
    boxSizing: 'border-box',

    '&::before': {
      // position: 'absolute',
      // content: `""`,
      // width: '45px',
      // height: '45px',
      // bottom: '15px',
      // left: '50px',
      // backgroundImage: `url(${BitcoinLogo})`,
      // backgroundRepeat: 'no-repeat',
      // backgroundSize: '45px',
      // backgroundPosition: 'center'
    },

    '&::after': {
      position: 'absolute',
      content: `""`,
      width: '30px',
      height: '30px',
      bottom: '25px',
      right: '-35px',
      backgroundImage: `url(${DownLogo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '30px',
      backgroundPosition: 'center'
    },

    '& a': {
      color: '#5e7cff',
      fontSize: '82px',
      fontWeight: 700,
      margin: '15px 0 0 0',
      padding: 0,
      lineHeight: '82px',
      textDecoration: 'none'
    }
  },
  walletNav: {
    display: 'flex',
    flexDirection: 'row',
    listStyleType: 'none',
    margin: 0,
    width: '100%',
    justifyContent: 'center'
  },
  walletNavItem: {
    textDecoration: 'none',
    color: '#f0f0f0',
    backgroundColor: '#5e7cff',
    fontWeight: 700,
    fontSize: '10px',
    padding: '5px 15px',
    borderRadius: '10px',
    margin: '0 5px'
  }
})