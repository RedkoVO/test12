import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { reduxForm } from 'redux-form'
import { createStore } from 'redux'

import MenuNavigationGame from '../'

const Wrapper = reduxForm({ form: 'test' })(({ children }) => children)
const store = createStore(a => a, {})

it('renders correctly main', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter keyLength={0}>
          <Wrapper>
            <MenuNavigationGame page={'test'} handleLogout={() => {}} />
          </Wrapper>
        </MemoryRouter>
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
