export default () => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '40px',
    width: '100%',
    '-ms-align-items': 'center'
  },
  bestItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '-ms-align-items': 'center'
  },
  titleWrap: {
    width: '100%',
    paddingLeft: '40px',
    boxSizing: 'border-box'
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
    display: 'block'
  },
  bestItemImg: {
    width: '370px',
    height: '270px'
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