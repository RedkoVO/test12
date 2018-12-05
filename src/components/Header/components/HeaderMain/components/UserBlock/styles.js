import gC from '../../../../../../constants'

export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center',
    padding: '30px 0 0 0',
    marginLeft: '65px',
    width: '100%',
    boxSizing: 'border-box',

    [theme.breakpoints.down(gC.BRECKPOINT.MD)]: {
      paddingTop: 0,
      marginLeft: 0
    }
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',

    [theme.breakpoints.down(gC.BRECKPOINT.MD)]: {
      width: '500px',
      paddingTop: '20px',
      height: '92px',
      paddingBottom: '20px',
      backgroundColor: '#f5f5f5'
    },
    [theme.breakpoints.down(gC.BRECKPOINT.SM)]: {
      minWidth: '100%',
      margin: 0
    }
  },
  userBlock: {
    display: 'flex',
    '-ms-align-items': 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  userHello: {
    fontSize: '18px',
    margin: 0,
    textAlign: 'center'
  },
  userVerification: {
    fontSize: '10px',
    fontWeight: '500'
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
  userBallance: {
    fontSize: '18px',
    margin: 0,
    textAlign: 'center'
  },
  userBallDescr: {
    fontSize: '10px',
    fontWeight: '500'
  },
  demoTitle: {
    fontWeight: 900,
    position: 'absolute',
    fontSize: '20px',
    left: '154px',
    width: '200px',
    height: '50px',
    textAlign: 'center',
    background: '#f00',
    borderRadius: '10px',
    color: '#fff',
    lineHeight: '49px',

    [theme.breakpoints.down(gC.BRECKPOINT.MD)]: {
      left: 0,
      opacity: '0.3'
    }
  }
})