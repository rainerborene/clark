import React from 'react'
import ReactDOM from 'react-dom'
import { act, Simulate } from 'react-dom/test-utils';

import {questionnaire} from '../store/questionnaire.json'
import Welcome from '../components/Welcome'

let container

beforeEach(() => {
  container = document.createElement('div')
})

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container)
})

it('should render welcome screen without crashing', () => {
  const startFn = jest.fn()

  act(() => {
    ReactDOM.render(<Welcome onStart={startFn} />, container)
  })

  const title = container.querySelector('h2')
  const description = container.querySelector('p')
  const button = container.querySelector('button')

  expect(title.textContent).toBe(questionnaire.name)
  expect(description.textContent).toBe(questionnaire.description)

  Simulate.click(button)
  expect(startFn).toHaveBeenCalled()
})
