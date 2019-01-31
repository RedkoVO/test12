import BGLogo from '../../../../assets/images/registration-bg.png'

export default () => ({
  root: {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${BGLogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 0
  },
  wrFinishRegistration: {
    display: 'flex',
    minHeight: 'inherit',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%'
  },
  screen: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,.38)',
    padding: '65px',
    width: '50%',
    borderRadius: '23px',
    boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.1)'
  },
  loginBtn: {
    display: 'inline-block',
    textAlign: 'center',
    textDecoration: 'none',
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
