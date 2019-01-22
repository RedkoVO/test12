import React from 'react'
import PropTypes from 'prop-types'
import DefaultHeader from '../../../../containers/Header'

export const PageLayout = ({
  content: Content,
  header: Header,
  // footer: Footer,
  ...rest
}) => {
  return (
    <div className="container">
      <div className="containerMain">
        <Header type="main" {...rest} />
        <content>
          <Content {...rest} />
        </content>
        {/* <Footer {...rest} /> */}
      </div>
    </div>
  )
}

PageLayout.propTypes = {
  header: PropTypes.func.isRequired,
  content: PropTypes.func.isRequired
  // footer: PropTypes.func.isRequired
}

PageLayout.defaultProps = {
  header: DefaultHeader
  // footer: DefaultFooter
}

export default PageLayout
