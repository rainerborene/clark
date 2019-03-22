import React from 'react'

import QuestionChoiceItem from './QuestionChoiceItem'

export default function QuestionMultipleChoice({identifier, choices}) {
  return choices.map((choice, i) =>
    <QuestionChoiceItem identifier={identifier} choice={choice} key={`choice-${i}`} />
  )
}
