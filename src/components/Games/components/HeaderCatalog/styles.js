import gC from '../../../../constants'

export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '850px',
    minWidth: '700px',
    height: '170px',
    borderBottomLeftRadius: '25px',
    borderBottomRightRadius: '25px',
    backgroundColor: 'rgba(0,0,0,0.74)',
    paddingTop: '45px',
    paddingBottom: '15px',

    [theme.breakpoints.down(gC.BRECKPOINT.LG)]: {
      marginLeft: '10px',
      marginRight: '10px'
    },
    [theme.breakpoints.down(gC.BRECKPOINT.MD)]: {
      minWidth: '500px',
      paddingTop: '20px',
      height: '74px',
      paddingBottom: 0,
      borderBottomLeftRadius: '0px',
      borderBottomRightRadius: '0px'
    },
    [theme.breakpoints.down(gC.BRECKPOINT.SM)]: {
      minWidth: '100%',
      margin: 0
    }
  },
  catalogUserBlock: {
    display: 'flex',
    '-ms-align-items': 'center',
    alignItems: 'center',
    width: '300px'
  },
  catalogUserHello: {
    fontSize: '18px',
    margin: 0,
    color: '#fff',
    textAlign: 'center'
  },
  catalogUserBallance: {
    fontSize: '18px',
    margin: 0,
    color: '#fff',
    textAlign: 'center'
  },
  catalogUserVerification: {
    fontSize: '10px',
    fontWeight: '500'
  },
  catalogUserBallDescr: {
    fontSize: '10px',
    fontWeight: '500'
  },
  catalogUserPhoto: {
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