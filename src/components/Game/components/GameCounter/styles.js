import WinnerLogo from '../../../../assets/images/winner.png'

export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: '175px',
    color: '#fff',
    width: '100%'
  },
  counterHours: {
    width: '300px',
    height: '150px',
    marginRight: '20px',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.26)',
    borderRadius: '25px',

    [theme.breakpoints.down('md')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 5px',
      marginRight: '10px',
      minWidth: '95px',
      boxSizing: 'border-box'
    }
  },
  counterUsers: {
    width: '250px',
    height: '150px',
    marginRight: '20px',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.26)',
    borderRadius: '25px',

    [theme.breakpoints.down('md')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 5px',
      marginRight: '10px',
      minWidth: '95px',
      boxSizing: 'border-box'
    }
  },
  counterUsersVolume: {
    fontSize: '19px',
    fontWeight: 700,
    padding: 0,
    marginBottom: 0,

    [theme.breakpoints.down('md')]: {
      fontSize: '15px'
    }
  },
  counterContracts: {
    width: '600px',
    height: '150px',
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: '40px',
    boxSizing: 'border-box',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.26)',
    borderRadius: '25px',

    [theme.breakpoints.down('lg')]: {
      padding: '0 20px',
      minWidth: '258px'
    },
    [theme.breakpoints.down('md')]: {
      minWidth: '230px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 5px'
    }
  },
  counterWins: {
    width: '420px',
    height: '150px',
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px',
    marginRight: '20px',
    background: `rgba(0,0,0,0.26)url(${WinnerLogo}) 0 0 no-repeat`,
    backgroundSize: '330px',
    backgroundPosition: '40px 10px',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.26)',
    borderRadius: '25px',

    [theme.breakpoints.down('md')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 5px',
      minWidth: '300px',
      backgroundSize: '280px',
      backgroundPosition: '10px 30px',
      marginRight: '10px'
    }
  },
  counterBiggestWin: {
    fontSize: '19px',
    fontWeight: 700,
    padding: 0,
    marginBottom: 0,

    [theme.breakpoints.down('md')]: {
      fontSize: '15px'
    }
  },
  counterHoursVolume: {
    fontSize: '19px',
    fontWeight: 700,
    padding: 0,
    marginBottom: 0,

    [theme.breakpoints.down('md')]: {
      fontSize: '15px'
    }
  },
  counterContractsVolume: {
    fontSize: '19px',
    fontWeight: 700,
    padding: 0,
    marginBottom: 0,

    [theme.breakpoints.down('md')]: {
      fontSize: '15px'
    }
  },
  counterContractsLink: {
    fontSize: '9px',
    color: '#fff',
    marginLeft: '10px'
  },
  counterValue: {
    fontSize: '34px',
    fontWeight: 700,

    [theme.breakpoints.down('md')]: {
      fontSize: '28px'
    }
  }
})
