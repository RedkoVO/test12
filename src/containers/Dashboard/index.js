import compose from 'recompose/compose'
import withProps from 'recompose/withProps'

import AsyncDashboardDesktop from '../../components/Dashboard/Desktop/AsyncDashboardDesktop'

import BestGameLogo from '../../assets/images/best-game.png'
import BestShopLogo from '../../assets/images/dice-game.png'

import GameLogo1 from '../../assets/images/funny-game2.png'
import GameLogo2 from '../../assets/images/word-game2.png'
import GameLogo3 from '../../assets/images/dice-game.png'
import GameLogo4 from '../../assets/images/funny-game.png'
import GameLogo5 from '../../assets/images/loto-game.png'
import GameLogo6 from '../../assets/images/word-game.png'

import CloverLogo1 from '../../assets/images/sim_game_icon_4clover.png'
// import CloverLogo2 from '../../assets/images/slider_slot_4clover_m.png'
// import CloverLogo3 from '../../assets/images/slider_slot_4clover.png'

const tmpTransactionCollection = [
  { id: 1, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 BTC', status: 'PENDING', time: '01:30 PM 12.02.2018' },
  { id: 2, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 BTC', status: 'DONE', time: '01:30 PM 12.02.2018' },
  { id: 3, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 BTC', status: 'DONE', time: '01:30 PM 12.02.2018' },
  { id: 4, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 BTC', status: 'PENDING', time: '01:30 PM 12.02.2018' },
  { id: 5, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 BTC', status: 'PENDING', time: '01:30 PM 12.02.2018' },
  { id: 6, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 BTC', status: 'PENDING', time: '01:30 PM 12.02.2018' },
  { id: 7, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 BTC', status: 'PENDING', time: '01:30 PM 12.02.2018' },
  { id: 8, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 BTC', status: 'PENDING', time: '01:30 PM 12.02.2018' },
  { id: 9, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 BTC', status: 'PENDING', time: '01:30 PM 12.02.2018' },
  { id: 10, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 BTC', status: 'PENDING', time: '01:30 PM 12.02.2018' },
  { id: 11, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 BTC', status: 'PENDING', time: '01:30 PM 12.02.2018' }
]
const tmpBestAdsCollection = [
  { id: 1, title: 'Games', img: BestGameLogo, titleLink: 'Game of the day', nameLink: 'Smash Champs' },
  { id: 2, title: 'Shop', img: BestShopLogo, titleLink: 'Product of the day', nameLink: 'Blue cool Jelly' }
]
const gameCategories = [
  {
    id: 1,
    game: [
      { id: 1, title: 'Most popular', name: '4Clover', img: CloverLogo1, bundle: '4clover' },
      { id: 2, title: 'Most popular', name: 'Dice games', img: GameLogo2 },
      { id: 3, title: 'For children', name: 'Word games', img: GameLogo3 },
      { id: 4, title: 'For children', name: 'Funny games', img: GameLogo4 },
      { id: 5, title: 'For children', name: 'Word games', img: GameLogo5 },
      { id: 6, title: 'For children', name: 'Word games', img: GameLogo6 }
    ]
  },
  {
    id: 2,
    game: [
      { id: 1, title: 'Most popular', name: 'Loto games', img: GameLogo1 },
      { id: 2, title: 'Most popular', name: 'Dice games', img: GameLogo2 },
      { id: 3, title: 'For children', name: 'Word games', img: GameLogo3 },
      { id: 4, title: 'For children', name: 'Funny games', img: GameLogo4 },
      { id: 5, title: 'For children', name: 'Word games', img: GameLogo5 },
      { id: 6, title: 'For children', name: 'Word games', img: GameLogo6 }
    ]
  },
  {
    id: 3,
    game: [
      { id: 1, title: 'Most popular', name: 'Loto games', img: GameLogo1 },
      { id: 2, title: 'Most popular', name: 'Dice games', img: GameLogo2 },
      { id: 3, title: 'For children', name: 'Word games', img: GameLogo3 },
      { id: 4, title: 'For children', name: 'Funny games', img: GameLogo4 },
      { id: 5, title: 'For children', name: 'Word games', img: GameLogo5 },
      { id: 6, title: 'For children', name: 'Word games', img: GameLogo6 }
    ]
  },
  {
    id: 4,
    game: [
      { id: 1, title: 'Most popular', name: 'Loto games', img: GameLogo1 },
      { id: 2, title: 'Most popular', name: 'Dice games', img: GameLogo2 },
      { id: 3, title: 'For children', name: 'Word games', img: GameLogo3 },
      { id: 4, title: 'For children', name: 'Funny games', img: GameLogo4 },
      { id: 5, title: 'For children', name: 'Word games', img: GameLogo5 },
      { id: 6, title: 'For children', name: 'Word games', img: GameLogo6 }
    ]
  }
]

export default compose(
  withProps({
    transactions: tmpTransactionCollection,
    bestAds: tmpBestAdsCollection,
    gameCategories: gameCategories
  })
)(AsyncDashboardDesktop)