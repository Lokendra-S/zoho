import React from 'react'
import { Modal, Button, Row, Col, Card, Container } from 'react-bootstrap'

import im from "../../Images/971.jpg"

function MovieModal({
  show,
  handleClose,
  userMoviesind
}) {
  return (
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        fullscreen
      >
        <Modal.Header closeButton>
          <Modal.Title>Movies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {
              userMoviesind.map((e,id)=>{
                return(
                  <Col key={id} xs={12} sm={6} md={6} lg={4} xl={4} xxl={3} className="mb-3">
                    <Card className='w-100 border-0 card_parent p-0 shadow'
                    >
                      <Container fluid className='imageContainer p-0'>
                        <Card.Img variant='top' className='image' loading='lazy' src={e.movieImgId}/>
                        <Button className='shadow ratingText'>
                            <Card.Title className='fw-normal p-0 m-0'>{e.movieRating}</Card.Title>
                        </Button>
                      </Container>
                      <Card.Body className='videoDesc d-flex justify-content-between align-items-baseline'>
                        <Container fluid className="mainHeader p-0">
                            <Card.Title className='p-0 m-0 fs-6' >{e.movieTitle}</Card.Title>
                            <Card.Text className = "mvDir">{e.movieDirector}</Card.Text>
                        </Container>
                        <Card.Text className='p-0 m-0 border-0 rounded videoLen text-wrap'>{e.movieReleased}</Card.Text>
                      </Card.Body>
                      <Card.Body className="p-0">
                        <Card.Header className='d-flex justify-content-between align-items-center'>
                          <p className='mb-0'>Category</p>
                          <Container fluid className='d-flex justify-content-end align-items-center'>
                            {
                              e.watchlist === 1 ?
                              <p className='mb-0 py-1 px-2 text-light bg-dark border rounded'>W</p>:null
                            }
                            {
                              e.favourite === 1 ?
                              <p className='mb-0 py-1 px-2 text-light bg-danger border rounded'>F</p>:null
                            }
                            {
                              e.playing === 1 ?
                              <p className='mb-0 py-1 px-2 text-light bg-success border rounded'>P</p>:null
                            }
                          </Container>
                        </Card.Header>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })
            }
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default MovieModal