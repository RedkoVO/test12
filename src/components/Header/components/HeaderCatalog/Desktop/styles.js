export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '850px',
    minWidth: '700px',
    borderBottomLeftRadius: '25px',
    borderBottomRightRadius: '25px',
    paddingTop: '45px',
    paddingBottom: '15px',

    [theme.breakpoints.down('lg')]: {
      marginLeft: '10px',
      marginRight: '10px'
    },
    [theme.breakpoints.down('md')]: {
      minWidth: '500px',
      paddingTop: '14px',
      height: '107px',
      paddingBottom: 0,
      borderBottomLeftRadius: '0px',
      borderBottomRightRadius: '0px'
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
      margin: 0
    }
  },
  streamUserBlock: {
    display: 'flex',
    alignItems: 'center',
    width: '300px'
  },
  streamUserHello: {
    fontSize: '18px',
    margin: 0,
    color: '#fff',
    textAlign: 'center'
  },
  streamUserVerification: {
    fontSize: '10px',
    fontWeight: '500',
    color: 'inherit',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline'
    }
  },
  streamUserPhoto: {
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
  }
})
