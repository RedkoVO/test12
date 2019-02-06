import DownLogo from '../../../../../assets/images/svg/white-down.svg'

export default theme => ({
  root: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    display: 'none',
    position: 'relative',

    [theme.breakpoints.down('md')]: {
      display: 'flex',
      order: 3
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
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
    color: '#fff',

    '&::placeholder': {
      color: '#fff'
    }
  },
  mobilleFilterBtn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '15px',
    width: '20px',
    height: '20px',
    fontSize: '12px',
    textDecoration: 'none',
    color: '#fff',
    textAlign: 'center',
    cursor: 'pointer',

    '& img': {
      width: '100%'
    }
  },
  mobileSortItems: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    position: 'absolute',
    width: '500px',
    backgroundColor: 'rgba(0,0,0,.74)',
    padding: '10px',
    boxDizing: 'border-box',
    zIndex: 20,
    borderRadius: '25px',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      borderRadius: 0
    }
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
    textDecoration: 'none',

    '&:after': {
      content: `""`,
      position: 'absolute',
      top: '4px',
      right: '-12px',
      width: '8px',
      height: '8px',
      backgroundImage: `url(${DownLogo})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 0',
      backgroundSize: '8px'
    }
  },
  mobileSortRatingItem: {
    position: 'relative',
    fontSize: '12px',
    fontWeight: 700,
    color: '#fff',
    textDecoration: 'none',

    '&:after': {
      content: `""`,
      position: 'absolute',
      top: '4px',
      right: '-12px',
      width: '8px',
      height: '8px',
      backgroundImage: `url(${DownLogo})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 0',
      backgroundSize: '8px'
    }
  },
  mobileSortContractItem: {
    position: 'relative',
    fontSize: '12px',
    fontWeight: 700,
    color: '#fff',
    textDecoration: 'none',

    '&:after': {
      content: `""`,
      position: 'absolute',
      top: '4px',
      right: '-12px',
      width: '8px',
      height: '8px',
      backgroundImage: `url(${DownLogo})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 0',
      backgroundSize: '8px'
    }
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
    cursor: 'pointer',

    '& img': {
      width: '100%',
      height: '100%'
    }
  }
})
