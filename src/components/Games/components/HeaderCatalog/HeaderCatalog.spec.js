import * as React from 'react'
import renderer from 'react-test-renderer'

import HeaderCatalog from './'

it('renders correctly DESKTOP', () => {
  const tree = renderer.create(<HeaderCatalog isDesktop={true} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly MOBILE', () => {
  const tree = renderer.create(<HeaderCatalog isDesktop={false} />).toJSON()
  expect(tree).toMatchSnapshot()
})