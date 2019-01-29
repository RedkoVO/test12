import * as React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { reduxForm } from 'redux-form'
import { createStore } from 'redux'

import Authorization from '../'

const Wrapper = reduxForm({ form: 'test' })(({ children }) => children)
const store = createStore(a => a, {})

describe('<Authorization />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter keyLength={0}>
            <Wrapper>
              <Authorization
                onSubmit={() => {}}
                handleFileDropzone={() => {}}
                isDisabledButton={false}
              />
            </Wrapper>
          </MemoryRouter>
        </Provider>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('HTML: check input #key element', () => {
    const tree = shallow(
      <Authorization
        onSubmit={() => {}}
        handleFileDropzone={() => {}}
        isDisabledButton={false}
      />
    )

    expect(
      tree
        .dive()
        .find('.Authorization-root-1')
        .exists()
    ).toEqual(true)
  })

  it('HTML: check input #key element', () => {
    const tree = shallow(
      <Authorization
        onSubmit={() => {}}
        handleFileDropzone={() => {}}
        isDisabledButton={false}
      />
    )

    const btnRegistre = tree.dive().find('.Authorization-step1BtnBack-11')

    console.log(
      '---1----',
      tree
        .dive()
        .find('h1')
        .debug()
    )

    // btnRegistre.simulate('click')
    // btnRegistre.prop('onClick')()

    // tree.update()

    console.log(
      '---2----',
      tree
        .dive()
        .find('h1')
        .debug()
    )

    expect(
      tree
        .dive()
        .find('.Authorization-root-1')
        .exists()
    ).toEqual(true)
  })

  // it('consist InputField component', () => {
  //   const tree = mount(
  //     <Provider store={store}>
  //       <MemoryRouter keyLength={0}>
  //         <Wrapper>
  //           <Authorization onSubmit={() => {}} handleFileDropzone={() => {}} isDisabledButton={false} test />
  //         </Wrapper>
  //       </MemoryRouter>
  //     </Provider>
  //   )

  //   const input = tree.find(Authorization)

  //   console.log('---Mount---', input.props())

  //   expect(tree.prop('test_name')).toBe('Authorization')
  //   // expect(tree.find(InputField)).toHaveLength(1)
  // })
})
