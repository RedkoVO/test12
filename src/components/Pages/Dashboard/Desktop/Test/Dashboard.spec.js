import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Dashboard from '../'

const dataBestAds = [
  {
    id: 1,
    title: 'Games',
    img: 'CloverLogo1',
    link: '/games',
    titleLink: 'Game of the day',
    nameLink: 'Smash Champs'
  },
  {
    id: 2,
    title: 'Shop',
    img: 'CloverLogo1',
    link: '/stream',
    titleLink: 'Product of the day',
    nameLink: 'Blue cool Jelly'
  }
]
const dataCategories = [
  {
    id: 1,
    game: [
      {
        id: 1,
        title: 'Most popular',
        name: '4Clover',
        img: 'CloverLogo1',
        bundle: '4clover'
      },
      {
        id: 2,
        title: 'Most popular',
        name: 'Dice games',
        img: 'CloverLogo1',
        bundle: '4clover'
      },
      {
        id: 3,
        title: 'For children',
        name: 'Word games',
        img: 'CloverLogo1',
        bundle: '4clover'
      },
      {
        id: 4,
        title: 'For children',
        name: 'Funny games',
        img: 'CloverLogo1',
        bundle: '4clover'
      },
      {
        id: 5,
        title: 'For children',
        name: 'Word games',
        img: 'CloverLogo1',
        bundle: '4clover'
      },
      {
        id: 6,
        title: 'For children',
        name: 'Word games',
        img: 'CloverLogo1',
        bundle: '4clover'
      }
    ]
  },
  {
    id: 2,
    game: [
      {
        id: 1,
        title: 'Most popular',
        name: 'Loto games',
        img: 'CloverLogo1',
        bundle: '4clover'
      },
      {
        id: 2,
        title: 'Most popular',
        name: 'Dice games',
        img: 'CloverLogo1',
        bundle: '4clover'
      },
      {
        id: 3,
        title: 'For children',
        name: 'Word games',
        img: 'CloverLogo1',
        bundle: '4clover'
      }
    ]
  }
]
const dataAllBalance = {
  result: [
    {
      balance: '0',
      currency: 'USD',
      lastBlock:
        '0000000000000000000000000000000000000000000000000000000000000000'
    },
    {
      balance: '1000000',
      currency: 'BTC',
      lastBlock:
        '0000000000000000000000000000000000000000000000000000000000000000'
    }
  ]
}

const Wrapper = reduxForm({ form: 'test' })(({ children }) => children)
const store = createStore(a => a, {})

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter keyLength={0}>
          <Wrapper>
            <Dashboard
              bestAds={dataBestAds}
              gameCategories={dataCategories}
              onSubmit={() => {}}
              onCopyKey={() => {}}
              isDisabledButton={false}
              allBalance={dataAllBalance}
              curencySelectValue={{ currency: 'DCB', code: 0 }}
              handleChangeBalance={() => {}}
              handleSubscribeCheckbox={() => {}}
              isSubscribeCheckbox={false}
            />
          </Wrapper>
        </MemoryRouter>
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
