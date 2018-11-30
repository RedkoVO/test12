import CheckedIcon from '../../../../assets/images/svg/checked.svg'
import MoneyTransact from '../../../../assets/images/svg/moneyTransact.svg'
import Unlock from '../../../../assets/images/svg/unlock.svg'

export default () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '310px',
    padding: '25px 15px',
    backgroundColor: 'rgba(0,0,0,0.08)',
    borderRadius: '15px',
    marginTop: '25px',
    marginLeft: '15px',
    boxSizing: 'border-box'
  },
  paymentTitle: {
    fontSize: '17px',
    textAlign: 'center',
    flexBasis: '100%',
    marginBottom: '25px'
  },
  paymentWay: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '25px',
    width: '100%'
  },
  paymentWayItem: {
    width: '90px',
    height: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '13px',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(0,0,0,0.08)',
    borderRadius: '10px'
  },
  paymentSelectItem: {
    position: 'relative',

    '&:after': {
      position: 'absolute',
      content: `''`,
      width: '30px',
      height: '22px',
      background: `url(${CheckedIcon})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center 5%',
      backgroundSize: '23px',
      zIndex: 100,
      top: '-5px',
      right: '-7px'
    }
  },
  paymentWayItemImg: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    width: '70px',
    marginBottom: '10px',

    '& img': {
      maxWidth: '100%',
      maxHeight: '100%'
    }
  },
  paymentWayItemName: {
    fontSize: '10px',
    fontWeight: 700
  },
  paymentWayItemUnderline: {
    width: '60px',
    height: '2px',
    backgroundColor: 'rgba(255,255,255,0.52)',
    borderRadius: '2px',
    marginTop: '5px'
  },
  selected: {
    backgroundColor: '#fff'
  },
  paymentAmmount: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '220px',
    height: '22px',
    marginTop: '10px',
    backgroundColor: 'rgba(0,0,0,0.13)',
    borderRadius: '11px',
    padding: '0 20px 0 30px',
    boxSizing: 'border-box',

    '&:before': {
      position: 'absolute',
      content: `''`,
      width: '15px',
      height: '12px',
      background: `url(${MoneyTransact})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '12px',
      top: '5px',
      left: '8px'
    }
  },
  paymentAmmountText: {
    fontSize: '10px',
    fontWeight: 500
  },
  paymentAmmountFill: {
    width: '45px',
    borderBottom: '1px dotted #9BACC4'
  },
  paymentAmmountPrice: {
    fontSize: '12px',
    fontWeight: 700
  },
  paymentBonus: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '240px',
    paddingLeft: '45px',
    boxSizing: 'border-box',
    margin: '5px 0'
  },
  paymentBonusCheck: {
    display: 'none'
  },
  paymentBonusCheckLabel: {
    position: 'relative',
    fontSize: '8px',
    cursor: 'pointer',

    '&:before': {
      content: `""`,
      position: 'absolute',
      bottom: '0px',
      left: '-13px',
      width: '10px',
      height: '10px',
      background: 'rgba(255,255,255,0.5)',
      borderRadius: '2px'
    }
  },
  paymentInputWrap4: {
    position: 'relative',
    width: '200px',

    '&:before': {
      position: 'absolute',
      content: `''`,
      width: '15px',
      height: '11px',
      background: `url(${Unlock})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      top: '4px',
      left: '10px'
    }
  },
  paymentBonusInput: {
    position: 'relative',
    width: '200px',
    maxWidth: 'inherit',
    border: 'none',
    outline: 'none',
    backgroundColor: 'rgba(0,0,0,0.13)',
    padding: '5px 30px',
    boxSizing: 'border-box',
    fontSize: '10px',
    marginBottom: '8px',
    borderRadius: '15px',
    color: '#fff'
  },
  paymentBtn: {
    padding: '8px 85px',
    backgroundColor: '#fff',
    fontSize: '12px',
    fontWeight: 700,
    textDecoration: 'none',
    color: '#2d2d2d',
    marginTop: '10px',
    borderRadius: '15px'
  }
})
