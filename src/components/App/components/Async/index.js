import React from 'react'
import loadable from 'react-loadable'

// import Spinner from 'features/App/components/Spinner'
// import Screen from 'features/App/components/Screen'

const Async = props =>
  loadable({
    loading: ({ isLoading, error }) => {
      if (isLoading) {
        // return (
        //   <Screen>
        //     <Spinner cover />
        //   </Screen>
        // )
        // console.log('loading')
      }

      if (error) {
        console.log('ERROR Async', error)
        return (
          <div>
            Sorry, there was a problem loading the page. Please refresh the page
          </div>
        )
      }

      return null
    },
    ...props
  })

export default Async