import Async from '../../components/App/components/Async'

export const AsyncGames = Async({
  loader: () => import(/* webpackChunkName: "games_page" */ './index')
})

export default AsyncGames
