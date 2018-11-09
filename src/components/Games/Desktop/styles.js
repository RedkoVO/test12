import DownIcon from '../../../assets/images/svg/white-down.svg'

export default () => ({
  root: {
    position: 'relative',
    minHeight: '650px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center',
    boxSizing: 'border-box'
  },

  headerCatalog: {
    width: '100%',
    height: '170px',
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center',
    paddingLeft: '65px',
    boxSizing: 'border-box'
  },

  /* USER */
  catalogUser: {
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '850px',
    minWidth: '700px',
    height: '170px',
    borderBottomLeftRadius: '25px',
    borderBottomRightRadius: '25px',
    backgroundColor: 'rgba(0,0,0,0.74)',
    paddingTop: '45px',
    paddingBottom: '15px'
  },
  catalogUserBlock: {
    display: 'flex',
    '-ms-align-items': 'center',
    alignItems: 'center',
    width: '300px',
    marginRight: '230px',
  },
  catalogUserHello: {
    fontSize: '18px',
    margin: 0,
    color: '#fff',
    textAlign: 'center'
  },
  catalogUserBallance: {
    fontSize: '18px',
    margin: 0,
    color: '#fff',
    textAlign: 'center'
  },
  catalogUserVerification: {
    fontSize: '10px',
    fontWeight: '500'
  },
  catalogUserBallDescr: {
    fontSize: '10px',
    fontWeight: '500'
  },
  catalogUserPhoto: {
    height: '50px',
    width: '50px',
    display: 'block',
    borderRadius: '50%',
    boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.1)',
    margin: '0 15px',

    '& img': {
      height: '100%',
      width: '100%',
      borderRadius: '50%'
    }
  },
  catalogUserSort: {
    display: 'flex',
    flexDirection: 'row',
    '-ms-align-items': 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '25px',
    padding: '0 30px 0 20px',
    boxSizing: 'border-box'
  },
  sortGenre: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '25px'
  },
  sortGenreName: {
    fontSize: '12px',
    fontWeight: 400,
    color: '#fff',
    marginRight: '5px'
  },
  sortGenreItem: {
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
      backgroundImage: `url(${DownIcon})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 0',
      backgroundSize: '8px',
    }
  },
  sortRating: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '20px'
  },
  sortRatingName: {
    fontSize: '12px',
    fontWeight: 400,
    color: '#fff',
    marginRight: '5px'
  },
  sortRatingItem: {
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
      backgroundImage: `url(${DownIcon})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 0',
      backgroundSize: '8px',
    }
  },
  sortContract: {
    display: 'flex',
    flexDirection: 'row',
  },
  sortContractName: {
    fontSize: '12px',
    fontWeight: 400,
    color: '#fff',
    marginRight: '5px'
  },
  sortContractItem: {
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
      backgroundImage: `url(${DownIcon})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 0',
      backgroundSize: '8px',
    }
  },
  sortSearch: {
    marginRight: '10px',
  },
  sortSearchField: {
    width: '200px',
    height: '40px',
    paddingLeft: '23px',
    boxSizing: 'border-box',
    border: 'none',
    outline: 'none',
    borderRadius: '20px',
    marginLeft: '5px',
    backgroundColor: 'rgba(255,255,255,0.25)',
    color: '#fff'
}
  /***** USER *****/
})