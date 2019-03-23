import React from 'react'

import logo from '../images/clark-logo.svg'
import { useStore } from '../store'

export default function Welcome({onStart}) {
  const [store] = useStore()

  return (
    <div className="flex flex-col md:items-center px-2 py-4 md:py-0">
      <img src={logo} width="130" className="mb-4 mx-auto" alt="" />
      <small className="tracking-wide uppercase font-bold text-center text-grey-darker mb-12">The Coding Challenge</small>
      <h2 className="font-normal text-black truncate">{store.name}</h2>
      <p className="text-grey-dark md:w-3/4 md:text-center">{store.description}</p>
      <button className="btn-outline text-lg" onClick={onStart}>I sure do!</button>
    </div>
  )
}
