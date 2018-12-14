import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Cases from './'

import CaseXIcon from '../../../assets/images/caseX.png'

const tmpCases = [
  {
    id: 1,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  },
  {
    id: 2,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  },
  {
    id: 3,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  },
  {
    id: 4,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  },
  {
    id: 5,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  },
  {
    id: 6,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  },
  {
    id: 7,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  },
  {
    id: 8,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  },
  {
    id: 9,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  },
  {
    id: 10,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  },
  {
    id: 11,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  },
  {
    id: 12,
    img: CaseXIcon,
    title: 'Hello, buddy!',
    cost: '$34.20',
    game: 'CS:GO'
  }
]
const store = createStore(a => a, {})

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter keyLength={0}>
          <Cases cases={tmpCases} />
        </MemoryRouter>
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
