import React from 'react'

import QuestionTextbox from '../components/QuestionTextbox'
import QuestionMultipleChoice  from '../components/QuestionMultipleChoice'

function QuestionAnswer(model) {
  switch (model.question_type) {
    case 'text':
      return <QuestionTextbox {...model} />
    case 'multiple-choice':
      return <QuestionMultipleChoice {...model} />
    default:
      return null
  }
}

export default function Question({model}) {
  return (
    <div className="mb-16">
      <h3 className="font-normal mb-2">{model.headline}</h3>
      {QuestionAnswer(model)}
    </div>
  )
}
