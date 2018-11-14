import gC from '../../../constants'

export default theme => ({
  containerCatalogWrap: {
    width: '100%',
    minWidth: '70%',
    display: 'flex',
    flexDirection: 'row',
    '-ms-align-items': 'flex-start',
    alignItems: 'flex-start'
  },
  containerCatalog: {
    position: 'relative',
    minHeight: '650px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center',
    boxSizing: 'border-box',

    [theme.breakpoints.down(gC.BRECKPOINT.LG)]: {
      minWidth: '75%'
    },
    [theme.breakpoints.down(gC.BRECKPOINT.MD)]: {
      minWidth: '65%'
    }
  },

  headerCatalog: {
    width: '100%',
    height: '170px',
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center',
    paddingLeft: '65px',
    boxSizing: 'border-box',

    [theme.breakpoints.down(gC.BRECKPOINT.MD)]: {
      paddingLeft: 0
    }
  }
})
