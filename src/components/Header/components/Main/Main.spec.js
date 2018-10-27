import * as React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { reduxForm } from 'redux-form'
import { createStore } from 'redux'

import Main from './'

const Wrapper = reduxForm({ form: 'test' })(({ children }) => children)
const store = createStore(a => a, {})

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Wrapper>
        <Main
          onSubmit={() => { }}
          balance={'00000'}
          isDisabledButton={false}
        />
      </Wrapper>
    </Provider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})