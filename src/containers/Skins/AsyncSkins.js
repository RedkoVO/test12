import Async from '../../components/App/components/Async'

export const AsyncSkins = Async({
  loader: () => import(/* webpackChunkName: "skins_page" */ './index')
})

export default AsyncSkins
