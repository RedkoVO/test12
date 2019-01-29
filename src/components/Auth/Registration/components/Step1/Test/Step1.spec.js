import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { reduxForm } from 'redux-form'
import { createStore } from 'redux'

import Step1 from '../'

const Wrapper = reduxForm({ form: 'test' })(({ children }) => children)
const store = createStore(a => a, {})

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter keyLength={0}>
          <Wrapper>
            <Step1
              generatedKey="0000000000000000000000000000000000000000000000000000000000000000"
              isDisabledButton={false}
              onSubmit={() => {}}
              handleSaveSecretKey={() => {}}
              handleGenerateSecretKey={() => {}}
            />
          </Wrapper>
        </MemoryRouter>
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
