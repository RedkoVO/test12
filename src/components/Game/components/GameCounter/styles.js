import WinnerLogo from '../../../../assets/images/winner.png'

export default () => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    '-ms-align-items': 'flex-start',
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
    borderRadius: '25px'
  },
  counterContracts: {
    width: '600px',
    height: '150px',
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: '40px',
    boxSizing: 'border-box',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.26)',
    borderRadius: '25px'
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
    borderRadius: '25px'
  },
  counterBiggestWin: {
    fontSize: '19px',
    fontWeight: 700,
    padding: 0,
    marginBottom: 0
  },
  counterHoursVolume: {
    fontSize: '19px',
    fontWeight: 700,
    padding: 0,
    marginBottom: 0
  },
  counterContractsVolume: {
    fontSize: '19px',
    fontWeight: 700,
    padding: 0,
    marginBottom: 0
  },
  counterContractsLink: {
    fontSize: '9px',
    color: '#fff',
    marginLeft: '10px'
  },
  counterValue: {
    fontSize: '34px',
    fontWeight: 700
  }
})