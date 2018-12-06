export default () => ({
  root: {
    width: '220px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  streamTabsNavItem: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '35px',
    textDecoration: 'none',
    padding: '0 12px 0 50px',
    boxSizing: 'border-box',
    fontSize: '13px',
    fontWeight: 700,
    borderRadius: '5px',
    backgroundColor: 'rgba(0,0,0,0.26)',
    color: '#fff',
    marginBottom: '5px',
    cursor: 'pointer'
  },
  liveNow: {
    borderTopLeftRadius: '25px',
    position: 'relative',

    '&::before': {
      position: 'absolute',
      content: `''`,
      backgroundColor: '#ff2e2e',
      borderRadius: '50%',
      top: '50%',
      transform: 'translateY(-50%)',
      left: '20px',
      width: '10px',
      height: '10px'
    }
  },
  streamTabsNavImg: {
    position: 'absolute',
    maxWidth: '20px',
    maxHeight: '20px',
    marginRight: '10px',
    left: '15px'
  },
  streamTabsWatch: {
    position: 'absolute',
    right: '15px'
  }
})
