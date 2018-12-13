import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Header from './'

it('renders main', () => {
  const tree = renderer
    .create(
      <MemoryRouter keyLength={0}>
        <Header type={'main'} handleLogout={() => {}} />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders games', () => {
  const tree = renderer
    .create(
      <Header
        type={'games'}
        children={<div>Test</div>}
        handleLogout={() => {}}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders catalog', () => {
  const tree = renderer
    .create(<Header type={'catalog'} handleLogout={() => {}} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
