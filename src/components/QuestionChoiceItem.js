import React from 'react'
import { nextSlide, setChoice } from '../store'

function handleChoiceChange({target}, identifier) {
  setChoice({ identifier, value: target.value, selected: target.selected })
  nextSlide()
}

export default function QuestionChoiceItem({identifier, choice}) {
  return (
    <label className="block">
      <input
        className="align-middle mr-2"
        type="radio"
        name={identifier}
        value={choice.value}
        selected={choice.selected}
        onChange={(e) => handleChoiceChange(e, identifier)}
      />

      <span className="align-middle">{choice.label}</span>
    </label>
  )
}
