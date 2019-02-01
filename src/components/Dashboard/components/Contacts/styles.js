export default () => ({
  root: {
    paddingTop: '35px'
  },
  title: {
    fontSize: '37px',
    fontWeight: 700,
    color: '#5e7cff',
    textAlign: 'center',
    marginBottom: '0px',
    textDecoration: 'none',
    margin: '0 auto',
    paddingBottom: '35px'
  },
  wrInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '35px'
  },
  userPhoto: {
    height: '50px',
    width: '50px',
    display: 'block',
    borderRadius: '50%',
    boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.1)',
    margin: '0 15px',

    '& img': {
      height: '100%',
      width: '100%',
      borderRadius: '50%'
    }
  },
  copyIcon: {
    width: '17px',
    height: '17px',
    cursor: 'pointer',
    marginLeft: '10px'
  }
})
