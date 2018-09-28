import Async from '../../Async'

export const AsyncGamesDesktop = Async({
  loader: () => import(/* webpackChunkName: "games_desktop" */ './index')
})

export default AsyncGamesDesktop
