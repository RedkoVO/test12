import CreditCard from '../../../../../../assets/images/svg/credit-card.svg'
import ManUser from '../../../../../../assets/images/svg/man-user.svg'
import Calendar from '../../../../../../assets/images/svg/calendar.svg'
import WhiteDown from '../../../../../../assets/images/svg/white-down.svg'

export default () => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '240px'
  },
  paymentCardTitle: {
    fontSize: '13px',
    fontWeight: 400,
    textAlign: 'center',
    flexBasis: '100%',
    marginBottom: '12px'
  },
  paymentInputWrap: {
    position: 'relative',
    width: '220px',

    '&:before': {
      position: 'absolute',
      content: `''`,
      width: '15px',
      height: '12px',
      background: `url(${CreditCard})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      top: '7px',
      left: '8px'
    }
  },
  paymentInputWrap2: {
    position: 'relative',
    width: '220px',

    '&:before': {
      position: 'absolute',
      content: `''`,
      width: '15px',
      height: '12px',
      background: `url(${ManUser})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      top: '7px',
      left: '8px'
    }
  },
  paymentCardNum: {
    position: 'relative',
    width: '220px',
    maxWidth: 'inherit',
    border: 'none',
    outline: 'none',
    backgroundColor: 'rgba(0,0,0,0.13)',
    padding: '8px 23px 8px 30px',
    boxSizing: 'border-box',
    fontSize: '10px',
    marginBottom: '8px',
    borderRadius: '15px',
    color: '#fff'
  },
  paymentCardHolder: {
    position: 'relative',
    width: '220px',
    maxWidth: 'inherit',
    border: 'none',
    outline: 'none',
    backgroundColor: 'rgba(0,0,0,0.13)',
    padding: '8px 23px 8px 30px',
    boxSizing: 'border-box',
    fontSize: '10px',
    marginBottom: '8px',
    borderRadius: '15px',
    color: '#fff'
  },
  paymentCardMonth: {
    position: 'relative',
    width: '65px',
    maxWidth: 'inherit',
    border: 'none',
    outline: 'none',
    backgroundColor: 'rgba(0,0,0,0.13)',
    padding: '8px 23px 8px 25px',
    boxSizing: 'border-box',
    fontSize: '10px',
    marginBottom: '8px',
    borderRadius: '15px',
    color: '#fff',
    textDecoration: 'none',
    marginRight: '5px',
    fontWeight: 700,

    '&:before': {
      position: 'absolute',
      content: `''`,
      width: '15px',
      height: '12px',
      background: `url(${Calendar})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '10px',
      top: '7px',
      left: '6px'
    },

    '&:after': {
      position: 'absolute',
      content: `''`,
      width: '5px',
      height: '3px',
      background: `url(${WhiteDown})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      top: '12px',
      right: '13px'
    }
  },
  paymentCardYear: {
    position: 'relative',
    width: '65px',
    maxWidth: 'inherit',
    border: 'none',
    outline: 'none',
    backgroundColor: 'rgba(0,0,0,0.13)',
    padding: '8px 23px 8px 25px',
    boxSizing: 'border-box',
    fontSize: '10px',
    marginBottom: '8px',
    borderRadius: '15px',
    color: '#fff',
    textDecoration: 'none',
    marginRight: '5px',
    fontWeight: 700,

    '&:before': {
      position: 'absolute',
      content: `''`,
      width: '15px',
      height: '12px',
      background: `url(${Calendar})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '10px',
      top: '7px',
      left: '6px'
    },

    '&:after': {
      position: 'absolute',
      content: `''`,
      width: '5px',
      height: '3px',
      background: `url(${WhiteDown})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      top: '12px',
      right: '5px'
    }
  },
  paymentInputWrap3: {
    position: 'relative',
    width: '70px',

    '&:before': {
      position: 'absolute',
      content: `''`,
      width: '15px',
      height: '12px',
      background: `url(${CreditCard})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      top: '7px',
      left: '8px'
    }
  },
  paymentCardCvc: {
    position: 'relative',
    width: '70px',
    maxWidth: 'inherit',
    border: 'none',
    outline: 'none',
    backgroundColor: 'rgba(0,0,0,0.13)',
    padding: '8px 15px 8px 30px',
    boxSizing: 'border-box',
    fontSize: '10px',
    marginBottom: '8px',
    borderRadius: '15px',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 700
  }
})
