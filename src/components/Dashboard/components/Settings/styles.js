export default () => ({
  root: {
    paddingTop: '35px',
    paddingBottom: '250px'
  },
  title: {
    fontSize: '37px',
    fontWeight: 700,
    color: '#5e7cff',
    textAlign: 'center',
    marginBottom: '0px',
    textDecoration: 'none',
    margin: '0 auto',
    paddingBottom: '35px'
  },
  themeTitle: {
    textAlign: 'center'
  },
  wrBtns: {
    textAlign: 'center'
  },
  btn: {
    color: '#f0f0f0',
    padding: '5px 20px',
    fontSize: '12px',
    marginTop: '10px',
    fontWeight: 700,
    borderRadius: '15px',
    textDecoration: 'none',
    backgroundColor: '#5e7cff',
    cursor: 'pointer',

    '&:focus': {
      outline: 'none'
    }
  },
  disableBtn: {
    marginLeft: '14px',
    backgroundColor: '#a9a9a9'
  }
})
