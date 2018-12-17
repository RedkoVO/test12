import compose from 'recompose/compose'
import mapProps from 'recompose/mapProps'
import withWidth from '@material-ui/core/withWidth'

import gC from '../constants'

export default compose(
  withWidth(),
  mapProps(({ width, ...rest }) => ({
    ...rest,
    isDesktop: !['xs', 'sm', 'md'].includes(width)
    // isDesktop: ![gC.BRECKPOINT.XS, gC.BRECKPOINT.SM].includes(width)
  }))
)
