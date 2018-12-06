export default () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff',
    minWidth: '830px',
    margin: '25px'
  },
  streamTabsTop: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '415px',
    height: '40px',
    borderTopRightRadius: '25px',
    borderTopLeftRadius: '25px',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    backgroundColor: 'rgba(0,0,0,0.26)',
    marginLeft: '80px',
    alignSelf: 'flex-start'
  },
  streamTab: {
    marginRight: '10px',
    backgroundColor: 'rgba(0,0,0,0.06)',
    display: 'block',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: 700,
    padding: '7px 15px',
    boxSizing: 'border-box',
    borderRadius: '15px',
    cursor: 'pointer',

    //backgroundColor: 'rgba(0,0,0,0.06)'

    '&:focus': {
      outline: 'none'
    },

    '&.react-tabs__tab--selected': {
      backgroundColor: 'rgba(0,0,0,0.36)'
    }
  }
  // streamTabsResult: {
  //   display: 'block',
  //   color: '#fff',
  //   textDecoration: 'none',
  //   fontSize: '13px',
  //   fontWeight: 700,
  //   padding: '7px 15px',
  //   boxSizing: 'border-box',
  //   borderRadius: '15px',
  //   backgroundColor: 'rgba(0,0,0,0.06)'
  // }
})
