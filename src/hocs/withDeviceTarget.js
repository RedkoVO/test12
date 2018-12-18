import compose from 'recompose/compose'
import mapProps from 'recompose/mapProps'
import withWidth from '@material-ui/core/withWidth'

export default compose(
  withWidth(),
  mapProps(({ width, ...rest }) => ({
    ...rest,
    isDesktop: !['xs', 'sm', 'md'].includes(width),
    isMobile: ['xs', 'sm'].includes(width)
  }))
)