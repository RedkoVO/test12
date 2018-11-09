import gC from '../../../../constants'
import TransactionLogo from '../../../../assets/images/svg/transactions.svg'
import WalletLogo from '../../../../assets/images/svg/wallet.svg'
import MoneyTransactLogo from '../../../../assets/images/svg/moneyTransact.svg'
import StatusLogo from '../../../../assets/images/svg/status.svg'
import TimeLogo from '../../../../assets/images/svg/time.svg'

export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center',
    paddingTop: '60px',
    boxSizing: 'border-box',
    marginBottom: '30px',

    [theme.breakpoints.down(gC.BRECKPOINT.MD)]: {
      width: '510px'
    },
    [theme.breakpoints.down(gC.BRECKPOINT.SM)]: {
      width: '480px'
    },
    [theme.breakpoints.down(gC.BRECKPOINT.XS)]: {
      width: '320px'
    }
  },
  transactionsTitle: {
    position: 'relative',
    fontSize: '29px',
    fontWeight: 700,
    color: '#5e7cff',
    textAlign: 'center',
    marginBottom: '0px',

    '&::before': {
      position: 'absolute',
      content: `""`,
      width: '20px',
      height: '20px',
      bottom: '6px',
      left: '-25px',
      backgroundImage: `url(${TransactionLogo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '30px',
      backgroundPosition: 'center'
    }
  },
  transactionsTable: {
    width: '800px',
    height: '135px',
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center',
    marginBottom: '11px',

    [theme.breakpoints.down(gC.BRECKPOINT.SM)]: {
      height: '165px'
    }
  },
  tableData: {
    paddingLeft: '40px',
    fontSize: '14px',
    fontWeight: 400,
    boxSizing: 'border-box',

    [theme.breakpoints.down(gC.BRECKPOINT.LG)]: {
      paddingLeft: '35px'
    },
    [theme.breakpoints.down(gC.BRECKPOINT.XS)]: {
      fontSize: '11px',
      paddingLeft: '15px'
    }
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    '-ms-align-items': 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e3e3e3',
    marginBottom: '7px',
    minHeight: '30px',
    paddingRight: '25px',
    boxSizing: 'border-box',
    borderRadius: '15px',
    width: '790px',

    [theme.breakpoints.down(gC.BRECKPOINT.LG)]: {
      paddingRight: '10px',
      width: '765px'
    },
    [theme.breakpoints.down(gC.BRECKPOINT.MD)]: {
      flexWrap: 'wrap',
      minHeight: '50px',
      width: '500px'
    },
    [theme.breakpoints.down(gC.BRECKPOINT.SM)]: {
      flexWrap: 'wrap',
      minHeight: '50px',
      width: '470px'
    },
    [theme.breakpoints.down(gC.BRECKPOINT.XS)]: {
      width: '310px'
    }
  },
  tableHead: {
    '-ms-align-items': 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: '5px',
    marginBottom: 0,
    backgroundColor: '#f0f0f0',

    '& $tableData': {
      fontSize: '10px',
      fontWeight: 700
    },

    [theme.breakpoints.down(gC.BRECKPOINT.MD)]: {
      display: 'none'
    }
  },
  icon1: {
    position: 'relative',

    '&::before': {
      position: 'absolute',
      content: `""`,
      width: '12px',
      height: '12px',
      bottom: '3px',
      left: '20px',
      backgroundImage: `url(${WalletLogo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '15px 12px',
      backgroundPosition: 'center',

      [theme.breakpoints.down(gC.BRECKPOINT.XS)]: {
        bottom: 0,
        left: '15px'
      }
    }
  },
  icon2: {
    position: 'relative',

    '&::before': {
      position: 'absolute',
      content: `""`,
      width: '12px',
      height: '12px',
      bottom: '3px',
      left: '22px',
      backgroundImage: `url(${MoneyTransactLogo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '12px',
      backgroundPosition: 'center',

      [theme.breakpoints.down(gC.BRECKPOINT.XS)]: {
        bottom: 0,
        left: '15px'
      }
    }
  },
  icon3: {
    position: 'relative',

    '&::before': {
      position: 'absolute',
      content: `""`,
      width: '12px',
      height: '12px',
      bottom: '3px',
      left: '19px',
      backgroundImage: `url(${StatusLogo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center',

      [theme.breakpoints.down(gC.BRECKPOINT.XS)]: {
        bottom: 0,
        left: 0
      }
    }
  },
  icon4: {
    position: 'relative',

    '&::before': {
      position: 'absolute',
      content: `""`,
      width: '12px',
      height: '12px',
      bottom: '3px',
      left: '22px',
      backgroundImage: `url(${TimeLogo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '12px',
      backgroundPosition: 'center',

      [theme.breakpoints.down(gC.BRECKPOINT.XS)]: {
        bottom: 0,
        left: 0
      }
    }
  },
  col1: {
    width: '48%',

    [theme.breakpoints.down(gC.BRECKPOINT.MD)]: {
      flexBasis: '100%'
    },
    [theme.breakpoints.down(gC.BRECKPOINT.XS)]: {
      paddingLeft: '30px'
    }
  },
  col2: {
    width: '15%',
    paddingLeft: '40px',

    [theme.breakpoints.down(gC.BRECKPOINT.MD)]: {
      flexBasis: '30%'
    },
    [theme.breakpoints.down(gC.BRECKPOINT.XS)]: {
      flexBasis: '32%',
      paddingLeft: '30px'
    }
  },
  col3: {
    width: '12%',
    paddingLeft: '35px',

    [theme.breakpoints.down(gC.BRECKPOINT.MD)]: {
      flexBasis: '30%'
    },
    [theme.breakpoints.down(gC.BRECKPOINT.XS)]: {
      flexBasis: '26%',
      paddingLeft: '30px'
    }
  },
  col4: {
    width: '23%',

    [theme.breakpoints.down(gC.BRECKPOINT.MD)]: {
      flexBasis: '40%'
    }
  },
  tableWrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center',
    overflow: 'scroll',
    overflowX: 'hidden',

    '&:focus': {
      outline: 'none'
    }
  },
  tableContentWrap: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    paddingRight: '20px',
    boxSizing: 'border-box',

    [theme.breakpoints.down(gC.BRECKPOINT.MD)]: {
      paddingRight: '5px'
    }
  },
  tableBtns: {
    display: 'flex',
    height: '31px',
    boxSizing: 'border-box',
    marginTop: '10px'
  },
  receivedBtn: {
    display: 'block',
    fontSize: '12px',
    fontWeight: 700,
    textDecoration: 'none',
    color: '#f0f0f0',
    backgroundColor: '#5e7cff',
    padding: '9px 40px 9px 30px',
    borderBottomLeftRadius: '15px',
    borderTopLeftRadius: '15px'
  },
  sentBtn: {
    display: 'block',
    fontSize: '12px',
    fontWeight: 700,
    textDecoration: 'none',
    color: '#f0f0f0',
    backgroundColor: '#5e7cff',
    padding: '9px 40px',
    borderBottomRightRadius: '15px',
    borderTopRightRadius: '15px'
  }
})