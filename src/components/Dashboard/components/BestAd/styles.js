import gC from '../../../../constants'

export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '40px',
    width: '100%',
    '-ms-align-items': 'center',

    [theme.breakpoints.down(gC.BRECKPOINT.MD)]: {
      '-ms-align-items': 'flex-start',
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: 0
    }
  },
  bestItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '-ms-align-items': 'center',

    [theme.breakpoints.down(gC.BRECKPOINT.MD)]: {
      marginRight: '20px',
      marginBottom: '20px'
    }
  },
  titleWrap: {
    width: '100%',
    paddingLeft: '40px',
    boxSizing: 'border-box',

    [theme.breakpoints.down(gC.BRECKPOINT.MD)]: {
      display: 'flex',
      justifyContent: 'center',
      paddingLeft: 0
    }
  },
  bestTitle: {
    fontSize: '37px',
    fontWeight: 700,
    color: '#5e7cff',
    textAlign: 'center',
    marginBottom: '0px',
    textDecoration: 'none',
    margin: '0 auto'
  },
  bestContent: {
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center',
  },
  bestImg: {
    display: 'block',
    borderRadius: '15px',
    width: '335px',
    height: '225px',
    boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.2)',
    marginBottom: '25px'
  },
  bestItemImg: {
    width: '100%',
    height: '100%',
    borderRadius: '15px'
  },
  bestLink: {
    fontSize: '22px',
    fontWeight: 700,
    color: '#575757',
    textAlign: 'center',
    marginBottom: '0px',
    textDecoration: 'none',
    margin: '0 auto',

    '& span': {
      fontSize: '37px'
    }
  }
})