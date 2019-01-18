import { compose, withProps } from 'recompose'

export default compose(
  withProps(() => {
    return {
      secretKey: localStorage.getItem('secretKey')
    }
  }),
)
