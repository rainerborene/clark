import React from 'react'

import QuestionTextbox from '../components/QuestionTextbox'
import QuestionMultipleChoice  from '../components/QuestionMultipleChoice'

export default function Question({model}) {
  return (
    <div className="mb-16">
      <h3 className="font-normal mb-2">{model.headline}</h3>
      {model.question_type === 'text' && <QuestionTextbox {...model} />}
      {model.question_type === 'multiple-choice' && <QuestionMultipleChoice {...model} />}
    </div>
  )
}
