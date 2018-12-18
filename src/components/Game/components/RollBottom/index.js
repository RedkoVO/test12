import compose from 'recompose/compose'
import { branch, renderComponent } from 'recompose'

import withDeviceTarget from '../../../../hocs/withDeviceTarget'

import AsyncRollBottomDesktop from './Desktop/AsyncRollBottomDesktop'
import AsyncRollBottomMobile from './Mobile/AsyncRollBottomMobile'

export default compose(
  withDeviceTarget,
  branch(({ isMobile }) => isMobile, renderComponent(AsyncRollBottomMobile))
)(AsyncRollBottomDesktop)
