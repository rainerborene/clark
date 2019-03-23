import React from 'react'

import { nextSlide } from '../store'

export default function QuestionTextbox({identifier, multiline}) {
  const textarea = multiline === "true"
  const attributes = {
    name: identifier,
    className: "w-full border-b-2 outline-none focus:border-blue pb-3 mb-4",
    placeholder: "Type your answer here."
  }

  return (
    <div>
      {
        textarea ? <textarea {...attributes} rows="6"></textarea>
                 : <input {...attributes} type="text" />
      }

      <button type="button" className="btn-outline-blue" onClick={() => nextSlide()}>Next</button>
    </div>
  )
}
