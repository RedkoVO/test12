import * as React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { createStore } from 'redux'

import InputField from '../../../App/components/Form/InputField'
import PageLayout from '../../../App/components/PageLayout'

import Authorization from './'

const Wrapper = reduxForm({ form: 'test' })(({ children }) => children)
const store = createStore(a => a, {})

describe('<Authorization />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter keyLength={0}>
            <Wrapper>
              <Authorization onSubmit={() => {}} isDisabledButton={false} />
            </Wrapper>
          </MemoryRouter>
        </Provider>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('consist InputField component', () => {
    const tree = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[ '/registration' ]}>
          <Wrapper>
            <Authorization onSubmit={() => {}} isDisabledButton={false} />
          </Wrapper>
        </MemoryRouter>
      </Provider>
    )

    const input = tree.find('input#key')
    input.simulate('change', {target: {value: '1212TESTTEST'}})

    const form = tree.find('form').first()
    form.simulate('submit')

    tree.update()

    console.log('----------', input.debug())
    // console.log('----------', tree.find(InputField).debug())

    expect(input.prop('value')).toBe('1212TESTTEST')
    expect(tree.find(InputField)).toHaveLength(1)
  })



  it('HTML: check input #key element', () => {
    const tree = shallow(
      <Authorization onSubmit={() => {}} isDisabledButton={false} />
    )

    // console.log('----------', tree.dive().find('#key').debug())

    expect(tree.dive().find('#key').exists()).toEqual(true)
  })
})
