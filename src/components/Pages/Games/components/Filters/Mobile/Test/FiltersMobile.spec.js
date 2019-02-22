import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import FiltersDesktop from '../'

it('renders correctly filters HIDDEN', () => {
  const tree = renderer
    .create(
      <MemoryRouter keyLength={0}>
        <FiltersDesktop isShowFilter={false} handleShowFilter={() => {}} />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly filters SHOW', () => {
  const tree = renderer
    .create(
      <MemoryRouter keyLength={0}>
        <FiltersDesktop isShowFilter={true} handleShowFilter={() => {}} />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
