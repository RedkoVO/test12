import * as React from 'react'
import renderer from 'react-test-renderer'

import BestAd from './'

import BestGameLogo from '../../../../assets/images/best-game.png'

const data = [
  { id: 1, title: 'Games', img: BestGameLogo, titleLink: 'Game of the day', nameLink: 'Smash Champs' },
  { id: 2, title: 'Shop', img: BestGameLogo, titleLink: 'Product of the day', nameLink: 'Blue cool Jelly' }
]

it('renders correctly', () => {
  const tree = renderer.create(<BestAd bestAds={data} />).toJSON()
  expect(tree).toMatchSnapshot()
})