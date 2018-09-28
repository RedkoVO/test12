import Async from '../../Async'

export const AsyncFriendsDesktop = Async({
  loader: () => import(/* webpackChunkName: "friends_desktop" */ './index')
})

export default AsyncFriendsDesktop
