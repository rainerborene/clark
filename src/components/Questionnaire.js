import React from 'react'
import Question from './Question'
import { useStore } from '../store'

export default function Questionnaire() {
  const [store] = useStore()

  return (
    <div className="container py-24 delay">
      <div className="w-1/2">
        <small className="text-grey font-bold uppercase">{store.category_name_hyphenated}</small>
        <h1 className="mb-1">{store.name}</h1>
        <p className="text-grey-darker mb-8">{store.description}</p>
      </div>

      {
        store.questions.map(question =>
          <Question key={question.identifier} model={question} />
        )
      }
    </div>
  )
}
