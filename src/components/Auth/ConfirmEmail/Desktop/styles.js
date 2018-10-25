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
  message: {
    position: 'absolute',
    fontSize: '25px',
    textAlign: 'center',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: 'auto',
    height: '30px'
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
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'block',
    margin: '0 auto',
    marginTop: '30px'
  }
})