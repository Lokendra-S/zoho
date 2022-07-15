import React from 'react'
import {
    Container,
    Dropdown,
    Row,

} from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'

import Cards from './Card'
import Pagination from './Pagination'


function HomeCard({width}) {
  return (
    <Container fluid className='mt-2'>
        <Container fluid className='px-5 d-flex align-items-center justify-content-between book_head'>
            <h1 className='fs-3 fw-bold text-center text-uppercase book_headline'>books</h1>
            <Dropdown>
                <Dropdown.Toggle variant="dark" className='shadow-none' id="dropdown-basic">
                    Sort By
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item className='d-flex justify-content-between align-items-center'>
                        Price
                        <IconContext.Provider value = {{className:"down_arrow_icon ms-1 my-auto"}}>
                            <BsArrowDown /> 
                        </IconContext.Provider>
                    </Dropdown.Item>
                    <Dropdown.Item className='d-flex justify-content-between align-items-center'>
                        Price
                        <IconContext.Provider value = {{className:"down_arrow_icon ms-1 my-auto"}}>
                            <BsArrowUp /> 
                        </IconContext.Provider>
                    </Dropdown.Item>
                    <Dropdown.Item className='d-flex justify-content-between align-items-center'>
                        Rating
                        <IconContext.Provider value = {{className:"down_arrow_icon ms-1 my-auto"}}>
                            <BsArrowUp /> 
                        </IconContext.Provider>
                    </Dropdown.Item>
                    <Dropdown.Item className='d-flex justify-content-between align-items-center'>
                        Rating
                        <IconContext.Provider value = {{className:"down_arrow_icon ms-1 my-auto"}}>
                            <BsArrowUp /> 
                        </IconContext.Provider>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Container>
        <Container fluid className='mt-3 px-4'>
            <Row>
                {[1,2,3,4,5,6].map(e =>{
                    return <Cards k={e}/>
                })}
            </Row>
        </Container>
        <Pagination/>
    </Container>
  )
}

export default HomeCard