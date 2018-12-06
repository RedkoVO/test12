export default () => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 50px',
    width: '810px',
    background: 'rgba(0, 0, 0, 0.20)',
    height: '100px',
    borderRadius: '15px 15px 0 0'
  },
  streamLeftTeam: {
    display: 'flex',
    color: '#fff'
  },
  streamLeftLogo: {
    width: '50px',
    paddingRight: '6px'
  },
  streamTeamName: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '40px',
    fontWeight: 'bold'
  },
  streamCountry: {
    paddingLeft: '40px',
    fontSize: '15px',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  streamFlag: {
    paddingRight: '2px',
    width: '17px'
  },
  streamCoef: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  streamVersus: {
    padding: '0 15px'
  },
  streamCoefItem: {
    padding: '8px 15px',
    fontSize: '30px',
    background: 'rgba(0, 0, 0, 0.15)',
    borderRadius: '15px'
  },
  streamRightTeam: {
    display: 'flex',
    position: 'relative',
    color: '#fff'
  },
  streamRightLogo: {
    width: '30px',
    paddingRight: '6px'
  },
  streamLive: {
    position: 'absolute',
    top: 0,
    right: '-60px',
    fontSize: '15px',
    fontWeight: 'bold',

    '&:before': {
      content: `""`,
      position: 'absolute',
      top: '6px',
      left: '-11px',
      width: '7px',
      height: '7px',
      backgroundColor: 'red',
      borderRadius: '50px'
    }
  },
  streamEvent: {
    marginLeft: '125px',
    color: '#fff',
    fontSize: '7px',
    fontWeight: 'bold',
    textAlign: 'center',

    '& img': {
      display: 'block',
      width: '50px'
    }
  }
})
