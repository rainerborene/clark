import React from 'react'
import Carousel from 'nuka-carousel'
import Question from './Question'
import { setStore, useStore } from '../store'

export default function Questionnaire({onBack}) {
  const [store] = useStore()
  const finished = store.slideIndex === store.questions.length
  const finishClass = finished ? 'finish' : null

  return (
    <div className={`container py-24 delay ${finishClass}`}>
      <Carousel
        vertical={true}
        slideIndex={store.slideIndex}
        afterSlide={index => setStore({ slideIndex: index })}
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        dragging={!finished}
        swiping={!finished}
        autoGenerateStyleTag={false}
      >
        {
          store.questions.map(question =>
            <Question key={question.identifier} model={question} />
          )
        }

        <div>
          <h2>Thank you!</h2>
          <p>Your honest feedback is gold for us.</p>
        </div>
      </Carousel>
    </div>
  )
}
