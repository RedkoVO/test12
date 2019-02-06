import PlayIcon from '../../../../../../assets/images/svg/playArrow.svg'
import StarIcon from '../../../../../../assets/images/svg/star.svg'
import HalfStar from '../../../../../../assets/images/svg/halfStar.svg'

export default () => ({
  catalogListItem: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '260px',
    minHeight: '330px',
    backgroundColor: 'rgba(0,0,0,0.74)',
    borderRadius: '25px',
    margin: '0 15px 35px 15px'
  },
  catalogItemTop: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    minHeight: '60px',
    width: '100%',
    padding: '10px 0 5px 10px',
    boxSizing: 'border-box',
    flexWrap: 'wrap'
  },
  catalogItemTitle: {
    width: '150px',
    margin: 0,
    fontSize: '22px',
    fontWeight: 700,
    color: '#fff'
  },
  catalogItemTitleComp: {
    fontSize: '9px',
    fontWeight: 700,
    margin: 0,
    color: '#fff'
  },
  catalogItemRating: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  catalogRatingValue: {
    margin: 0
  },
  catalogRatingValueNum: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#ffe033'
  },
  catalogRatingValueFull: {
    fontSize: '9px',
    fontWeight: 700,
    color: '#fff'
  },
  catalogRatingStars: {
    width: '49px',
    height: '7px',
    display: 'flex',
    marginBottom: '5px'
  },
  fullStars: {
    height: '7px',
    width: '42px',
    background: `url(${StarIcon})`,
    backgroundRepeat: 'repeat-x',
    backgroundPosition: '0 0'
  },
  halfStars: {
    height: '7px',
    width: '7px',
    background: `url(${HalfStar})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 0',
    backgroundSize: '7px'
  },
  catalogRatingCategory: {
    fontSize: '7px',
    fontWeight: 700,
    color: '#fff'
  },
  catalogItemImg: {
    position: 'relative',
    display: 'block',
    width: '280px',
    height: '140px',
    borderRadius: '7px',
    boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.5)'
  },
  catalogItemImgGame: {
    width: '100%',
    height: '100%',
    borderRadius: '7px'
  },
  catalogItemOnline: {
    position: 'absolute',
    color: '#fff',
    fontSize: '11px',
    fontWeight: 700,
    top: '15px',
    left: '20px',
    backgroundColor: 'rgba(0,0,0,0.83)',
    padding: '3px 10px 3px 20px',
    boxSizing: 'border-box',
    borderRadius: '8px',
    zIndex: 100,

    '&:before': {
      position: 'absolute',
      top: '7px',
      left: '10px',
      content: `""`,
      width: '5px',
      height: '5px',
      backgroundColor: '#e7454a',
      borderRadius: '50%'
    }
  },
  catalogItemCounter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '100%',
    margin: '5px 0',
    padding: '0 5px',
    boxSizing: 'border-box'
  },
  catalogCounterWins: {
    textAlign: 'center',
    color: '#fff'
  },
  catalogCounterHours: {
    textAlign: 'center',
    color: '#fff'
  },
  catalogCounterContracts: {
    textAlign: 'center',
    color: '#fff'
  },
  catalogCounterBigstWin: {
    fontSize: '7px',
    fontWeight: 700,
    padding: 0,
    marginBottom: 0
  },
  catalogCounterHoursVolume: {
    fontSize: '7px',
    fontWeight: 700,
    padding: 0,
    marginBottom: 0
  },
  catalogCounterContractsVolume: {
    fontSize: '7px',
    fontWeight: 700,
    padding: 0,
    marginBottom: 0
  },
  catalogCounterValue: {
    fontSize: '11px',
    fontWeight: 700
  },
  catalogItemBtn: {
    position: 'relative',
    display: 'block',
    width: '200px',
    borderRadius: '20px',
    fontWeight: 700,
    fontSize: '16px',
    backgroundColor: 'rgba(255,255,255,0.22)',
    textDecoration: 'none',
    color: '#fff',
    textAlign: 'center',
    padding: '12px 0 12px 20px',
    boxSizing: 'border-box',
    marginTop: '5px',

    '&:before': {
      content: `""`,
      position: 'absolute',
      left: '52px',
      top: '13px',
      width: '15px',
      height: '15px',
      background: `url(${PlayIcon})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 0',
      backgroundSize: '15px'
    }
  },
  catalogItemNext: {
    fontSize: '10px',
    fontWeight: 700,
    color: '#fff'
  }
})
