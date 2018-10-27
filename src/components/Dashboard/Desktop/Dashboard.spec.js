import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Dashboard from './'

const dataTransaction = [
  { id: 1, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 DCB', status: 'DEMO', time: '01:30 PM 12.02.2018' },
  { id: 2, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 DCB', status: 'DEMO', time: '01:30 PM 12.02.2018' },
  { id: 3, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 DCB', status: 'DEMO', time: '01:30 PM 12.02.2018' },
  { id: 4, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 DCB', status: 'DEMO', time: '01:30 PM 12.02.2018' },
  { id: 5, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 DCB', status: 'DEMO', time: '01:30 PM 12.02.2018' },
  { id: 6, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 DCB', status: 'DEMO', time: '01:30 PM 12.02.2018' },
  { id: 7, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 DCB', status: 'DEMO', time: '01:30 PM 12.02.2018' },
  { id: 8, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 DCB', status: 'DEMO', time: '01:30 PM 12.02.2018' },
  { id: 9, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 DCB', status: 'DEMO', time: '01:30 PM 12.02.2018' },
  { id: 10, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 DCB', status: 'DEMO', time: '01:30 PM 12.02.2018' },
  { id: 11, address: '0x88d50B466BfE55222019D71F9E8fAe17f5f45FCA1', amount: '0.1221 DCB', status: 'DEMO', time: '01:30 PM 12.02.2018' }
]
const dataBestAds = [
  { id: 1, title: 'Games', img: 'CloverLogo1', titleLink: 'Game of the day', nameLink: 'Smash Champs' },
  { id: 2, title: 'Shop', img: 'CloverLogo1', titleLink: 'Product of the day', nameLink: 'Blue cool Jelly' }
]
const dataCategories = [
  {
    id: 1,
    game: [
      { id: 1, title: 'Most popular', name: '4Clover', img: 'CloverLogo1', bundle: '4clover' },
      { id: 2, title: 'Most popular', name: 'Dice games', img: 'CloverLogo1', bundle: '4clover' },
      { id: 3, title: 'For children', name: 'Word games', img: 'CloverLogo1', bundle: '4clover' },
      { id: 4, title: 'For children', name: 'Funny games', img: 'CloverLogo1', bundle: '4clover' },
      { id: 5, title: 'For children', name: 'Word games', img: 'CloverLogo1', bundle: '4clover' },
      { id: 6, title: 'For children', name: 'Word games', img: 'CloverLogo1', bundle: '4clover' }
    ]
  },
  {
    id: 2,
    game: [
      { id: 1, title: 'Most popular', name: 'Loto games', img: 'CloverLogo1', bundle: '4clover' },
      { id: 2, title: 'Most popular', name: 'Dice games', img: 'CloverLogo1', bundle: '4clover' },
      { id: 3, title: 'For children', name: 'Word games', img: 'CloverLogo1', bundle: '4clover' },
      { id: 4, title: 'For children', name: 'Funny games', img: 'CloverLogo1', bundle: '4clover' },
      { id: 5, title: 'For children', name: 'Word games', img: 'CloverLogo1', bundle: '4clover' },
      { id: 6, title: 'For children', name: 'Word games', img: 'CloverLogo1', bundle: '4clover' }
    ]
  }
]

it('renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter keyLength={0}>
      <Dashboard transactions={dataTransaction} bestAds={dataBestAds} gameCategories={dataCategories} />
    </MemoryRouter>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})