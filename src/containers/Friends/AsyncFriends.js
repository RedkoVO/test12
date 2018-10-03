import Async from '../../components/App/components/Async'

export const AsyncFriends = Async({
  loader: () => import(/* webpackChunkName: "friends_page" */ './index')
})

export default AsyncFriends
