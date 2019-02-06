export default () => ({
  root: {
    minHeight: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '50px'
  },
  registrStep3: {
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
  step3Title: {
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
  step3Label: {
    fontSize: '15px',
    fontWeight: 400,
    textAlign: 'left',
    '-ms-align-self': 'flex-start',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',

    '& span': {
      margin: '15px 25px'
    }
  },
  docField: {
    height: '46px',
    width: '150px',
    border: 'none',
    outline: 'none',
    borderRadius: '23px',
    paddingLeft: '25px',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(	255, 255, 255, 0.61)',
    marginRight: '20px',

    '&::before': {
      display: 'none'
    },
    '&::after': {
      display: 'none'
    }
  },
  uploadField: {
    height: '46px',
    width: '235px',
    border: 'none',
    outline: 'none',
    borderRadius: '23px',
    paddingLeft: '25px',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(	255, 255, 255, 0.61)'
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
