import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import RollBottomMobile from '../'

const slider = [
  { id: 1, img: 'SliderItemImg1' },
  { id: 2, img: 'SliderItemImg1' },
  { id: 3, img: 'SliderItemImg1' },
  { id: 4, img: 'SliderItemImg1' },
  { id: 5, img: 'SliderItemImg1' },
  { id: 6, img: 'SliderItemImg1' },
  { id: 7, img: 'SliderItemImg1' }
]

it('renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter keyLength={0}>
      <RollBottomMobile
        handlePlayNow={() => { }}
        slider={slider}
      />
    </MemoryRouter>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})