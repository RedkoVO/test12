import StarLogo from '../../../../assets/images/svg/star.svg'
import HalfStarLogo from '../../../../assets/images/svg/halfStar.svg'

export default () => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    '-ms-align-items': 'flex-start',
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
    }
  },
  gameRollInf: {
    display: 'flex',
    flexDirection: 'column',
    width: '840px'
  },
  gameUser: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  gameUserBlock: {
    display: 'flex',
    '-ms-align-items': 'center',
    alignItems: 'center',
    width: '300px',
    marginRight: '230px',
  },
  gameUserHello: {
    fontSize: '18px',
    margin: 0,
    color: '#fff',
    textAlign: 'center'
  },
  gameUserBallance: {
    fontSize: '18px',
    margin: 0,
    color: '#fff',
    textAlign: 'center'
  },
  gameUserVerification: {
    fontSize: '10px',
    fontWeight: '500'
  },
  gameUserBallDescr: {
    fontSize: '10px',
    fontWeight: '500'
  },
  gameUserPhoto: {
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
      margin: '1px 0',
    }
  },
  gameRollNextCounter: {
    fontSize: '35px',
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
    borderRadius: '23px'
  },
  gameRollDescrleft: {
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'flex-start',
    alignItems: 'flex-start',
    width: '480px'
  },
  gameRollTitleBlock: {
    display: 'flex',
    flexDirection: 'row',
    '-ms-align-items': 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    width: '355px'
  },
  gameRollTitle: {
    fontSize: '40px',
    fontWeight: 700,
    margin: 0,
    marginRight: '10px'
  },
  gameRollOnline: {
    fontSize: '15px',
    fontWeight: 700
  },
  gameRollCompany: {
    fontSize: '18px',
    fontWeight: 700
  },
  gameRollText: {
    fontSize: '18px',
    fontWeight: 400
  },
  gameRollTags: {
    fontSize: '29px',
    fontWeight: 700,
    margin: 0,

    '& p': {
      margin: 0
    }
  },
  gameRollRating: {
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
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