import React from 'react'

import QuestionChoiceItem from './QuestionChoiceItem'

export default function QuestionMultipleChoice({identifier, choices, multiple}) {
  return choices.map((choice, i) =>
    <QuestionChoiceItem
      checkbox={multiple === "true"}
      identifier={identifier}
      choice={choice}
      key={`choice-${i}`}
    />
  )
}
