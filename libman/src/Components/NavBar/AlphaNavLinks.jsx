import React from 'react'
import { useState } from 'react'
import {
    Container,
} from 'react-bootstrap'

function AlphaNavLinks() {

  const [ Active,IsActive ] = useState("")

  const ToggleClass = (e) => {
    IsActive(e)
  }

  return (
    <Container className='alphabet_container d-flex justify-content-center mt-4 text-center'>
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(e => {
            return (
                <p key={e} className={`${Active === e ? "activeAplha":""} alphabets pe-2 fs-5`} 
                  onClick={(i) => ToggleClass(e)}
                >{e}</p>
            )
        })}
    </Container>
  )
}
//{`${e === 'A' ? 'activeAplha' : '' }
export default AlphaNavLinks