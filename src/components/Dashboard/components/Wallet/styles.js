import gC from '../../../../constants'
import DownLogo from '../../../../assets/images/svg/down.svg'

export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center',
    padding: '30px 25px 0 25px',
    width: '100%',
    boxSizing: 'border-box',

    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
  },
  wallet: {
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'stretch',
    alignItems: 'stretch',
    width: 'initial',

    [theme.breakpoints.down('md')]: {
      marginBottom: '20px',
      paddingBottom: '20px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '320px',
      '-ms-align-items': 'center',
      alignItems: 'center',
      paddingBottom: '20px',
      marginBottom: '20px'
    }
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
    textAlign: 'center',

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
    justifyContent: 'center',

    [theme.breakpoints.down('xs')]: {
      padding: 0
    }
  },
  walletNavItem: {
    textDecoration: 'none',
    color: '#f0f0f0',
    backgroundColor: '#5e7cff',
    fontWeight: 700,
    fontSize: '10px',
    padding: '5px 15px',
    borderRadius: '10px',
    margin: '0 5px',

    '&:hover': {
      backgroundColor: '#76bff7'
    },
    '&:active': {
      backgroundColor: '#054677'
    },

    [theme.breakpoints.down('xs')]: {
      padding: '5px 7px'
    }
  }
})