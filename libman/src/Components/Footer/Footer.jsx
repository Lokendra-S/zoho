import React from 'react'
import { Col, Container, Form, Row, Button,Nav } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { GrNext } from 'react-icons/gr'
import { BsTwitter,BsFacebook,BsLinkedin,BsGithub } from 'react-icons/bs'

function Footer() {
  return (
    <Container fluid className='footer_container py-3'>
      <Row className='px-5 mt-3 footer_1'>
        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='product_updates py-5 px-4 rounded-2'>
          <p className='fs-4 fw-normal product_header'>Sign Up to Receive Product Updates and More</p>
          <Form>
            <Form.Group className="d-flex justify-content-center align-items-center" controlId="formBasicEmail">
              <Form.Control type="email" className='input_email shadow-none rounded-0 w-10' placeholder="youremail@email.com" />
              <Button className="input_submit shadow-none rounded-0 w-0">
                <IconContext.Provider value = {{className:"submit_icon"}}>
                  <GrNext  />
                </IconContext.Provider>
              </Button>
            </Form.Group>
          </Form>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="company ps-5 py-4 px-4 d-flex justify-content-center align-items-center gap-3">
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="office">
            <p className='fs-5 office_header'>Office</p>
            <p className='fs-6 office_desc'>3891 RanchView Street,Chennai,Tamil Nadu - 6000001</p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="contact">
            <p className='fs-5 contact_header'>Contact</p>
            <p className='fs-6 contact_desc'>+91 95xx-xxx-x01<br/>slokendra2102@gmail.com<br/>slokendra2102@outlook.com</p>
          </Col>
        </Col>
      </Row>
      <Row className='px-5 mt-3 bottom_nav_container'>
        <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className='copyright my-auto'>
          <p className='fs-6 fs-normal mb-0'>2022. All Rights Reserved @ Lokendra_S</p>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="botton_nav d-flex justify-content-center my-auto gap-2">
          <Nav.Item className='text-uppercase text-dark'>
            <Nav.Link href="#home" className='text-dark'>home</Nav.Link>
          </Nav.Item>
          <Nav.Item className='text-uppercase text-dark'>
            <Nav.Link eventKey="#wishlist" className='text-dark'>wishlist</Nav.Link>
          </Nav.Item>
          <Nav.Item className='text-uppercase text-dark'>
            <Nav.Link eventKey="#f" className='text-dark'>favourites</Nav.Link>
          </Nav.Item>
          <Nav.Item className='text-uppercase text-dark'>
            <Nav.Link eventKey="#c" className='text-dark'>Cart</Nav.Link>
          </Nav.Item>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="social_icon d-flex justify-content-center">
          <Button className="twitter_icon shadow-none rounded-0 w-0 bg-transparent text-dark border border-0 fs-5">
            <IconContext.Provider value = {{className:"twitter"}}>
              <BsTwitter  />
            </IconContext.Provider>
          </Button>
          <Button className="facebook_icon shadow-none rounded-0 w-0 bg-transparent text-dark border border-0 fs-5">
            <IconContext.Provider value = {{className:"facebook"}}>
              <BsFacebook  />
            </IconContext.Provider>
          </Button>
          <Button className="linkedin_icon shadow-none rounded-0 w-0 bg-transparent text-dark border border-0 fs-5">
            <IconContext.Provider value = {{className:"linkedin"}}>
              <BsLinkedin  />
            </IconContext.Provider>
          </Button>
          <Button className="github_icon shadow-none rounded-0 w-0 bg-transparent text-dark border border-0 fs-5">
            <IconContext.Provider value = {{className:"github"}}>
              <BsGithub  />
            </IconContext.Provider>
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer