import gC from '../../../../../constants'

export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    '-ms-align-items': 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    display: 'none',
    position: 'relative',

    [theme.breakpoints.down(gC.BRECKPOINT.MD)]: {
      display: 'flex',
      order: 3
    }
  },
  mobileSortSearchField: {
    width: '200px',
    height: '40px',
    paddingLeft: '23px',
    boxSizing: 'border-box',
    border: 'none',
    outline: 'none',
    borderRadius: '20px',
    marginRight: '20px',
    marginTop: '10px',
    backgroundColor: 'rgba(255,255,255,0.25)',
    color: '#fff'
  },
  mobilleFilterBtn: {
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center',
    paddingTop: '15px',
    width: '20px',
    height: '20px',
    fontSize: '12px',
    textDecoration: 'none',
    color: '#fff',
    textAlign: 'center',

    '& img': {
      width: '100%',
      height: '100%'
    }
  },
  mobileSortItems: {
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    display: 'none',
    position: 'absolute',
    width: '500px',
    backgroundColor: 'rgba(0,0,0,.74)',
    padding: '10px',
    boxDizing: 'border-box',
    zIndex: 20,
    borderRadius: '25px'
  },
  mobileSortGenre: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,.25)',
    padding: '5px 20px 5px 10px',
    borderRadius: '11px',
    marginBottom: '5px'
  },
  mobileSortRating: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,.25)',
    padding: '5px 20px 5px 10px',
    borderRadius: '11px',
    marginBottom: '5px'
  },
  mobileSortContract: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,.25)',
    padding: '5px 20px 5px 10px',
    borderRadius: '11px',
    marginBottom: '5px'
  },
  mobileSortGenreName: {
    fontSize: '12px',
    fontWeight: 400,
    color: '#fff',
    marginRight: '5px'
  },
  mobileSortRatingName: {
    fontSize: '12px',
    fontWeight: 400,
    color: '#fff',
    marginRight: '5px'
  },
  mobileSortContractName: {
    fontSize: '12px',
    fontWeight: 400,
    color: '#fff',
    marginRight: '5px'
  },
  mobileSortGenreItem: {
    position: 'relative',
    fontSize: '12px',
    fontWeight: 700,
    color: '#fff',
    textDecoration: 'none'
  },
  mobileSortRatingItem: {
    position: 'relative',
    fontSize: '12px',
    fontWeight: 700,
    color: '#fff',
    textDecoration: 'none'
  },
  mobileSortContractItem: {
    position: 'relative',
    fontSize: '12px',
    fontWeight: 700,
    color: '#fff',
    textDecoration: 'none'
  },
  mobileSortApplyBtn: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 700,
    fontSize: '12px',
    backgroundColor: 'rgba(255,255,255,.25)',
    padding: '5px 20px',
    marginTop: '5px',
    '-ms-align-self': 'center',
    alignSelf: 'center',
    borderRadius: '12px'
  },
  mobileSortCloseBtn: {
    position: 'absolute',
    width: '20px',
    height: '20px',
    right: '10px',
    top: '10px',

    '& img': {
      width: '100%',
      height: '100%'
    }
  }
})
