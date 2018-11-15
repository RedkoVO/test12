import compose from 'recompose/compose'
import { withHandlers, withState, branch, renderComponent } from 'recompose'

import withDeviceTarget from '../../../../hocs/withDeviceTarget'

import AsyncBackArrowDesktop from './Desktop/AsyncFiltersDesktop'
import AsyncBackArrowMobile from './Mobile/AsyncFiltersMobile'

export default compose(
  withDeviceTarget,
  withState('isShowFilter', 'setShowFilter', false),
  withHandlers({
    handleShowFilter: ({ setShowFilter, isShowFilter }) => () => {
      setShowFilter(!isShowFilter)
    }
  }),
  branch(({ isDesktop }) => isDesktop, renderComponent(AsyncBackArrowDesktop))
)(AsyncBackArrowMobile)
