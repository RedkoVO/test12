export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px 10px'
  },
  gameImg: {
    display: 'block',
    borderRadius: '10px',
    width: '150px',
    height: '100px',
    boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.2)',
    marginBottom: '13px'
  },
  gameImgLink: {
    width: '150px',
    height: '100px',
    borderRadius: '10px'
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
      fontSize: '23px',

      [theme.breakpoints.down('xs')]: {
        fontSize: '20px'
      }
    }
  }
})
