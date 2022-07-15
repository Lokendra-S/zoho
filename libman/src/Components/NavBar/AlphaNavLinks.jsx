import React from 'react'
import {
    Container,
} from 'react-bootstrap'

function AlphaNavLinks() {
  return (
    <Container className='alphabet_container d-flex justify-content-center mt-4 text-center'>
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(e => {
            return (
                <p key={e} className={`${e === 'A' ? 'activeAplha' : '' } alphabets pe-2 fs-5`}>{e}</p>
            )
        })}
    </Container>
  )
}

export default AlphaNavLinks