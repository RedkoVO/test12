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
    handlePlayNow: ({ isShowIframe, setShowIframe, }) => () => {
      // console.log('isShowIframe', isShowIframe)
      setShowIframe(!isShowIframe)
    }
  }),
  pure
)(AsyncGameDesktop)