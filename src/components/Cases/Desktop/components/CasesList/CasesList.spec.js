import * as React from 'react'
import renderer from 'react-test-renderer'

import CasesList from './'

import CaseXIcon from '../../../../../assets/images/caseX.png'

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

it('renders correctly', () => {
  const tree = renderer.create(<CasesList cases={tmpCases} />).toJSON()
  expect(tree).toMatchSnapshot()
})
