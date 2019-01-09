import * as React from 'react'
import renderer from 'react-test-renderer'

import InputField from '../'

it('renders correctly', () => {
  const tree = renderer.create(
    <InputField
      value={'value'}
      id={'id'}
      name={'name'}
      type={'type'}
      className={'wpInput'}
      placeholder={'placeholder'}
      meta={{ touched: true, error: 'error' }}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})