import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Game from '../'

const slider = [
  {
    id: 1,
    slides: [
      { id: 1, img: 'SliderItemImg1' },
      { id: 2, img: 'SliderItemImg1' },
      { id: 3, img: 'SliderItemImg1' },
      { id: 4, img: 'SliderItemImg1' },
      { id: 5, img: 'SliderItemImg1' },
      { id: 6, img: 'SliderItemImg1' },
      { id: 7, img: 'SliderItemImg1' }
    ]
  },
  {
    id: 2,
    slides: [
      { id: 1, img: 'JungleImg1' },
      { id: 2, img: 'JungleImg3' },
      { id: 3, img: 'JungleImg4' },
      { id: 4, img: 'JungleImg5' },
      { id: 5, img: 'JungleImg4' },
      { id: 6, img: 'JungleImg3' },
      { id: 7, img: 'JungleImg5' }
    ]
  }
]
const comments = [
  {
    id: 1,
    avatar: 'UserImg',
    title: 'Ben F.',
    time: '22 May 2018 12:03',
    text: 'Curabitur tincidunt orci quis odio aliquet placerat. Nullam laoreet justo eros, quis semper turpis gravida eget. Ut ullamcorper nibho a massa tincidunt malesuada. In nunc velit basank. s semper turpis gravida eget. Ut ullamcorper nibho a massa tincidunt malesuada. In nunc velit basank.',
    like: 5,
    comment: 7
  },
  {
    id: 2,
    avatar: 'UserImg',
    title: 'Thomas D.',
    time: '22 May 2018 12:03',
    text: 'Nulla non pellentesque sem, sed aliquet justo. Praesent egestas purus et bibendum tempus.Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    like: 5,
    comment: 7
  }
]

it('renders correctly Desktop', () => {
  const tree = renderer.create(
    <MemoryRouter keyLength={0}>
      <Game
        handlePlayNow={() => {}}
        isShowIframe={false}
        slider={slider}
        url={'url'}
        imgMain={'image'}
        comments={comments}
        handleLogouts={() => {}}
        isDesktop={true}
      />
    </MemoryRouter>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly Mobile', () => {
  const tree = renderer.create(
    <MemoryRouter keyLength={0}>
      <Game
        handlePlayNow={() => {}}
        isShowIframe={false}
        slider={slider}
        url={'url'}
        imgMain={'image'}
        comments={comments}
        handleLogouts={() => {}}
        isDesktop={false}
      />
    </MemoryRouter>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})