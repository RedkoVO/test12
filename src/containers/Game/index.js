import compose from 'recompose/compose'
import { withHandlers, withProps, withState, pure, lifecycle } from 'recompose'

import { clearStorageForlogout } from '../../utils/localStorageUtils'

import AsyncGameDesktop from '../../components/Game/Desktop/AsyncGameDesktop'

import SliderItemImg1 from '../../assets/images/sim_game_icon_4clover.png'
import UserImg from '../../assets/images/user.png'

const tmpSliderArr = [
  { id: 1, img: SliderItemImg1 },
  { id: 2, img: SliderItemImg1 },
  { id: 3, img: SliderItemImg1 },
  { id: 4, img: SliderItemImg1 },
  { id: 5, img: SliderItemImg1 },
  { id: 6, img: SliderItemImg1 },
  { id: 7, img: SliderItemImg1 }
]
const tmpArrComments = [
  {
    id: 1,
    avatar: UserImg,
    title: 'Ben F.',
    time: '22 May 2018 12:03',
    text: 'Curabitur tincidunt orci quis odio aliquet placerat. Nullam laoreet justo eros, quis semper turpis gravida eget. Ut ullamcorper nibho a massa tincidunt malesuada. In nunc velit basank. s semper turpis gravida eget. Ut ullamcorper nibho a massa tincidunt malesuada. In nunc velit basank.',
    like: 5,
    comment: 7
  },
  {
    id: 2,
    avatar: UserImg,
    title: 'Thomas D.',
    time: '22 May 2018 12:03',
    text: 'Nulla non pellentesque sem, sed aliquet justo. Praesent egestas purus et bibendum tempus.Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    like: 5,
    comment: 7
  },
  {
    id: 3,
    avatar: UserImg,
    title: 'Thomas D. ',
    time: '22 May 2018 12:03',
    text: 'Nulla non pellentesque sem, sed aliquet justo. Praesent egestas purus et bibendum tempus.',
    like: 5,
    comment: 7
  }
]

export default compose(
  lifecycle({
    componentWillMount() {
      window.scrollTo(0, 0)
    }
  }),
  withProps(() => {
    return {
      address: localStorage.getItem('address'),
      slider: tmpSliderArr,
      comments: tmpArrComments
    }
  }),
  withState('isShowIframe', 'setShowIframe', false),
  withHandlers({
    handleLogout: ({ history }) => () => {
      clearStorageForlogout()
      history.push('/')
    },
    handlePlayNow: ({ isShowIframe, setShowIframe, }) => () => {
      setShowIframe(!isShowIframe)
    }
  }),
  pure
)(AsyncGameDesktop)