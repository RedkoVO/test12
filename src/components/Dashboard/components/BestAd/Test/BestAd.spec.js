import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import BestAd from '../'

import BestGameLogo from '../../../../../assets/images/best-game.png'

const data = [
  {
    id: 1,
    title: 'Games',
    img: BestGameLogo,
    link: '/',
    titleLink: 'Game of the day',
    nameLink: 'Smash Champs'
  },
  {
    id: 2,
    title: 'Shop',
    img: BestGameLogo,
    link: '/',
    titleLink: 'Product of the day',
    nameLink: 'Blue cool Jelly'
  }
]

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter keyLength={0}>
        <BestAd bestAds={data} />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
