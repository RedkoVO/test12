import compose from 'recompose/compose'
import { withHandlers, withState, pure } from 'recompose'

import AsyncGameDesktop from '../../components/Game/Desktop/AsyncGameDesktop'

export default compose(
  withState('isShowIframe', 'setShowIframe', false),
  withHandlers({
    handlePlayNow: ({ isShowIframe, setShowIframe, }) => () => {
      // console.log('isShowIframe', isShowIframe)
      setShowIframe(!isShowIframe)
    }
  }),
  pure
)(AsyncGameDesktop)