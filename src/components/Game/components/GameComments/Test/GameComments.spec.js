import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import GameComments from '../'

const comments = [
  {
    id: 1,
    avatar: 'UserImg',
    title: 'Ben F.',
    time: '22 May 2018 12:03',
    text:
      'Curabitur tincidunt orci quis odio aliquet placerat. Nullam laoreet justo eros, quis semper turpis gravida eget. Ut ullamcorper nibho a massa tincidunt malesuada. In nunc velit basank. s semper turpis gravida eget. Ut ullamcorper nibho a massa tincidunt malesuada. In nunc velit basank.',
    like: 5,
    comment: 7
  },
  {
    id: 2,
    avatar: 'UserImg',
    title: 'Thomas D.',
    time: '22 May 2018 12:03',
    text:
      'Nulla non pellentesque sem, sed aliquet justo. Praesent egestas purus et bibendum tempus.Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    like: 5,
    comment: 7
  }
]

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter keyLength={0}>
        <GameComments comments={comments} />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
