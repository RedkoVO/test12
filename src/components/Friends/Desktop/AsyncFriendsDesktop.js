import Async from '../../App/components/Async'

export const AsyncFriendsDesktop = Async({
  loader: () => import(/* webpackChunkName: "friends_desktop" */ './index')
})

export default AsyncFriendsDesktop
