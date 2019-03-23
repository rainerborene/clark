import { useState, useEffect } from 'react'
import { questionnaire } from './questionnaire.json'

export const store = {
  state: { slideIndex: 0, ...questionnaire },
  setters: []
}

export function resetStore(value) {
  store.state = value
  store.setters.forEach(setter => setter(store.state))
}

export function setStore(merge) {
  resetStore({ ...store.state, ...merge })
}

export function useStore() {
  const [ state, set ] = useState(store.state);
  if (!store.setters.includes(set)) {
    store.setters.push(set)
  }

  useEffect(() => () => {
    store.setters = store.setters.filter(setter => setter !== set)
  }, [])

  return [ state, setStore ]
}

// ---

export function setChoice({identifier, value, selected}) {
  const state = Object.assign({}, store.state)
  const question = state.questions.find(question => question.identifier === identifier)
  const choice = question.choices.find(choice => choice.value === value)

  if (question.multiple === "false") {
    question.choices.forEach(item => {
      item.selected = false
    })
  }

  choice.selected = selected
  resetStore(state)
}

export function nextSlide() {
  setStore({ slideIndex: store.state.slideIndex + 1 })
}
