import DownLogo from '../../../assets/images/black_arrow.png'

export default () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingTop: '40px'
  },
  title: {
    width: '100%',
    paddingLeft: '100px',
    fontSize: '36px'
  },
  wrChooseCurrency: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '600px',
    paddingTop: '30px',
    marginLeft: '150px'
  },
  hyphen: {
    color: '#aaaaaa',
    fontSize: '76px',
    fontFamily: 'ubBold'
  },
  wrCurrency: {
    width: '250px'
  },
  balance: {
    marginTop: '10px',
    padding: '5px 5px',
    width: '160px',
    textAlign: 'center',
    fontFamily: 'ubBold',
    fontSize: '12px',
    borderRadius: '15px',
    backgroundColor: '#dcdcdc'
  },
  selectCurency: {
    position: 'relative',
    padding: 0,
    textAlign: 'center',

    '&::before': {
      display: 'none'
    },
    '&::after': {
      display: 'none'
    }
  },
  dropdownStyle: {
    border: '1px solid black',
    borderRadius: '5%',
    backgroundColor: 'lightgrey',

    '& > ul > li > div': {
      fontSize: '20px'
    }
  },
  selectField: {
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#5e7cff',
    fontSize: '82px',
    fontWeight: 700,
    padding: 0,
    lineHeight: '82px',
    textDecoration: 'none',
    cursor: 'pointer',

    '&:focus': {
      outline: 'none'
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
    }
  },
  curencyIcon: {
    display: 'none'
  },
  curency: {
    display: 'flex',
    alignItems: 'center',
    color: '#2d2d2d',
    cursor: 'pointer',
    padding: '0 15px 0 0',
    fontSize: '76px',
    fontFamily: 'ubBold',
    lineHeight: '82px',
    textDecoration: 'none',

    '& img': {
      marginRight: '10px',
      width: '42px',
      height: '42px'
    }
  },
  prices: {
    display: 'flex',
    justifyContent: 'space-around'
  }
})
