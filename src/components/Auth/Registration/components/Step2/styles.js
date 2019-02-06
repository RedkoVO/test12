export default () => ({
  root: {
    minHeight: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '50px'
  },
  registrStep2: {
    position: 'relative',
    maxWidth: '525px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'rgba(255,255,255,.38)',
    padding: '65px 50px',
    boxSizing: 'border-box',
    borderRadius: '23px',
    boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.1)'
  },
  step2Title: {
    fontSize: '50px',
    fontWeight: 400,
    textAlign: 'center',
    margin: '0 0 40px 0'
  },
  pageNum: {
    position: 'absolute',
    top: '35px',
    right: '35px'
  },
  step2Label: {
    fontSize: '15px',
    fontWeight: 400,
    textAlign: 'left',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',

    '& span': {
      margin: '15px 25px'
    }
  },
  firstNameField: {
    height: '46px',
    width: '195px',
    border: 'none',
    outline: 'none',
    borderRadius: '23px',
    paddingLeft: '25px',
    marginRight: '20px',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(	255, 255, 255, 0.61)'
  },
  lastNameField: {
    height: '46px',
    width: '195px',
    border: 'none',
    outline: 'none',
    borderRadius: '23px',
    paddingLeft: '25px',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(255, 255, 255, 0.61)'
  },
  genderField: {
    height: '46px',
    width: '130px',
    border: 'none',
    outline: 'none',
    borderRadius: '23px',
    paddingLeft: '25px',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(255, 255, 255, 0.61)',
    marginRight: '25px',

    '&::before': {
      display: 'none'
    },
    '&::after': {
      display: 'none'
    }
  },
  birthWrap: {
    display: 'flex',
    width: '255px',
    height: '46px',
    border: 'none',
    outline: 'none',
    borderRadius: '23px',
    boxSizing: 'border-box',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.61)'
  },
  countryField: {
    height: '46px',
    width: '130px',
    border: 'none',
    outline: 'none',
    borderRadius: '23px',
    paddingLeft: '25px',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(255, 255, 255, 0.61)',
    marginRight: '25px',

    '&::before': {
      display: 'none'
    },
    '&::after': {
      display: 'none'
    }
  },
  addressField: {
    height: '46px',
    width: '255px',
    border: 'none',
    outline: 'none',
    borderRadius: '23px',
    paddingLeft: '25px',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(255, 255, 255, 0.61)'
  },
  phoneField: {
    height: '46px',
    width: '400px',
    border: 'none',
    outline: 'none',
    borderRadius: '23px',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(255, 255, 255, 0.61)',
    paddingLeft: '25%'
  },
  step2BtnSkip: {
    fontSize: '20px',
    fontWeight: 700,
    border: 'none',
    outline: 'none',
    backgroundColor: 'rgba(255, 255, 255, .73)',
    color: 'inherit',
    padding: '13px',
    width: '140px',
    borderRadius: '23px',
    marginTop: '50px',
    marginRight: '12px',
    cursor: 'pointer'
  },
  step2BtnsNext: {
    fontSize: '20px',
    fontWeight: 700,
    border: 'none',
    outline: 'none',
    backgroundColor: '#6eec7c',
    color: '#fff',
    padding: '13px',
    width: '245px',
    borderRadius: '23px',
    marginTop: '50px',
    cursor: 'pointer'
  }
})
