export default theme => ({
  containerCatalogWrap: {
    width: '100%',
    minWidth: '70%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  containerCatalog: {
    position: 'relative',
    minHeight: '650px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',

    [theme.breakpoints.down('lg')]: {
      minWidth: '75%'
    },
    [theme.breakpoints.down('md')]: {
      minWidth: '65%'
    }
  },

  headerCatalog: {
    width: '100%',
    height: '170px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: '65px',
    boxSizing: 'border-box',

    [theme.breakpoints.down('md')]: {
      paddingLeft: 0
    }
  }
})
