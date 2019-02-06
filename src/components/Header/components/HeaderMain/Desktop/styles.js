export default theme => ({
  root: {
    width: '100%',
    display: 'flex',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center'
    },

    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }
})
