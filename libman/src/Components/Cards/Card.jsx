import React, { useContext, useState } from 'react'
import {
    Container,
    Button,
    Col,
    Card,

} from 'react-bootstrap'
import { BsCartPlus,BsStarFill,BsStarHalf,BsStar,BsFillPlayCircleFill } from 'react-icons/bs'
import { IoWalletOutline,IoHeartOutline } from 'react-icons/io5'
import { MdPlaylistAdd } from 'react-icons/md'
// import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { IconContext } from 'react-icons'

import im from '../../Images/971.jpg'
import Login from '../Modals/Login'
import { BookContext } from '../../Context/App.context'
import { useNavigate } from 'react-router-dom'

function Cards({k,data}) {
    const navigate = useNavigate()
    const { 
        isLoggedIn,
        userLogin,
        addMovie
    } = useContext(BookContext)
    const [show, setShow] = useState(false);

    const handleClose = (id,status) => {
        setShow(false);
        addMovie(id,status)
    }
    const handleShow = () => {
        setShow(true);
        
    }

    const handleClick = (id,status) => {
        if (isLoggedIn){
            handleShow()
        }else{
            handleClose(id,status)
        }
    }

    const mdRating = data.imDbRating ? data.imDbRating : "0"
    const roundM = Math.floor(mdRating)/2
    const r = []
    for (let i = 1; i < 6; i++) {
        if (i <= roundM){
            r.push(i)
        }
        else{
            r.push(-i)
        }
    }
    

    return (
        <>
            <Col key={k} xs={12} sm={6} md={6} lg={4} xl={4} xxl={3} className="mb-3"
            >
                <Card className='w-100 border-0 card_parent text-center p-3 shadow'>
                    <Container fluid className='card_img_container'
                        onClick={()=>navigate(`/movie/${data.id}`)}
                    >
                        <Card.Img variant="top" className='card_img' src={data.image} />
                        <Button className='heart_btn shadow'>
                            <IconContext.Provider value = {{className:"heart_icon"}}>
                                <IoHeartOutline />
                            </IconContext.Provider>
                        </Button>
                        <Button className='rating_btn shadow'>
                            <p className='rating_text mb-0 fs-6'>{data.imDbRating ? data.imDbRating : "N/A"}</p>
                            {/* <IconContext.Provider value = {{className:"load_icon position-absolute"}}>
                                <AiOutlineLoading3Quarters />
                            </IconContext.Provider> */}
                        </Button>
                    </Container>
                    <Card.Body className='shadow-sm mx-4 card_body'>
                        <Card.Title className='fs-5 book_name'>{data.title}</Card.Title>
                        <Card.Title className='fs-6 book_author'>
                            {data.directors?data.directors:
                                data.crew ? data.crew.slice(0,data.crew.indexOf("(")) : ""
                            }
                        </Card.Title>
                        <Card.Text className='book_desc'>
                            {data.plot ? data.plot : `Current Rank : ${data.rank}`}
                        </Card.Text>
                        <Container fluid className='rating_book my-1'>
                            { r.map(e => {
                                if (e < 0){
                                    return(
                                        <IconContext.Provider key={e} value = {{className:"star rating_star_no_fill me-1"}}>
                                            <BsStar/> 
                                        </IconContext.Provider>
                                    )
                                }else{
                                    return(
                                        <IconContext.Provider key={e} value = {{className:"star rating_star_fill me-1"}}>
                                            <BsStarFill/> 
                                        </IconContext.Provider>
                                    )
                                }
                                })
                            }
                            {/* <IconContext.Provider value = {{className:"star rating_star_half_fill me-1"}}>
                                <BsStarHalf/> 
                            </IconContext.Provider> */}
                        </Container>
                        <Card.Text className='book_release'>
                            { data.releaseState ? `Release On : ${data.releaseState}` : `Released on : ${data.year}`}
                        </Card.Text>
                        <Container fluid className='d-flex gap-3 justify-content-center'>
                            <Button variant="danger" onClick={()=>handleClick(data.id,"watchlist")} className='cart_btn shadow-none'>
                                <IconContext.Provider value = {{className:"card_icon"}}>
                                    <MdPlaylistAdd />
                                </IconContext.Provider>
                            </Button>
                            <Button variant="dark" className='fs-6 buy_btn shadow-none d-flex justify-content-center align-items-center text-uppercase'>
                                <IconContext.Provider value = {{className:"card_icon1"}}>
                                    <BsFillPlayCircleFill/> 
                                </IconContext.Provider>
                                <p className='mb-0 buy_text'>Play It</p>
                            </Button>
                        </Container>
                    </Card.Body>
                </Card>
            </Col>
            <Login 
                show={show} 
                isLoggedIn={isLoggedIn} 
                handleShow={handleShow} 
                userLogin={userLogin} 
                handleClose={handleClose} 
            />
        </>
    )
}

export default Cards