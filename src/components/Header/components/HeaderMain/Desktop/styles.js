import gC from '../../../../../constants'

export default theme => ({
  root: {
    width: '100%',
    display: 'flex',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      '-ms-align-items': 'center',
      alignItems: 'center'
    },

    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      '-ms-align-items': 'center',
      alignItems: 'center'
    }
  }
})