import React from 'react'
import {
    Container,
    FormControl,
    Col,
    Row,
    Dropdown,
    InputGroup,
    Nav,

} from 'react-bootstrap'
import { FiSearch,FiBook,FiShoppingCart,FiHeart } from 'react-icons/fi'
import { IconContext } from 'react-icons'
import { MdLogout } from 'react-icons/md'
import { BiEditAlt } from 'react-icons/bi'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'


function NavHead({
        width,
        userLogOut
    }) {

  return (
    <Container fluid className='px-5 mb-3 mt-4 header_container'>
        <Row className='py-2'>
            <Col xs={6} sm={6} md={2} lg={3}>
                <h1 className='fs-1 fw-bold app_name mb-0'>iMoviez</h1>
            </Col>
            <Col xs={6} sm={6} md={8} lg={6} className="searchScreen d-flex justify-content-center align-items-center">
                <InputGroup className="w-75 searchScreen_input">
                    <InputGroup.Text id="search_icon bg-transparent"><FiSearch/></InputGroup.Text>
                    <FormControl
                        placeholder={`Enter Book Name`}
                        aria-label=""
                        aria-describedby="book_name"
                        type='search'
                        className="shadow-none"
                    />
                    <InputGroup.Text id="book_name">Search</InputGroup.Text>
                </InputGroup>
            </Col>
            <Col  xs={6} sm={6} md={2} lg={3} className="d-flex justify-content-center align-items-center">
                <Container fluid  className='d-flex justify-content-end align-items-end'>
                    <Nav>
                        <Dropdown
                            drop='bottom'
                        >
                            <Dropdown.Toggle className='d-flex justify-content-center align-items-center userName shadow-none' id="dropdown-basic">
                                <p className='mb-0 userName_p'>{width}</p>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item className='d-flex justify-content-start align-items-center'>
                                    <IconContext.Provider value = {{className:"edit_icon fs-6 me-2 my-auto"}}>
                                        <BiEditAlt /> 
                                    </IconContext.Provider>
                                    Edit Profile
                                </Dropdown.Item>
                                {/* <Dropdown.Item className='d-flex justify-content-start align-items-center'>
                                    <IconContext.Provider value = {{className:"book_icon me-2 my-auto"}}>
                                        <FiBook /> 
                                    </IconContext.Provider>
                                    Become Author
                                </Dropdown.Item> */}
                                <Dropdown.Item className='d-flex justify-content-start align-items-center'>
                                    <NavLink className='text-uppercase px-3 nav-link nav-link-drop' to='/:id/cart'>
                                        <IconContext.Provider value = {{className:"cart_icon me-2 my-auto"}}>
                                            <FiShoppingCart /> 
                                        </IconContext.Provider>
                                        Cart
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='d-flex justify-content-start align-items-center'>
                                    <NavLink className='text-uppercase px-3 nav-link nav-link-drop' to='/:id/wishlist'>
                                        <IconContext.Provider value = {{className:"wishlist_icon me-2 my-auto"}}>
                                            <AiOutlineAppstoreAdd /> 
                                        </IconContext.Provider>
                                        Wishlist
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='d-flex justify-content-start align-items-center'>
                                    <NavLink className='text-uppercase px-3 nav-link nav-link-drop' to="/:id/favourite">
                                        <IconContext.Provider value = {{className:"favourites_icon me-2 my-auto"}}>
                                            <FiHeart /> 
                                        </IconContext.Provider>
                                        Favourites
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='mt-2 px-3 d-flex justify-content-start align-items-center text-center text-uppercase w-100 logout_btn'
                                    onClick={() => userLogOut()}
                                >
                                    <IconContext.Provider value = {{className:"log_out_icon me-2 my-auto"}}>
                                        <MdLogout /> 
                                    </IconContext.Provider>
                                    Log out
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Container>
            </Col>
            <Col xs={12} className="searchScreen_small d-none d-flex justify-content-center align-items-center">
                <InputGroup className="w-100">
                    <InputGroup.Text id="search_icon bg-transparent"><FiSearch/></InputGroup.Text>
                    <FormControl
                        placeholder={`Enter Book Name`}
                        aria-label=""
                        aria-describedby="book_name"
                        type='search'
                        className="shadow-none"
                    />
                    <InputGroup.Text id="book_name">Search</InputGroup.Text>
                </InputGroup>
            </Col>
        </Row>
    </Container> 
  )
}

export default NavHead