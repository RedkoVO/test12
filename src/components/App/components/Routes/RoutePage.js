import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import PageLayout from '../PageLayout'

const RoutePage = props => {
  const { component, secretKey, ...rest } = props

  return (
    <Route
      {...rest}
      render={props => {
        return (
          <PageLayout
            {...props}
            secretKey={secretKey}
            content={component}
          />
        )
      }}
    />
  )
}

RoutePage.propTypes = {
  component: PropTypes.func,
  secretKey: PropTypes.string
}

export default RoutePage