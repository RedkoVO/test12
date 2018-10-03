import Async from '../../App/components/Async'

export const AsyncGamesDesktop = Async({
  loader: () => import(/* webpackChunkName: "games_desktop" */ './index')
})

export default AsyncGamesDesktop
