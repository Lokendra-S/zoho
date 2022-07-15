import React from 'react'
import { 
    Card, 
    Container, 
    Row,
    Button, 
    Col
} from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { BsStarFill,BsCartPlus,BsStarHalf,BsStar } from 'react-icons/bs'
import { IoWalletOutline,IoHeartOutline } from 'react-icons/io5'

import im from '../../Images/971.jpg'

function BookContent() {
  return (
    <Container className='single_book_container my-4p-0'>
        <Row className='gap-3 d-flex justify-content-center align-items-center'>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="my-lg-4 shadow mx-3 ">
                <Card className='w-100 border-0 p-xs-1 p-lg-3'>
                    <Card.Body className='d-flex flex-column flex-md-row mx-4 card_body1 p-0 py-4'>
                        <Container fluid className='d-flex justify-content-center align-items-center single_book_img_container'>
                            <Card.Img variant="top" className='single_book_img' src={im} />
                        </Container>
                        <Container fluid className='mt-4 d-flex flex-column justify-content-start align-items-start'>
                            <Container fluid className='p-0 d-flex justify-content-between'>
                                <Container fluid className='p-0'>
                                    <Card.Title className='fs-5'>Book Name</Card.Title>
                                    <Card.Title className='fs-6'>Book Author</Card.Title>
                                </Container>
                                <Container fluid className='p-0'>
                                    <Card.Title className='fs-5 fw-bold'><sub>$</sub>57<sup>.00</sup></Card.Title>
                                </Container>
                            </Container>
                            <Card.Text className='single_book_text'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content
                            </Card.Text>
                            <Container fluid className='rating_book text-start p-0 my-1'>
                                { [1,2,3].map(e => {
                                    return(
                                        <IconContext.Provider key={e} value = {{className:"star rating_star_fill me-1"}}>
                                            <BsStarFill/> 
                                        </IconContext.Provider>
                                    )
                                    })
                                }
                                <IconContext.Provider value = {{className:"star rating_star_half_fill me-1"}}>
                                    <BsStarHalf/> 
                                </IconContext.Provider>
                                <IconContext.Provider value = {{className:"star rating_star_no_fill me-1"}}>
                                    <BsStar/> 
                                </IconContext.Provider>
                            </Container>
                            <Card.Text className=''>
                                Published on : 22-10-2002
                            </Card.Text>
                            <Container fluid className='d-flex gap-3 justify-content-start p-0'>
                                <Button variant="danger" className='cart_btn shadow-none'>
                                    <IconContext.Provider value = {{className:"cart_icon fs-4"}}>
                                        <BsCartPlus />
                                    </IconContext.Provider>
                                </Button>
                                <Button variant="dark" className='fs-6 buy_btn shadow-none d-flex justify-content-center align-items-center text-uppercase'>
                                    <IconContext.Provider value = {{className:"cart_icon1 fs-4 me-2"}}>
                                        <IoWalletOutline/> 
                                    </IconContext.Provider>
                                    <p className='mb-0 buy_text'>buy now</p>
                                </Button>
                            </Container>
                        </Container>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="mb-4 d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
                <Card className='w-100 border-0 shadow'>
                    <Card.Body className='mx-4'>
                        <Card.Text className='fs-5 fw-bold text-center text-uppercase about_book_header'>About the book</Card.Text>
                        <Container fluid className='p-0 d-flex justify-content-between'>
                            <Card.Title className='fs-6 about_content'>Author</Card.Title>
                            <Card.Title className='fs-6 about_content '>LOKENDRA_S</Card.Title>
                        </Container>
                        <Container fluid className='p-0 d-flex justify-content-between'>
                            <Card.Title className='fs-6 about_content'>Language</Card.Title>
                            <Card.Title className='fs-6 about_content'>English</Card.Title>
                        </Container>
                        <Container fluid className='p-0 d-flex justify-content-between'>
                            <Card.Title className='fs-6 about_content'>Published On</Card.Title>
                            <Card.Title className='fs-6 about_content'>22-10-2002</Card.Title>
                        </Container>
                        <Container fluid className='p-0 d-flex justify-content-between'>
                            <Card.Title className='fs-6 about_content'>Rating</Card.Title>
                            <Card.Title className='fs-6 about_content'>9.5/10</Card.Title>
                        </Container>
                        <Container fluid className='p-0 d-flex justify-content-between'>
                            <Card.Title className='fs-6 about_content'>No. Of Pages</Card.Title>
                            <Card.Title className='fs-6 about_content'>584</Card.Title>
                        </Container>
                    </Card.Body>
                </Card>
                <Card className='w-100 border-0 shadow'>
                    <Card.Body className='mx-4'>
                        <Card.Text className='fs-5 fw-bold text-center text-uppercase about_author_header'>About the author</Card.Text>
                        <Card.Title className='fs-5'>Author</Card.Title>
                        <Card.Title className='fs-6 about_content about_author_content'>
                        Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content
                        </Card.Title>
                        <Container fluid className='p-0 d-flex justify-content-between mt-3'>
                            <Card.Title className='fs-6 text-capitalize about_content'>Number of books</Card.Title>
                            <Card.Title className='fs-6 about_content '>354</Card.Title>
                        </Container>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>

  )
}

export default BookContent