export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',

    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
      margin: 0,
      backgroundColor: 'rgba(0,0,0,0.71)',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '20px',
      boxSizing: 'border-box',
      order: 1
    }
  },
  gameUserBlock: {
    display: 'flex',
    alignItems: 'center',
    width: '300px',
    marginRight: '230px',

    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      marginRight: 0
    }
  },
  gameUserHello: {
    fontSize: '18px',
    margin: 0,
    color: '#fff',
    textAlign: 'center'
  },
  gameUserVerification: {
    fontSize: '10px',
    fontWeight: '500',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline'
    }
  },
  gameUserPhoto: {
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
