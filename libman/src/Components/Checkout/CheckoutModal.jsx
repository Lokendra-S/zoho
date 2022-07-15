import React,{ useState } from 'react'
import {
    Button,
    Container,
    Modal,
    Form,
    Row,
    Col,
    Accordion,
    Card
} from 'react-bootstrap'
import { IconContext } from 'react-icons';
import {IoLogoPaypal} from  'react-icons/io5'
import {RiMastercardFill} from 'react-icons/ri'
import {SiPaytm} from 'react-icons/si'

function CheckoutModal({handleShow,handleClose,show}) {
  return (
    <>
        <Modal show={show} onHide={handleClose} 
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered        
            backdrop="static"
            keyboard={false}
            className="w-100"
        >
            <Modal.Header closeButton className='px-5 shadow-none'>
                <Modal.Title className='fs-3 fw-bold'>eLib</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container fluid className=''>
                    <Row className='d-flex flex-column flex-column-reverse flex-lg-row '>
                        <Col className='address_check_container'>
                            <p className='ps-2 fs-5 mb-0 fw-bold'>Check out</p>
                            <p className='ps-2 fs-6 fw-normal mt-1 text-decoration-underline back_to_bag'>Back to my bag</p>
                            <Accordion defaultActiveKey="0" flush alwaysOpen
                                className='shadow-none'
                            >
                                <Accordion.Item eventKey="0"
                                >
                                    <Accordion.Header>Delivery Address</Accordion.Header>
                                    <Accordion.Body>
                                        <Form className='w-100'>
                                            <Form.Group className="mb-3" controlId="">
                                                <Form.Label>Enter Address</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    placeholder="Leave a comment here"
                                                    style={{ height: '8rem' }}
                                                />
                                            </Form.Group>

                                            <div className="mb-3">
                                                <Form.Check
                                                    inline
                                                    label="Home"
                                                    name="group1"
                                                    type={'radio'}
                                                    id={`inline-radio-1`}
                                                    checked
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Office"
                                                    name="group1"
                                                    type={'radio'}
                                                    id={`inline-radio-2`}
                                                />
                                            </div>
                                            <Form.Group className="mb-3" controlId="">
                                                <Form.Check type="checkbox"className='shadow-none' label="Add to My Addresses" />
                                            </Form.Group>
                                            <Form.Check
                                                inline
                                                label="Pay on Delivery"
                                                name="group1"
                                                type={'radio'}
                                                id={`inline-radio-1`}
                                            />
                                        </Form>
                                        <Container fluid className='p-0'>
                                            <Accordion flush>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Select Address</Accordion.Header>
                                                    <Accordion.Body>
                                                        <Row className="gap-2">
                                                            <Col xs={12} sm={12} md={6} lg={12} xl={12} xxl={12} className='p-3 address_container'>
                                                                <Form.Check
                                                                    inline
                                                                    label="076 Morar Mountain, Apt. 753, 52617, North Raven, New Jersey, United States"
                                                                    name="group1"
                                                                    type={'radio'}
                                                                    id={`inline-radio-1`}
                                                                    checked
                                                                />
                                                            </Col>
                                                            <Col xs={12} sm={12} md={6} lg={12} xl={12} xxl={12} className='p-3 address_container'>
                                                                <Form.Check
                                                                    inline
                                                                    label="076 Morar Mountain, Apt. 753, 52617, North Raven, New Jersey, United States"
                                                                    name="group1"
                                                                    type={'radio'}
                                                                    id={`inline-radio-2`}
                                                                    checked
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </Container>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1"
                                >
                                    <Accordion.Header>Payment Details</Accordion.Header>
                                    <Accordion.Body>
                                        <p className='payment_header fs-5 fw-bold'>Payment Information</p>
                                        <Container fluid className='p-0 ms-0 d-flex justify-content-start w-50 gap-3'>
                                            <Container fluid className='rounded p-2 d-flex justify-content-center align-items-center border border-dark'>
                                                <IconContext.Provider value = {{className:"paypal_icon fs-5"}}>
                                                    <IoLogoPaypal />
                                                </IconContext.Provider>
                                            </Container>
                                            <Container fluid className='rounded p-2 d-flex justify-content-center align-items-center border border-dark'>
                                                <IconContext.Provider value = {{className:"mastercard_icon fs-5"}}>
                                                    <RiMastercardFill />
                                                </IconContext.Provider>
                                            </Container>
                                            <Container fluid className='rounded p-2 d-flex justify-content-center align-items-center border border-dark'>
                                                <IconContext.Provider value = {{className:"paytm_icon fs-5"}}>
                                                    <SiPaytm />
                                                </IconContext.Provider>
                                            </Container>
                                        </Container>
                                        <Container fluid className='p-0 mt-4'>
                                            <Form className='w-100'>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label className='fs-6'>Name on card</Form.Label>
                                                    <Form.Control 
                                                        type="text" 
                                                        className='shadow-none fs-6' 
                                                        placeholder="Enter name on card"
                                                        value={''}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label className='fs-6'>Card number</Form.Label>
                                                    <Form.Control 
                                                        type="text" 
                                                        className='shadow-none fs-6' 
                                                        placeholder="Enter card number"
                                                        value={''}
                                                    />
                                                </Form.Group>
                                                <Container fluid className='p-0 d-flex gap-4'>
                                                    <Form.Group className="mb-3" controlId="">
                                                        <Form.Label className=''>Expire date</Form.Label>
                                                        <Form.Control 
                                                            type="number" 
                                                            className='shadow-none' 
                                                            placeholder="exp. date" 
                                                            value={''}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="">
                                                        <Form.Label className=''>Enter cvv</Form.Label>
                                                        <Form.Control 
                                                            type="password" 
                                                            className='shadow-none' 
                                                            placeholder="cvv" 
                                                            value={''}
                                                        />
                                                    </Form.Group>
                                                </Container>
                                            </Form>
                                        </Container>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                        <Col>
                            <Row className='d-flex gapy-4 p-4 jusitfy-content-between align-items-center cart_summary_container'>
                                <Col sm={12} md={12} lg={12} xl={12} xxl={12} className="my-auto">
                                    <Card className='w-100 bg-transparent p-0 border-0 mt-4'>
                                    <Card.Body className='p-0'>
                                        <Container fluid className='p-0 pb-1 d-flex justify-content-between'>
                                            <Card.Text className='mb-0'>
                                                Total Items
                                            </Card.Text>
                                            <Card.Text className='mb-0'>
                                                5
                                            </Card.Text>
                                        </Container>
                                        <Container fluid className='p-0 pb-1 d-flex justify-content-between'>
                                            <Card.Text className='mb-0'>
                                                Total Items
                                            </Card.Text>
                                            <Card.Text className='mb-0'>
                                                $ 540.00
                                            </Card.Text>
                                        </Container>
                                        <Container fluid className='p-0 pb-1 d-flex justify-content-between'>
                                            <Card.Text className='mb-0'>
                                                Shipping Charges
                                            </Card.Text>
                                            <Card.Text className='mb-0'>
                                                $ 40.00
                                            </Card.Text>
                                        </Container>
                                        <Container fluid className='p-0 pb-1 d-flex justify-content-between'>
                                            <Card.Text className='mb-0'>
                                                Sub Total
                                            </Card.Text>
                                            <Card.Text className='mb-0'>
                                                $ 580.00
                                            </Card.Text>
                                        </Container>
                                    </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={12} lg={12} xl={12} xxl={12} className="pt-5 mt-xxl-5 my-auto">
                                    <Card className='w-100 bg-transparent fw-bold fs-5 p-0 border-0 mt-4'>
                                    <Card.Body className='p-0'>
                                        <Container fluid className='p-0 d-flex justify-content-between'>
                                        <Card.Text className='mb-0'>
                                            Estimated Total
                                        </Card.Text>
                                        <Card.Text className='mb-0'>
                                            $ 580.00
                                        </Card.Text>
                                        </Container>
                                        <Button 
                                        className='buy_now_cart_btn w-100 mt-3 py-2 bg-dark text-light shadow-none'
                                        >Checkout</Button>
                                    </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <br/>
        </Modal>
    </>
  )
}

export default CheckoutModal