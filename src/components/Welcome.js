import React from 'react'

import logo from '../images/clark-logo.svg'
import { useStore } from '../store'

export default function Welcome({onStart}) {
  const [store] = useStore()

  return (
    <div className="flex flex-col items-center">
      <img src={logo} width="130" className="mb-4" alt="" />
      <small className="tracking-wide uppercase font-bold text-grey-darker mb-12">The Survey App</small>
      <h2 className="font-normal text-black">{store.name}</h2>
      <p className="text-grey-dark w-3/4 text-center">{store.description}</p>
      <button className="btn-outline text-lg" onClick={onStart}>I sure do!</button>
    </div>
  )
}
