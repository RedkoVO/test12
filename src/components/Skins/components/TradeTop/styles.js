import WhiteDown from '../../../../assets/images/svg/white-down.svg'
import CheckedIcon from '../../../../assets/images/svg/checked.svg'

export default () => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    minWidth: '800px',
    padding: '0 20px',
    height: '80px',
    backgroundColor: 'rgba(0,0,0,0.08)',
    borderRadius: '15px'
  },
  tradeGame: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '200px'
  },
  tradeGameSelect: {
    fontSize: '16px',
    fontWeight: 300,
    color: '#fff',
    marginRight: '10px'
  },
  tradeGameItem: {
    fontSize: '30px',
    fontWeight: 700,
    color: '#fff',
    position: 'relative',
    paddingRight: '25px',
    textDecoration: 'none',

    '&:after': {
      position: 'absolute',
      content: `''`,
      height: '8px',
      width: '15px',
      background: `url(${WhiteDown})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      right: '5px',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  },
  tradeStream: {
    maxWidth: '550px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  tradeStreamTitle: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: 300,
    paddingLeft: '30px'
  },
  tradeStreamUrlWrap: {
    position: 'relative',
    minWidth: '50%',

    '&:after': {
      position: 'absolute',
      content: `''`,
      height: '9px',
      width: '13px',
      background: `url(${CheckedIcon})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '13px',
      right: '10px',
      top: '50%',
      zIndex: 100
    }
  },
  tradeStreamUrl: {
    position: 'relative',
    width: '520px',
    maxWidth: 'inherit',
    border: 'none',
    outline: 'none',
    backgroundColor: 'rgba(0,0,0,0.13)',
    padding: '8px 23px',
    boxSizing: 'border-box',
    fontSize: '10px',
    marginTop: '8px',
    borderRadius: '15px'
  }
})
