import gC from '../../../constants'

export default theme => ({
  root: {
    width: '100%',
    display: 'flex',

    [theme.breakpoints.down(gC.BRECKPOINT.MD)]: {
      flexDirection: 'column',
      '-ms-align-items': 'center',
      alignItems: 'center'
    },

    [theme.breakpoints.down(gC.BRECKPOINT.SM)]: {
      display: 'flex',
      flexDirection: 'column',
      '-ms-align-items': 'center',
      alignItems: 'center'
    }
  }
})