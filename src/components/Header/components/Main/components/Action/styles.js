import GraphLogo from '../../../../../../assets/images/svg/graph.svg'
import SendLogo from '../../../../../../assets/images/svg/sendIcon.svg'
import MoneyLogo from '../../../../../../assets/images/svg/money.svg'

export default () => ({
  root: {
    width: '870px',
    height: '230px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '-ms-align-items': 'flex-end',
    alignItems: 'flex-end',
  },
  actionsStatistics: {
    width: '260px',
    height: '160px',
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center'
  },
  form: {
    textAlign: 'center'
  },
  statisticsTitle: {
    position: 'relative',
    fontSize: '29px',
    fontWeight: 700,
    color: '#5e7cff',
    textAlign: 'center',
    marginBottom: '25px',

    '&::before': {
      position: 'absolute',
      content: `""`,
      width: '16px',
      height: '16px',
      backgroundImage: `url(${GraphLogo})`,
      bottom: '8px',
      left: '-25px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '30px',
      backgroundPosition: 'center'
    }
  },
  actionsSend: {
    width: '260px',
    height: '160px',
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center'
  },
  sendTitle: {
    position: 'relative',
    fontSize: '29px',
    fontWeight: 700,
    color: '#5e7cff',
    textAlign: 'center',
    marginBottom: '20px',

    '&::before': {
      position: 'absolute',
      content: `""`,
      width: '17px',
      height: '17px',
      backgroundImage: `url(${SendLogo})`,
      bottom: '6px',
      left: '-25px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '16px',
      backgroundPosition: 'center'
    }
  },
  sendAddressField: {
    width: '210px',
    height: '30px',
    boxSizing: 'border-box',
    border: 'none',
    backgroundColor: '#dddddd',
    outline: 'none',
    padding: '10px 20px',
    margin: 0,
    marginTop: '7px',
    borderRadius: '15px',
    fontSize: '9px',

    '&.input-error': {
      border: '1px solid red'
    }
  },
  sendAmmountField: {
    width: '210px',
    height: '30px',
    boxSizing: 'border-box',
    border: 'none',
    backgroundColor: '#dddddd',
    outline: 'none',
    padding: '10px 20px',
    margin: 0,
    marginTop: '7px',
    borderRadius: '15px',
    fontSize: '9px',

    '&.input-error': {
      border: '1px solid red'
    }
  },
  invoiceAmmountField: {
    width: '210px',
    height: '30px',
    boxSizing: 'border-box',
    border: 'none',
    backgroundColor: '#dddddd',
    outline: 'none',
    padding: '10px 20px',
    margin: 0,
    marginTop: '7px',
    borderRadius: '15px',
    fontSize: '9px'
  },
  sendBtn: {
    fontSize: '12px',
    fontWeight: 700,
    textDecoration: 'none',
    color: '#f0f0f0',
    backgroundColor: '#5e7cff',
    padding: '9px 20px',
    borderRadius: '15px',
    marginTop: '10px',

    '&.disabled': {
      opacity: '0.5',
      cursor: 'default'
    },

    '&:focus': {
      outline: 'none'
    }
  },
  invoiceBtn: {
    fontSize: '12px',
    fontWeight: 700,
    textDecoration: 'none',
    color: '#f0f0f0',
    backgroundColor: '#5e7cff',
    padding: '9px 20px',
    borderRadius: '15px',
    marginTop: '10px'
  },
  actionsInvoice: {
    width: '260px',
    height: '160px',
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center'
  },
  invoiceTitle: {
    position: 'relative',
    fontSize: '29px',
    fontWeight: 700,
    color: '#5e7cff',
    textAlign: 'center',
    marginBottom: '30px',

    '&::before': {
      position: 'absolute',
      content: `""`,
      width: '18px',
      height: '18px',
      backgroundImage: `url(${MoneyLogo})`,
      bottom: '6px',
      left: '-23px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '16px',
      backgroundPosition: 'center'
    }
  }
})