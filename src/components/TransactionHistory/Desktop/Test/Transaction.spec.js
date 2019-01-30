import * as React from 'react'
import renderer from 'react-test-renderer'

import TransactionHistory from '../'

const data = [
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

it('renders correctly', () => {
  const tree = renderer.create(<TransactionHistory TransactionHistory={data} />).toJSON()
  expect(tree).toMatchSnapshot()
})