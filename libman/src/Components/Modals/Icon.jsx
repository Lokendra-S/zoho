import React from 'react'
import {
    Container,
} from 'react-bootstrap'
import { AiFillGoogleCircle,AiFillFacebook,AiFillLinkedin } from 'react-icons/ai'
import { IconContext } from 'react-icons'

function Icon() {
  return (
    <Container fluid className='d-flex gap-2 justify-content-center mt-2'>
        <IconContext.Provider value = {{className:"facebook_icon fs-1"}}>
            <AiFillFacebook />
        </IconContext.Provider>
        <IconContext.Provider value = {{className:"google_icon fs-1"}}>
            <AiFillGoogleCircle />
        </IconContext.Provider>
        <IconContext.Provider value = {{className:"linkedin_icon fs-1"}}>
            <AiFillLinkedin />
        </IconContext.Provider>
    </Container>
  )
}

export default Icon