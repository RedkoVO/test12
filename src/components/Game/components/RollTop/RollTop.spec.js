import * as React from 'react'
import renderer from 'react-test-renderer'

import RollTop from './'

it('renders correctly Desktop', () => {
  const tree = renderer
    .create(<RollTop imgMain={'image'} isDesktop={true} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly Mobile', () => {
  const tree = renderer
    .create(<RollTop imgMain={'image'} isDesktop={false} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
