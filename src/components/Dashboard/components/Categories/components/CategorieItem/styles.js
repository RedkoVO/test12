export default () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px 10px',
    '-ms-align-items': 'center'
  },
  gameImg: {
    display: 'block'
  },
  gameImgLink: {
    width: '150px',
    height: '100px'
  },
  gameLink: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#575757',
    textAlign: 'center',
    marginBottom: '0px',
    textDecoration: 'none',
    margin: '0 auto',

    '& span': {
      fontSize: '23px'
    }
  }
})