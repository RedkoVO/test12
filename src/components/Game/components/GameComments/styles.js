import LikeIcon from '../../../../assets/images/svg/like.svg'
import CommentIcon from '../../../../assets/images/svg/comment.svg'

export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: '100px',
    boxSizing: 'border-box',
    marginTop: '50px',
    color: '#fff',

    [theme.breakpoints.down('md')]: {
      paddingLeft: '20px'
    }
  },
  commentItem: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.52)',
    borderRadius: '25px',
    padding: '20px 30px',
    boxSizing: 'border-box',
    marginBottom: '35px',

    [theme.breakpoints.down('md')]: {
      maxWidth: '740px'
    }
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
    right: '30px',
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
    right: '165px',
    fontSize: '12px',
    fontWeight: 700,
    color: '#fff',
    textDecoration: 'none',
    backgroundColor: '#000'
  },
  likeValue: {
    position: 'relative',
    color: '#ff4040',

    '&:before': {
      content: `""`,
      position: 'absolute',
      width: '10px',
      height: '10px',
      backgroundImage: `url(${LikeIcon})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 0',
      backgroundSize: '10px',
      left: '-13px',
      bottom: '1px'
    }
  },
  commentValue: {
    position: 'relative',

    '&:before': {
      content: `""`,
      position: 'absolute',
      width: '10px',
      height: '10px',
      backgroundImage: `url(${CommentIcon})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 0',
      backgroundSize: '10px',
      left: '-15px',
      bottom: '1px'
    }
  },
  comment2: {
    width: '800px'
  },
  comment3: {
    width: '600px'
  }
})
