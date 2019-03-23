import React from 'react'
import { nextSlide, setChoice } from '../store'

let interval

function handleChoiceChange({target}) {
  const timeout = target.type === "checkbox" ? 1000 : 0

  setChoice({
    identifier: target.name,
    value: target.value,
    selected: target.checked
  })

  // Clever way to deal with multiple choices...
  clearInterval(interval)
  interval = setTimeout(() => nextSlide(), timeout)
}

export default function QuestionChoiceItem({identifier, choice, checkbox}) {
  return (
    <label className="block">
      <input
        className="align-middle mr-2"
        type={checkbox ? "checkbox" : "radio"}
        name={identifier}
        value={choice.value}
        checked={choice.selected}
        onChange={handleChoiceChange}
      />

      <span className="align-middle">{choice.label}</span>
    </label>
  )
}
