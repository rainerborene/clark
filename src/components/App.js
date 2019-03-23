import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Welcome from './Welcome'
import Questionnaire from './Questionnaire'

export default function App() {
  const [started, setStarted] = useState(false)

  const transition = {
    mountOnEnter: true,
    unmountOnExit: true,
    classNames: {
      appear: "animated absolute",
      appearActive: "fadeInUp",
      enter: "animated absolute",
      enterActive: "fadeInUp",
      exit: "animated faster",
      exitActive: "fadeOutUp"
    }
  }

  return (
    <div className="md:flex md:items-center md:justify-center min-h-screen">
      <TransitionGroup component={null}>
        {
          started && (
            <CSSTransition {...transition} timeout={1500}>
              <Questionnaire />
            </CSSTransition>
          )
        }
        {
          !started && (
            <CSSTransition {...transition} timeout={{appear: 1000, exit: 500}} appear>
              <Welcome onStart={() => setStarted(true)} />
            </CSSTransition>
          )
        }
      </TransitionGroup>
    </div>
  )
}
