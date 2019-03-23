import React from 'react'
import { nextSlide, setChoice } from '../store'

function handleChoiceChange({target}) {
  setChoice({
    identifier: target.name,
    value: target.value,
    selected: target.checked
  })
  nextSlide()
}

export default function QuestionChoiceItem({identifier, choice, checkbox}) {
  return (
    <label className="block">
      {
        checkbox ? (
          <input
            className="align-middle mr-2"
            type="checkbox"
            name={identifier}
            value={choice.value}
            checked={choice.selected}
            onChange={handleChoiceChange}
          />
        ) : (
          <input
            className="align-middle mr-2"
            type="radio"
            name={identifier}
            value={choice.value}
            checked={choice.selected}
            onChange={handleChoiceChange}
          />
        )
      }

      <span className="align-middle">{choice.label}</span>
    </label>
  )
}
