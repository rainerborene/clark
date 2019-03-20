import React from 'react'

import logo from '../images/clark-logo.svg'

export default function Welcome({onStart}) {
  return (
    <div className="flex flex-col items-center">
      <img src={logo} width="130" className="mb-4" alt="" />
      <small className="tracking-wide uppercase font-bold text-grey-darker mb-12">The Survey App</small>
      <h2 className="font-normal text-black">Try out our awesome minimalist form now.</h2>
      <button className="btn-outline text-lg" onClick={onStart}>I sure do!</button>
    </div>
  )
}
