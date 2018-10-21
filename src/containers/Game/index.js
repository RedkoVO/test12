import compose from 'recompose/compose'
import { withHandlers, withProps, withState, pure, lifecycle } from 'recompose'

import AsyncGameDesktop from '../../components/Game/Desktop/AsyncGameDesktop'

export default compose(
  lifecycle({
    componentWillMount() {
      window.scrollTo(0, 0)
    }
  }),
  withProps(() => {
    return {
      address: localStorage.getItem('address')
    }
  }),
  withState('isShowIframe', 'setShowIframe', false),
  withHandlers({
    /* TODO: it's code is repeat, move to another */
    handleLogout: ({ history }) => () => {
      localStorage.removeItem("address")
      localStorage.removeItem("publicKey")
      localStorage.removeItem("representative")
      localStorage.removeItem("secretKey")
      localStorage.removeItem("lastBlock")

      history.push('/')
    },
    handlePlayNow: ({ isShowIframe, setShowIframe, }) => () => {
      // console.log('isShowIframe', isShowIframe)
      setShowIframe(!isShowIframe)
    }
  }),
  pure
)(AsyncGameDesktop)