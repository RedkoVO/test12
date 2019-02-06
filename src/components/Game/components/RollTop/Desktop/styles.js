import StarLogo from '../../../../../assets/images/svg/star.svg'
import HalfStarLogo from '../../../../../assets/images/svg/halfStar.svg'

export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%'
  },
  gameRollImg: {
    height: '328px',
    width: '400px',
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',
    display: 'block',
    boxShadow: '5px 30px 30px 0px rgba(0,0,0,0.5)',
    marginRight: '25px',
    marginTop: '17px',

    '& img': {
      height: '100%',
      width: '100%',
      borderTopRightRadius: '30px',
      borderBottomRightRadius: '30px'
    },

    [theme.breakpoints.down('lg')]: {
      minWidth: '400px'
    },
    [theme.breakpoints.down('md')]: {
      marginRight: '10px'
    }
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
  },

  /*--- gameRollNext */
  gameRollNext: {
    height: '45px',
    width: '100%',
    paddingLeft: '50px',
    boxSizing: 'border-box',
    fontSize: '16px',
    fontWeight: 700,
    color: '#ad6e9b',

    '& p': {
      margin: '1px 0'
    },

    [theme.breakpoints.down('md')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 0
    }
  },
  gameRollNextCounter: {
    fontSize: '16px',
    fontWeight: 400
  },
  gameRollDescr: {
    width: '700px',
    display: 'flex',
    flexDirection: 'row',
    padding: '30px 35px',
    boxSizing: 'border-box',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.26)',
    borderRadius: '23px',

    [theme.breakpoints.down('lg')]: {
      boxSizing: 'border-box',
      maxWidth: '600px',
      paddingRight: '10px',
      paddingLeft: '10px'
    },
    [theme.breakpoints.down('md')]: {
      width: '350px'
    }
  },
  gameRollDescrleft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '480px',

    [theme.breakpoints.down('md')]: {
      width: '270px'
    }
  },
  gameRollTitleBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    width: '355px',

    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  gameRollTitle: {
    fontSize: '40px',
    fontWeight: 700,
    margin: 0,
    marginRight: '10px',

    [theme.breakpoints.down('md')]: {
      fontSize: '25px'
    }
  },
  gameRollOnline: {
    fontSize: '15px',
    fontWeight: 700,

    [theme.breakpoints.down('md')]: {
      fontSize: '12px'
    }
  },
  gameRollCompany: {
    fontSize: '18px',
    fontWeight: 700,

    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      flexBasis: '100%'
    }
  },
  gameRollText: {
    fontSize: '18px',
    fontWeight: 400,

    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      paddingRight: '10px'
    }
  },
  gameRollTags: {
    fontSize: '29px',
    fontWeight: 700,
    margin: 0,

    '& p': {
      margin: 0
    },

    [theme.breakpoints.down('md')]: {
      fontSize: '15px'
    }
  },
  gameRollRating: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  ratingValue: {
    margin: 0
  },
  ratingValueNum: {
    fontSize: '35px',
    fontWeight: 700,
    color: '#ffe033'
  },
  ratingValueFull: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#fff'
  },
  ratingStars: {
    width: '75px',
    height: '10px',
    display: 'flex',
    marginBottom: '5px'
  },
  fullStars: {
    height: '10px',
    width: '60px',
    backgroundImage: `url(${StarLogo})`,
    backgroundRepeat: 'repeat-x',
    backgroundPosition: '0 0'
  },
  halfStars: {
    height: '10px',
    width: '10px',
    backgroundImage: `url(${HalfStarLogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 0',
    backgroundSize: '10px'
  },
  ratingCategory: {
    fontSize: '11px',
    fontWeight: 700
  }
  /* gameRollNext ---*/
})
