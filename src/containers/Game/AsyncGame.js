import Async from '../../components/App/components/Async'

export const AsyncGame = Async({
  loader: () => import(/* webpackChunkName: "game_page" */ './index')
})

export default AsyncGame
