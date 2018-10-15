import GraphLogo from '../../../assets/images/gamePageBg.png'
import StarLogo from '../../../assets/images/svg/star.svg'
import HalfStarLogo from '../../../assets/images/svg/halfStar.svg'
import PlayArrowLogo from '../../../assets/images/svg/playArrow.svg'
import HeartLogo from '../../../assets/images/svg/heart.svg'
import WinnerLogo from '../../../assets/images/winner.png'

export default () => ({
  root: {
    maxWidth: '2880px',
    backgroundImage: `url(${GraphLogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '0 0'
  },


  //containerGame
  containerGame: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center'
  },



  /* *** HEADER ***  */

  headerGame: {
    width: '100%',
    height: '585px',
    display: 'flex'
  },
  gameHeaderMain: {
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center',
    padding: '30px 0',
    width: '100%',
    boxSizing: 'border-box'
  },
  gameRollTop: {
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


  //gameRollNext
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
  },



  //gameRollBottom
  gameRollBottom: {
    display: 'flex',
    flexDirection: 'row',
    '-ms-align-items': 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: '35px',
    width: '100%'
  },
  gameRollActions: {
    width: '200px',
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center',
    marginLeft: '100px'
  },
  playNowBtn: {
    position: 'relative',
    display: 'block',
    fontSize: '20px',
    fontWeight: 700,
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#000',
    padding: '15px 45px 15px 65px',
    borderRadius: '25px',
    marginBottom: '12px',
    cursor: 'pointer',

    '&::before': {
      content: `""`,
      position: 'absolute',
      left: '-5px',
      top: '-5px',
      width: '65px',
      height: '65px',
      backgroundImage: `url(${PlayArrowLogo})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 0',
      backgroundSize: '65px'
    }
  },
  addBtn: {
    position: 'relative',
    display: 'block',
    fontSize: '16px',
    fontWeight: 700,
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#000',
    padding: '8px 20px 8px 30px',
    borderRadius: '16px',

    '&::before': {
      content: `""`,
      position: 'absolute',
      left: '12px',
      top: '10px',
      width: '15px',
      height: '15px',
      backgroundImage: `url(${HeartLogo})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 0',
      backgroundSize: '15px',
    }
  },


  //gameRollSlider
  gameRollSlider: {
    display: 'flex',
    flexDirection: 'row',
    '-ms-align-items': 'center',
    alignItems: 'center',
    height: '150px',
    width: '1000px',
    overflow: 'hidden',
    overflowX: 'scroll',
    padding: '0 0 10px 10px',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(0,0,0,0.26)',
    borderTopLeftRadius: '30px',
    borderBottomLeftRadius: '30px'
  },
  sliderItem: {
    display: 'block',
    marginRight: '10px',
    width: '217px',
    height: '120px'
  },
  sliderItemPhoto: {
    width: '217px',
    height: '120px'
  },

  /* *** HEADER ***  */



  //gameMain
  gameMain: {
    width: '100%',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center'
  },
  gameCounter: {
    display: 'flex',
    flexDirection: 'row',
    '-ms-align-items': 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: '175px',
    color: '#fff',
    width: '100%'
  },
  counterHours: {
    width: '300px',
    height: '150px',
    marginRight: '20px',

    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.26)',
    borderRadius: '25px'
  },
  counterContracts: {
    width: '600px',
    height: '150px',
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: '40px',
    boxSizing: 'border-box',

    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.26)',
    borderRadius: '25px'
  },
  counterWins: {
    width: '420px',
    height: '150px',
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px',
    marginRight: '20px',
    background: `rgba(0,0,0,0.26)url(${WinnerLogo}) 0 0 no-repeat`,
    backgroundSize: '330px',
    backgroundPosition: '40px 10px',

    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.26)',
    borderRadius: '25px'
  },
  counterBiggestWin: {
    fontSize: '19px',
    fontWeight: 700,
    padding: 0,
    marginBottom: 0
  },
  counterHoursVolume: {
    fontSize: '19px',
    fontWeight: 700,
    padding: 0,
    marginBottom: 0
  },
  counterContractsVolume: {
    fontSize: '19px',
    fontWeight: 700,
    padding: 0,
    marginBottom: 0
  },
  counterValue: {
    fontSize: '34px',
    fontWeight: 700
  },
  counterValue: {
    fontSize: '34px',
    fontWeight: 700
  },
  counterContractsLink: {
    fontSize: '9px',
    color: '#fff',
    marginLeft: '10px'
  },
  counterValue: {
    fontSize: '34px',
    fontWeight: 700
  },



  //comments
  comments: {
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: '100px',
    boxSizing: 'border-box',
    marginTop: '50px',
    color: '#fff'
  },
  commentItem: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    '-ms-align-items': 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.52)',
    borderRadius: '25px',
    padding: '20px 30px',
    boxSizing: 'border-box',
    marginBottom: '35px'
  },
  comment1: {
    width: '700px'
  },
  commentUser: {
    position: 'absolute',
    top: '-15px',
    left: '-7px',
    display: 'block',
    width: '30px',
    height: '30px',
    borderRadius: '50%'
  },
  commentUserPhoto: {
    width: '30px',
    height: '30px'
  },
  commentTitle: {
    display: 'flex',
    flexDirection: 'row',
    '-ms-align-items': 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%'
  },
  commentTitleText: {
    fontSize: '18px',
    fontWeight: 700
  },
  commentDate: {
    fontSize: '11px',
    fontWeight: 400
  },
  subComment: {
    padding: '7px 10px 7px 35px',
    position: 'absolute',
    borderRadius: '18px',
    bottom: '-15px',
    left: '83%',
    width: '120px',
    boxSizing: 'border-box',

    fontSize: '12px',
    fontWeight: 700,
    color: '#fff',
    textDecoration: 'none',
    backgroundColor: '#000'
  },
  commentLike: {
    padding: '7px 18px 7px 25px',
    position: 'absolute',
    borderRadius: '18px',
    bottom: '-15px',
    left: '70%',

    fontSize: '12px',
    fontWeight: 700,
    color: '#fff',
    textDecoration: 'none',
    backgroundColor: '#000'
  },
  likeValue: {
    color: '#ff4040'
  },
  comment2: {
    width: '800px'
  },
  comment3: {
    width: '600px'
  },



  //Iframe
  wrIframe: {
    width: '900px',
    height: '500px',
    position: 'fixed',
    background: '#fff',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto'
  },
  overlayIframe: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.5)'
  }

})