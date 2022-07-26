import React, { useContext } from 'react'
import { BookContext } from '../../Context/App.context'
import AlphaNavLinks from './AlphaNavLinks'
import NavHead from './NavHead'
import NavLinks from './NavLinks'

function Header({width}) {
  const { 
    userLogOut
  } = useContext(BookContext)
  return (
    <>
        <NavHead 
          width={width} 
          userLogOut={userLogOut} 
        />
        <NavLinks/>
        <AlphaNavLinks/>
    </>
  )
}

export default Header