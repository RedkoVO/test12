export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  categories: {
    display: 'flex',
    flexDrection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '405px',
    marginTop: '60px',

    [theme.breakpoints.down('lg')]: {
      width: '390px'
    },
    [theme.breakpoints.down('md')]: {
      width: '620px'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '630px',
      width: '390px'
    }
  },
  categTitleWrap: {
    width: '100%',
    paddingLeft: '50%',
    boxSizing: 'border-box'
  },
  categoriesTitle: {
    display: 'block',
    fontSize: '26px',
    fontWeight: 700,
    color: '#575757',
    textAlign: 'center',
    marginBottom: '0px',
    textDecoration: 'none',
    margin: '0 auto',
    transform: 'translateX(-50%)'
  }
})
