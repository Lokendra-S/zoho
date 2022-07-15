import React from 'react'
import AlphaNavLinks from './AlphaNavLinks'
import NavHead from './NavHead'
import NavLinks from './NavLinks'

function Header({width}) {
  return (
    <>
        <NavHead width={width}/>
        <NavLinks/>
        <AlphaNavLinks/>
    </>
  )
}

export default Header