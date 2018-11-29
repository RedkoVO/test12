export default () => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '85px',
    backgroundColor: '#070707',
    color: '#5e5e5e',
    padding: '0 85px',
    boxSizing: 'border-box',
    fontSize: '14px',
    fontWeight: 400,
    marginTop: '30px'
  },
  footerNav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    listStyleType: 'none'
  },
  footerNavItem: {
    fontSize: '14px',
    fontWeight: 400,
    color: '#5e5e5e',
    textDecoration: 'none',
    marginRight: '65px'
  }
})
