import compose from 'recompose/compose'
import { branch, renderComponent } from 'recompose'

import withDeviceTarget from '../../../../hocs/withDeviceTarget'

import AsyncRollTopDesktop from './Desktop/AsyncRollTopDesktop'
import AsyncRollTopMobile from './Mobile/AsyncRollTopMobile'

export default compose(
  withDeviceTarget,
  branch(({ isMobile }) => isMobile, renderComponent(AsyncRollTopMobile))
)(AsyncRollTopDesktop)
