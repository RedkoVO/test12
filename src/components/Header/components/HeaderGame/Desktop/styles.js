import gC from '../../../../../constants'

export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  gameUserBlock: {
    display: 'flex',
    '-ms-align-items': 'center',
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
  gameUserBallance: {
    fontSize: '18px',
    margin: 0,
    color: '#fff',
    textAlign: 'center'
  },
  gameUserVerification: {
    fontSize: '10px',
    fontWeight: '500'
  },
  gameUserBallDescr: {
    fontSize: '10px',
    fontWeight: '500'
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
  },
})
