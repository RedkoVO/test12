import PlayArrowLogo from '../../../../../assets/images/svg/playArrow.svg'
import HeartLogo from '../../../../../assets/images/svg/heart.svg'

export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: '35px',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      order: 4
    }
  },
  gameRollActions: {
    width: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '100px',

    [theme.breakpoints.down('lg')]: {
      minWidth: '200px'
    }
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
      backgroundSize: '15px'
    }
  },
  gameRollSlider: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '150px',
    width: '1000px',
    overflow: 'hidden',
    overflowX: 'scroll',
    padding: '0 0 10px 10px',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(0,0,0,0.26)',
    borderTopLeftRadius: '30px',
    borderBottomLeftRadius: '30px',

    [theme.breakpoints.down('lg')]: {
      maxWidth: '850px',
      marginLeft: '20px'
    }
  },
  sliderItem: {
    display: 'block',
    marginRight: '10px',
    width: '217px',
    height: '120px',

    '&:first-child': {
      '& img': {
        borderRadius: '20px 0 0 20px'
      }
    }
  },
  sliderItemPhoto: {
    width: '217px',
    height: '120px'
  }
})
