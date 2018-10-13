import BGLogo from '../../../../assets/images/registration-bg.png'

export default () => ({
  root: {
    width: '100%',
    minHeight: '680px',
    backgroundImage: `url(${BGLogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 0
  },
  containerRegistratStep1: {
    display: 'flex',
    minHeight: 'inherit',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '-ms-align-items': 'center'
  },
  containerRegistrat: {
    display: 'flex',
    minHeight: 'inherit',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '-ms-align-items': 'center'
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '15px',
    '-ms-align-items': 'center'
  },
  copyright: {
    fontsize: '16px',
    fontWeight: 700,
    marginBottom: '5px',
    marginTop: '35px'
  },
  footerLink: {
    fontSize: '14px',
    fontWeight: 200,
    color: 'inherit',
    textDecoration: 'none',
    padding: '5px'
  },
  registrStep1: {
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,.38)',
    padding: '65px',
    borderRadius: '23px',
    boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.1)'
  },
  step1Title: {
    fontSize: '50px',
    fontWeight: 400,
    textAlign: 'center',
    margin: '0 0 40px 0'
  },
  step1Label: {
    fontSize: '15px',
    fontWeight: 400,
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingLeft: '25px',
    margin: '15px 0',
    '-ms-align-self': 'flex-start'
  },
  field: {
    height: '46px',
    width: '400px',
    border: 'none',
    outline: 'none',
    borderRadius: '23px',
    paddingLeft: '25px',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(	255, 255, 255, 0.61)'
  },
  step1BtnBack: {
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
    cursor: 'pointer',
    textDecoration: 'none'
  },
  step1BtnsRegister: {
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