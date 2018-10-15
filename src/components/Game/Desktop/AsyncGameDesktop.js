import Async from '../../App/components/Async'

export const AsyncGameDesktop = Async({
  loader: () => import(/* webpackChunkName: "game_desktop" */ './index')
})

export default AsyncGameDesktop
