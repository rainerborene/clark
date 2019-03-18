import React from 'react'

import logo from './images/clark-logo.svg'

const Welcome = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="flex flex-col items-center animated fadeInUp slow">
      <img src={logo} width="130" className="mb-4" />
      <small className="tracking-wide uppercase font-bold text-grey-darker mb-12">The Survey App</small>
      <h2 class="font-normal text-black">Try out our awesome minimalist form now.</h2>
      <a href="#" className="btn-outline">I sure do!</a>
    </div>
  </div>
)

export default Welcome
