export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%'
  },
  gameRollInf: {
    display: 'flex',
    flexDirection: 'column',
    width: '840px',

    [theme.breakpoints.down('lg')]: {
      maxWidth: '840px'
    },
    [theme.breakpoints.down('md')]: {
      alignItems: 'center'
    }
  }
})
