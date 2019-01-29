import compose from 'recompose/compose'
import { withHandlers, withProps, withState, pure, lifecycle } from 'recompose'

import { clearStorageForLogout } from '../../utils/localStorageUtils'
import gC from '../../constants'

import AsyncGameDesktop from '../../components/Game/Desktop/AsyncGameDesktop'

import SliderItemImg1 from '../../assets/images/sim_game_icon_4clover.png'
import GameRollImg from '../../assets/images/slider_slot_4clover_m.jpg'
import JungleImg1 from '../../assets/images/jungle_game1.png'
import JungleImg2 from '../../assets/images/jungle_game2.png'
import JungleImg3 from '../../assets/images/jungle_game3.png'
import JungleImg4 from '../../assets/images/jungle_game4.png'
import JungleImg5 from '../../assets/images/jungle_game5.png'
import UserImg from '../../assets/images/user.jpg'

/* TODO: TMP solution! */
const tmpSliderArr = [
  {
    id: 1,
    slides: [
      { id: 1, img: SliderItemImg1 },
      { id: 2, img: SliderItemImg1 },
      { id: 3, img: SliderItemImg1 },
      { id: 4, img: SliderItemImg1 },
      { id: 5, img: SliderItemImg1 },
      { id: 6, img: SliderItemImg1 },
      { id: 7, img: SliderItemImg1 }
    ]
  },
  {
    id: 2,
    slides: [
      { id: 1, img: JungleImg1 },
      { id: 2, img: JungleImg3 },
      { id: 3, img: JungleImg4 },
      { id: 4, img: JungleImg5 },
      { id: 5, img: JungleImg4 },
      { id: 6, img: JungleImg3 },
      { id: 7, img: JungleImg5 }
    ]
  }
]
const tmpArrComments = [
  {
    id: 1,
    avatar: UserImg,
    title: 'Ben F.',
    time: '22 May 2018 12:03',
    text:
      'Curabitur tincidunt orci quis odio aliquet placerat. Nullam laoreet justo eros, quis semper turpis gravida eget. Ut ullamcorper nibho a massa tincidunt malesuada. In nunc velit basank. s semper turpis gravida eget. Ut ullamcorper nibho a massa tincidunt malesuada. In nunc velit basank.',
    like: 5,
    comment: 7
  },
  {
    id: 2,
    avatar: UserImg,
    title: 'Thomas D.',
    time: '22 May 2018 12:03',
    text:
      'Nulla non pellentesque sem, sed aliquet justo. Praesent egestas purus et bibendum tempus.Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    like: 5,
    comment: 7
  },
  {
    id: 3,
    avatar: UserImg,
    title: 'Thomas D. ',
    time: '22 May 2018 12:03',
    text:
      'Nulla non pellentesque sem, sed aliquet justo. Praesent egestas purus et bibendum tempus.',
    like: 5,
    comment: 7
  }
]
const tmpMainImgForGame = [GameRollImg, JungleImg2]

/* TODO: GOVNO_CODE !!! WORKAROUND !!! TMP SOLUTION !!! WARNING !!! */
const address = localStorage.getItem('address')
const url = `${gC.IFRAME_URL}${address}`
const urlJungle = 'https://slots-demo.netlify.com/'
/* *** */

export default compose(
  lifecycle({
    componentWillMount() {
      window.scrollTo(0, 0)
    }
  }),
  withProps(props => {
    return {
      slider:
        props.match.params.bundle === 'jungle'
          ? tmpSliderArr[1].slides
          : tmpSliderArr[0].slides,
      url: props.match.params.bundle === 'jungle' ? urlJungle : url,
      comments: tmpArrComments,
      imgMain:
        props.match.params.bundle === 'jungle'
          ? tmpMainImgForGame[1]
          : tmpMainImgForGame[0]
    }
  }),
  withState('isShowIframe', 'setShowIframe', false),
  withHandlers({
    handleLogout: ({ history }) => () => {
      clearStorageForLogout()
      history.push('/')
    },
    handlePlayNow: ({ isShowIframe, setShowIframe }) => () => {
      setShowIframe(!isShowIframe)
    }
  }),
  pure
)(AsyncGameDesktop)
