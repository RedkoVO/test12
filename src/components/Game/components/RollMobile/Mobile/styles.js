import Star from '../../../../../assets/images/svg/star.svg'
import HalfStar from '../../../../../assets/images/svg/halfStar.svg'
import PlayArrow from '../../../../../assets/images/svg/playArrow.svg'
import Heart from '../../../../../assets/images/svg/heart.svg'

export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '440px',
    minHeight: '330px',
    backgroundColor: 'rgba(0,0,0,0.74)',
    borderRadius: '25px',
    margin: '0 15px 35px 15px',
    position: 'relative',
    order: 3,
    marginTop: '30px'
  },
  gameMobileTop: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    minHeight: '60px',
    width: '100%',
    padding: '10px 10px 5px 10px',
    boxSizing: 'border-box',
    flexWrap: 'wrap'
  },
  gameMobileTitle: {
    fontSize: '22px',
    fontWeight: 700,
    margin: 0,
    color: '#fff',
    width: '330px'
  },
  gameMobileTitleComp: {
    fontSize: '9px',
    fontWeight: 700,
    margin: 0,
    color: '#fff'
  },
  gameMobileRating: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  gameMobileRatingValue: {
    margin: 0
  },
  gameMobileRatingValueNum: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#ffe033'
  },
  gameMobileRatingValueFull: {
    fontSize: '9px',
    fontWeight: 700,
    color: '#fff'
  },
  gameMobileRatingStars: {
    width: '49px',
    height: '7px',
    display: 'flex',
    marginBottom: '5px'
  },
  gameMobileFullStars: {
    height: '7px',
    width: '42px',
    backgroundImage: `url(${Star})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 0'
  },
  gameMobileHalfStars: {
    height: '7px',
    width: '7px',
    backgroundImage: `url(${HalfStar})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 0',
    backgroundSize: '7px'
  },
  gameMobileRateCategory: {
    fontSize: '7px',
    fontWeight: 700,
    color: '#fff'
  },
  gameMobileImg: {
    display: 'block',
    position: 'relative',
    width: '460px',
    maxHeight: '314px',
    borderRadius: '7px',
    boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.5)',

    '& img': {
      width: '100%',
      maxHeight: '314px',
      borderRadius: '7px'
    }
  },
  gameMobileActions: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  playNowBtnMobile: {
    position: 'relative',
    display: 'block',
    fontSize: '18px',
    fontWeight: 700,
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#000',
    padding: '10px 25px 10px 35px',
    borderRadius: '25px',
    marginBottom: '12px',

    '&:before': {
      content: `""`,
      position: 'absolute',
      left: '-5px',
      top: '5px',
      width: '35px',
      height: '35px',
      backgroundImage: `url(${PlayArrow})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 0',
      backgroundSize: '35px'
    }
  },
  addBtnMobile: {
    position: 'relative',
    display: 'block',
    fontSize: '14px',
    fontWeight: 700,
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#000',
    padding: '5px 11px 5px 30px',
    borderRadius: '16px',

    '&:before': {
      content: `""`,
      position: 'absolute',
      left: '12px',
      top: '7px',
      width: '13px',
      height: '13px',
      backgroundImage: `url(${Heart})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 0',
      backgroundSize: '13px'
    }
  },
  gameMobileText: {
    fontSize: '13px',
    color: '#fff',
    padding: '0 15px 10px 15px'
  },
  gameMobileTags: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '18px',
    fontWeight: 700,
    color: '#fff',
    width: '100%',
    padding: '0 15px',
    boxSizing: 'border-box'
  },
  gameMobileTagsText: {
    width: '90%'
  },
  addTagBtn: {
    width: '15px',
    height: '17px',
    borderRadius: '3px',
    backgroundColor: 'rgba(255,255,255,0.2)',

    '& img': {
      width: '100%',
      height: '100%'
    }
  }
})
