import React from 'react'
import { setChoice } from '../store'

function MultipleChoiceItem({identifier, choice}) {
  return (
    <label className="block">
      <input
        className="align-middle mr-2"
        type="checkbox"
        value={choice.value}
        checked={choice.selected}
        onChange={(e) => setChoice({identifier, value: choice.value, selected: e.target.checked})}
      />

      <span className="align-middle">{choice.label}</span>
    </label>
  )
}

function MultipleChoice({identifier, choices}) {
  return choices.map((choice, i) =>
    <MultipleChoiceItem
      identifier={identifier}
      choice={choice}
      key={`choice-${i}`}
    />
  )
}

function Text({identifier, multiline}) {
  return (
    <div>
      {
        multiline && <textarea name={identifier} rows="6" className="w-full border-2 outline-none rounded focus:border-teal p-4"></textarea>
      }
    </div>
  )
}


export default function Question({model}) {
  return (
    <div className="mb-6">
      <h3 className="font-normal mb-2">{model.headline}</h3>
      {model.question_type === 'text' && <Text {...model} />}
      {model.question_type === 'multiple-choice' && <MultipleChoice {...model} />}
    </div>
  )
}
