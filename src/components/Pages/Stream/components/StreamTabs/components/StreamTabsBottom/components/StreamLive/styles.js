export default () => ({
  root: {
    minWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: '10px'
  },
  streamLiveItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 13px 0 25px',
    boxSizing: 'border-box',
    height: '60px',
    minWidth: '100%',
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
    backgroundColor: 'rgba(0,0,0,0.26)',
    marginBottom: '5px'
  },
  streamLiveItemDate: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '13px',
    fontWeight: 700
  },
  itemDateLive: {
    position: 'relative',
    fontSize: '20px',
    fontWeight: 700,
    paddingLeft: '15px',
    boxSizing: 'border-box',

    '&:before': {
      position: 'absolute',
      content: `''`,
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: '#ff2e2e',
      left: '0px',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  },
  streamLiveItemTeam: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: '35px',
    boxSizing: 'border-box'
  },
  team1: {
    position: 'relative'
  },
  team2: {
    position: 'relative'
  },
  teamImg: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    maxWidth: '30px',
    maxHeight: '32px'
  },
  teamName: {
    fontSize: '23px',
    fontWeight: 700
  },
  teamCountry: {
    position: 'relative',
    fontSize: '8px',
    fontWeight: 700,
    paddingLeft: '15px',
    boxSizing: 'border-box'
  },
  country1: {
    position: 'relative'
  },
  country2: {
    position: 'relative'
  },
  teamCountryImg: {
    position: 'absolute',
    left: 0,
    width: '11px',
    height: '8px'
  },
  streamLiveItemVs: {
    fontSize: '12px',
    fontWeight: 700
  },
  streamLiveItemScore: {
    padding: '6px 15px',
    boxSizing: 'border-box',
    fontSize: '26px',
    fontWeight: 700,
    backgroundColor: 'rgba(0,0,0,0.13)',
    borderRadius: '26px'
  },
  streamLiveItemEvent: {
    position: 'relative',
    fontSize: '7px',
    fontWeight: 700,
    paddingBottom: '30px',
    boxSizing: 'border-box'
  },
  streamLiveItemEventImg: {
    position: 'absolute',
    bottom: 0,
    maxWidth: '25px',
    maxHeight: '25px'
  },
  streamLiveItemLink: {
    width: '16px',
    height: '16px',
    borderRight: '3px solid rgba(255,255,255,0.3)',
    borderBottom: '3px solid rgba(255,255,255,0.2)',
    boxSizing: 'border-box',
    transform: 'rotate(-45deg)'
  }
})
