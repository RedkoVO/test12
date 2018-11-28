export default () => ({
  containerGame: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center'
  },

  headerGame: {
    width: '100%',
    height: '585px',
    display: 'flex'
  },
  gameHeaderMain: {
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center',
    padding: '30px 0',
    width: '100%',
    boxSizing: 'border-box'
  },

  gameMain: {
    width: '100%',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center'
  },

  wrIframe: {
    width: '90%',
    height: '90%',
    position: 'fixed',
    background: '#fff',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto'
  },
  overlayIframe: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.5)'
  },
  gameIframe: {
    width: '100%',
    height: '100%'
  }
})