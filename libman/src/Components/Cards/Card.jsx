import React, { useContext, useEffect, useState } from 'react'
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

function Cards({k,data,s}) {
    const navigate = useNavigate()
    const { 
        isLoggedIn,
        userLogin,
        userSignUp,
        addMovie,
        addFavMovie,
        addPlayMovie,
        deleteWatchMovie,
        deleteFavMovie,
        deletePlayMovie,
        deleteAllMovie,
        allMovies
    } = useContext(BookContext)
    const [show, setShow] = useState(false);

    const handleClose = (
        movieId,
        movieImgId,
        movieTitle,
        movieDirector,
        movieReleased,
        movieRating,
        watchlist,
        favourite,
        playing,
        bought
    ) => {
        setShow(false);
        if(!isLoggedIn){
            if(watchlist === 1){
                addMovie(
                    movieId,
                    movieImgId,
                    movieTitle,
                    movieDirector,
                    movieReleased,
                    movieRating,
                    watchlist,
                    favourite,
                    playing,
                    bought
                )
                allMovies()
            }else if(favourite === 1){
                addFavMovie(
                    movieId,
                    movieImgId,
                    movieTitle,
                    movieDirector,
                    movieReleased,
                    movieRating,
                    watchlist,
                    favourite,
                    playing,
                    bought
                )
                allMovies()
            }
            else {
                addPlayMovie(
                    movieId,
                    movieImgId,
                    movieTitle,
                    movieDirector,
                    movieReleased,
                    movieRating,
                    watchlist,
                    favourite,
                    playing,
                    bought
                )
                allMovies()
            }
        }else{
            alert('Kindly Login To Process This Request.')
        }
    }
    const handleShow = () => {
        setShow(true);
    }

    const handleClick = (
            movieId,
            movieImgId,
            movieTitle,
            movieDirector,
            movieReleased,
            movieRating,
            watchlist,
            favourite,
            playing,
            bought
        ) => {
        if (isLoggedIn){
            handleShow()
        }else{
            handleClose(
                movieId,
                movieImgId,
                movieTitle,
                movieDirector,
                movieReleased,
                movieRating,
                watchlist,
                favourite,
                playing,
                bought
            )
        }
    }

    const handleDelete = (del,data) => {
        if(del === 0){
            deleteWatchMovie(String(data))
            deleteAllMovie(String(data))
            allMovies()
        }else if(del === 1){
            deleteFavMovie(String(data))
            deleteAllMovie(String(data))
            allMovies()
        }else{
            deletePlayMovie(String(data))
            deleteAllMovie(String(data))
            allMovies()
        }
    }

    const mdRating = s === "u" ? parseInt(data.movieRating)  : data.imDbRating ? data.imDbRating : "0"
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
                    >
                        <Card.Img variant="top" className='card_img' src={s === "u" ? data.movieImgId : data.image} 
                            onClick={()=>navigate(`/movie/${data.id}`)}
                        />
                                <Button className={`heart_btn shadow ${data.favourite ? "heart_active" : ''}`}
                                    // disabled = { data.favourite && true }
                                    onClick={ data.favourite ? 
                                        () => handleDelete(1,data.uid)
                                    :
                                    ()=>handleClick(
                                        data.id,
                                        data.image,
                                        data.title,
                                        data.directors?data.directors:
                                            data.crew ? data.crew.slice(0,data.crew.indexOf("(")) : "",
                                        data.releaseState ? data.releaseState : data.year,
                                        data.imDbRating ? String(data.imDbRating) : "N/A",
                                        0,
                                        1,
                                        0,
                                        1
                                    )}
                                >
                                    <IconContext.Provider value = {{className:"heart_icon"}}>
                                        <IoHeartOutline />
                                    </IconContext.Provider>
                                </Button>
                                <Button className='rating_btn shadow'>
                                    <p className='rating_text mb-0 fs-6'>{
                                        s === "u" ? data.movieRating : 
                                        data.imDbRating ? data.imDbRating : "N/A"
                                    }</p>
                                    {/* <IconContext.Provider value = {{className:"load_icon position-absolute"}}>
                                        <AiOutlineLoading3Quarters />
                                    </IconContext.Provider> */}
                                </Button>
                    </Container>
                    <Card.Body className='shadow-sm mx-4 card_body'>
                        <Card.Title className='fs-5 book_name'>{
                            s === "u" ? data.movieTitle : 
                            data.title
                        }</Card.Title>
                        <Card.Title className='fs-6 book_author'>
                            {s === "u" ? data.movieDirector : 
                                data.directors?data.directors:
                                    data.crew ? data.crew.slice(0,data.crew.indexOf("(")) : ""
                            }
                        </Card.Title>
                        <Card.Text className='book_desc'>
                            {data.plot ? data.plot : data.rank && `Current Rank : ${data.rank}`}
                        </Card.Text>
                        <Container fluid className='rating_book my-1'>
                            { (data.imDbRating || data.movieRating ) && r.map(e => {
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
                            { s === "u" ? `Release on ${data.movieReleased}` : 
                            data.description ? `Released On : ${data.description}`:
                            data.releaseState ? `Release On : ${data.releaseState}` : `Released on : ${data.year}`}
                        </Card.Text>
                        <Container fluid className='d-flex gap-3 justify-content-center'>
                            <Button variant="danger" 
                            //disabled = { data.watchlist && true } 
                            onClick={
                                data.watchlist ? 
                                    () => handleDelete(0,data.uid)
                                :
                                ()=>handleClick(
                                    data.id,
                                    data.image,
                                    data.title,
                                    data.directors?data.directors:
                                        data.crew ? data.crew.slice(0,data.crew.indexOf("(")) : "",
                                    data.releaseState ? data.releaseState : data.year,
                                    data.imDbRating ? String(data.imDbRating) : "N/A",
                                    1,
                                    0,
                                    0,
                                    1
                                )} className='cart_btn shadow-none'>
                                <IconContext.Provider value = {{className:"card_icon"}}>
                                    <MdPlaylistAdd />
                                </IconContext.Provider>
                            </Button>
                            <Button variant="dark" 
                                //disabled = { data.playing && true } 
                                className='fs-6 buy_btn shadow-none d-flex justify-content-center align-items-center text-uppercase'
                                onClick={
                                    data.playing ? 
                                        () => handleDelete(2,data.uid)
                                    :
                                    ()=>handleClick(
                                        data.id,
                                        data.image,
                                        data.title,
                                        data.directors?data.directors:
                                            data.crew ? data.crew.slice(0,data.crew.indexOf("(")) : "",
                                        data.releaseState ? data.releaseState : data.year,
                                        data.imDbRating ? String(data.imDbRating) : "N/A",
                                        0,
                                        0,
                                        1,
                                        1
                                    )}
                            >
                                <IconContext.Provider value = {{className:"card_icon1"}}>
                                    <BsFillPlayCircleFill/> 
                                </IconContext.Provider>
                                <p className='mb-0 buy_text'>{data.playing ? "Play" : "Stop"}</p>
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
                userSignUp = {userSignUp}
            />
        </>
    )
}

export default Cards