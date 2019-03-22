import React from 'react'

import { nextSlide } from '../store'

export default function QuestionTextbox({identifier, multiline}) {
  const textarea = multiline === "true"

  return (
    <div>
      {
        textarea ? (
          <textarea
            name={identifier}
            rows="6"
            className="w-full border-b-2 outline-none focus:border-blue pb-3 mb-4"
            placeholder="Type your answer here."
          ></textarea>
        ) : (
          <input
            type="text"
            name={identifier}
            className="w-full border-b-2 outline-none focus:border-blue pb-3 mb-4"
            placeholder="Type your answer here."
          />
        )
      }

      <button type="button" className="btn-outline-blue" onClick={() => nextSlide()}>Next</button>
    </div>
  )
}
