import * as React from 'react'
import renderer from 'react-test-renderer'

import HeaderGames from './'

it('renders correctly DESKTOP', () => {
  const tree = renderer.create(<HeaderGames isDesktop={true} children={<div>test</div>} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly MOBILE', () => {
  const tree = renderer.create(<HeaderGames isDesktop={false} children={<div>test</div>} />).toJSON()
  expect(tree).toMatchSnapshot()
})