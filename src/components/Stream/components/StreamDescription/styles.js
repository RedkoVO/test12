import Heart from '../../../../assets/images/svg/heart.svg'
import Reply from '../../../../assets/images/svg/reply.svg'

export default () => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '30px'
  },
  streamDescriptionLeft: {
    marginRight: '50px',
    width: '650px'
  },
  streamDescriptionText: {
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'lighter'
  },
  streamHashTags: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '6px',
    color: '#fff',
    fontSize: '28px',
    fontWeight: 'bold'
  },
  streamAddHashTags: {
    marginLeft: '10px',
    width: '17px',
    height: '17px',
    lineHeight: '15px',
    fontSize: '19px',
    textAlign: 'center',
    borderRadius: '5px',
    backgroundColor: 'rgba(0, 0, 0, 0.37)'
  },
  streamDescriptionRight: {
    width: '150px',
    color: '#fff',
    fontSize: '13px',
    fontWeight: 'bold'
  },
  streamAddFavorites: {
    position: 'relative',
    marginBottom: '8px',
    width: '145px',
    padding: '6px 0',
    paddingLeft: '5px',
    fontSize: '12px',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '10px',

    '&:before': {
      position: 'absolute',
      content: `""`,
      top: '7px',
      left: '11px',
      width: '11px',
      height: '11px',
      background: `url(${Heart})`,
      backgroundSize: '11px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 0'
    }
  },
  streamShareSocial: {
    position: 'relative',
    marginBottom: '8px',
    width: '145px',
    padding: '6px 0',
    paddingLeft: '5px',
    fontSize: '12px',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '10px',

    '&:before': {
      position: 'absolute',
      content: `""`,
      top: '7px',
      left: '11px',
      width: '11px',
      height: '11px',
      background: `url(${Reply})`,
      backgroundSize: '11px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 0'
    }
  }
})
