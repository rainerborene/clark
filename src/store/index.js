import { useState } from 'react'
import { questionnaire } from './questionnaire.json'

const store = {
  state: questionnaire,
  setters: []
};

export function setStore(value) {
  store.state = value;
  store.setters.forEach(setter => setter(store.state));
}

export function useStore() {
  const [ state, set ] = useState(store.state);
  if (!store.setters.includes(set)) {
    store.setters.push(set);
  }
  return [ state, setStore ];
}

// ---

export function setChoice({identifier, value, selected}) {
  const state = Object.assign({}, store.state)
  const question = state.questions.find(question => question.identifier === identifier)
  const choice = question.choices.find(choice => choice.value === value)
  choice.selected = selected

  setStore(state)
}
