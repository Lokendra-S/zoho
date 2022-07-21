import React from 'react'

import { 
    Card, 
    Container, 
    Row,
    Button, 
    Col
} from 'react-bootstrap'

import im from '../../Images/971.jpg'

function Reviews({e,id}) {
  return (
    <>
        <Card.Body key={id} className='p-2 m-2 shadow-sm'>
            <Card.Body className='p-2'>
                <Card.Title className='d-flex flex-row p-0'>
                    <Card.Img src={im} className="review_user" />
                    <Container fluid className='p-0 ms-2 gap-1 d-flex flex-column justify-content-center'>
                        <Card.Text className="p-0 m-0">{e.username}</Card.Text>
                        <Card.Text className="p-0 m-0 fs-6 opLow">reviewed on : {e.date}</Card.Text>
                        <Card.Text className="p-0 m-0 fs-6 opLow">rating : {e.rate}</Card.Text>
                    </Container>
                </Card.Title>
                <Card.Text className='p-0 fw-normal opHigh'>
                    {e.title}    
                </Card.Text>
                <Card.Text className='p-0 fw-lighter review_text'>
                    {e.content}    
                </Card.Text>
            </Card.Body>
        </Card.Body>
    </>
  )
}

export default Reviews