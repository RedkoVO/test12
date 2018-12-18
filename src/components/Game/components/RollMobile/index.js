import compose from 'recompose/compose'
import { branch, renderNothing } from 'recompose'

import withDeviceTarget from '../../../../hocs/withDeviceTarget'

import AsyncRollMobile from './Mobile/AsyncRollMobile'

export default compose(
  withDeviceTarget,
  branch(({ isMobile }) => !isMobile, renderNothing)
)(AsyncRollMobile)
