import React, { useContext, useEffect, useRef, useState } from 'react'
import { Container, Card, Row, Col, ListGroup } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import { BookContext } from '../../Context/App.context';
import MovieModal from './MovieModal';

function AdminHome() {
  const { 
    allUsers,
    users,
    userMoviesInd,
    UserMoviesind,
    deleteUserDb
  } = useContext(BookContext)
  const [show, setShow] = useState(false);

  const curr = useRef()
  const loc = useLocation().pathname

  useEffect(()=>{
    allUsers()
  },[loc === "/admin"])

  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    UserMoviesind(data)
    setShow(true);
  }
  return (
    <Container fluid className='my-2 px-5 '>
        <p className='fs-4 fw-bold'>Users</p>
      <Container fluid className=''>
        <Row>
            { users.map((e,id)=>{
              return(
                <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={3} className="mb-3">
                  <Card style={{ width: '100%' }}>
                    <Card.Header>Role : {e.roles[0].name}</Card.Header>
                    <Card.Body>
                      <Card.Title>Username : {e.username}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Email : {e.email}</Card.Subtitle>
                    </Card.Body>
                    {/* <ListGroup className="list-group-flush">
                      <Card.Header className='d-flex justify-content-between align-items-center'
                        onClick={() => {UserMoviesLength(e.username)}}
                      >
                        <p className='mb-0'>Total Movies</p>
                        <p className='mb-0'>{userhMovieLength[id]}</p>
                      </Card.Header> */}
                      {/* <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                        <p className='mb-0'>Watchlist</p>
                        <p className='mb-0'>{userhMovieLength[id][1]}</p>
                      </ListGroup.Item>
                      <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                        <p className='mb-0'>Favourite</p>
                        <p className='mb-0'>{userhMovieLength[id][2]}</p>
                      </ListGroup.Item>
                      <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                        <p className='mb-0'>Playing</p>
                        <p className='mb-0'>{userhMovieLength[id][3]}</p>
                      </ListGroup.Item> */}
                    {/* </ListGroup> */}
                    <Card.Footer className='d-flex justify-content-evenly align-items-center'>
                      <Card.Link href="#" className='gotoMovies text-dark'
                        onClick={() => {handleShow(e.username)}}
                      >Goto Movies</Card.Link>
                      <Card.Link href="#" className='deleteUser text-danger'
                        onClick={() => deleteUserDb(e.username)}
                      >Delete User</Card.Link>
                    </Card.Footer>
                  </Card>
                </Col>
              )
            })}
        </Row>
        <MovieModal show={show} handleClose={handleClose} userMoviesind={userMoviesInd} />
      </Container>
    </Container>
  )
}

export default AdminHome