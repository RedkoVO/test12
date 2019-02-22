import * as React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { reduxForm } from 'redux-form'
import { createStore } from 'redux'

import Main from '../'

const allBalanceResultMock = {
  ADA: {
    code: 262,
    balance: '0',
    lastBlock:
      '0000000000000000000000000000000000000000000000000000000000000000'
  },
  USD: {
    currency: 'USD',
    balance: '999918599998995600000000000000000000',
    lastBlock:
      '0000000000000000000000000000000000000000000000000000000000000000'
  }
}

const Wrapper = reduxForm({ form: 'test' })(({ children }) => children)
const store = createStore(a => a, {})

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Wrapper>
          <Main
            onSubmit={() => {}}
            onCopyKey={() => {}}
            handleChangeBalance={() => {}}
            allBalanceResult={allBalanceResultMock}
            curencySelectValue={{ currency: 'DCB', code: 0 }}
            isDisabledButton={false}
          />
        </Wrapper>
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
