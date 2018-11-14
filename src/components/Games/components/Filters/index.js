import compose from 'recompose/compose'
import branch from 'recompose/branch'
import renderComponent from 'recompose/renderComponent'

import withDeviceTarget from '../../../../hocs/withDeviceTarget'

import AsyncBackArrowDesktop from './Desktop/AsyncFiltersDesktop'
import AsyncBackArrowMobile from './Mobile/AsyncFiltersMobile'

export default compose(
  withDeviceTarget,
  branch(
    ({ isDesktop }) => isDesktop,
    renderComponent(AsyncBackArrowDesktop)
  )
)(AsyncBackArrowMobile)