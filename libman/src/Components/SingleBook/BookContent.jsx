import React, { useContext } from 'react'
import { useEffect } from 'react'
import { 
    Card, 
    Container, 
    Row,
    Button, 
    Col
} from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { IconContext } from 'react-icons'
import { BsStarFill,BsCartPlus,BsStarHalf,BsStar } from 'react-icons/bs'
import { IoWalletOutline,IoHeartOutline } from 'react-icons/io5'
import { BookContext } from '../../Context/App.context'

import ReviewPag from './ReviewPag'
import im from '../../Images/971.jpg'

function BookContent() {

    const currLoc = window.location.pathname.split("/").pop()

    const {
        fetchSingleMovieSearch,
        movieData,
        fetchSingleMovieDesc,
        movieDesc,
        fetchSingleMovieReviews,
        fetchSingleMovieCast,
        cast,
        fetchSingleMovieRatings,
        ratings,
        fetchSingleMoviePosters,
        posters,
        fetchSingleMovieImages,
        images,
        fetchSingleMovieVideos,
        videos
    } = useContext(BookContext)

    useEffect(()=>{
        fetchSingleMovieSearch(currLoc)
        fetchSingleMovieDesc(currLoc)
        fetchSingleMovieReviews(currLoc)
        fetchSingleMovieCast(currLoc)
        fetchSingleMovieRatings(currLoc)
        fetchSingleMoviePosters(currLoc)
        fetchSingleMovieImages(currLoc)
        fetchSingleMovieVideos(currLoc)
    },[currLoc])

  return (
    <Container className='single_book_container my-4 p-0'>
      { (movieData && movieDesc && cast && ratings && posters && images && videos)?
          <Row className='gap-1 d-flex justify-content-center align-items-center'>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="my-lg-1 shadow mx-1 ">
                  <Card className='w-100 border-0 p-xs-1 p-lg-0'>
                      <Card.Body className='d-flex flex-column flex-md-row mx-2 card_body1 p-0 py-4'>
                          <Container fluid className='d-flex justify-content-center align-items-center single_book_img_container'>
                              <Card.Img variant="top" className='single_book_img' src={movieData.image} />
                          </Container>
                          <Container fluid className='mt-4 d-flex flex-column justify-content-start align-items-start'>
                              <Container fluid className='p-0 d-flex justify-content-between'>
                                  <Container fluid className='p-0'>
                                      <Card.Title className='fs-5'>{movieData.title}</Card.Title>
                                      <Card.Title className='fs-6'></Card.Title>
                                  </Container>
                                  <Container fluid className='p-0'>
                                      <Card.Title className='fs-5 fw-bold'><sub>$</sub>57<sup>.00</sup></Card.Title>
                                  </Container>
                              </Container>
                              <Card.Text className='single_book_text'>
                                  {movieDesc}
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
                                  Released on : {movieData.description}
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
                      <Card.Body className='moviePosters'>
                          <Card.Text className='pb-2 fw-bold fs-4'>Movie Media</Card.Text>
                          <Tabs
                              defaultActiveKey="Posters"
                              id="fill-tab-example"
                              className="mb-3"
                              fill
                              >
                              <Tab eventKey="Posters" className='w-100' title="Posters">
                                  <Container fluid className='d-flex m-0 p-0 flex-row movies justify-content-start align-items-center gap-3'>
                                      {posters.map((e,id)=>{
                                          return(
                                              <Container fluid key={id} className="mainHeaderPosters m-0 p-0 ">
                                                  <Card.Img src={e.link} className="poster"  style={{aspectRatio : `${e.aspectRatio} !important`,}}/>
                                              </Container>
                                          )
                                      })}
                                  </Container>
                              </Tab>
                              <Tab eventKey="Images" title="Images">
                                  <Container fluid className='d-flex m-0 p-0 flex-row movies justify-content-start align-items-center gap-3'>
                                      {images.map((e,id)=>{
                                          return(
                                              <Container fluid key={id} className="mainHeaderPosters m-0 p-0 ">
                                                  <Card.Img src={e.image} className={`poster `} />
                                              </Container>
                                          )
                                      })}
                                  </Container>
                              </Tab>
                              <Tab eventKey="Videos" title="Videos">
                                  <Container fluid className='d-flex m-0 p-0 flex-row movies justify-content-start align-items-center gap-3'>
                                      <Container fluid key={videos.id} className="m-0 p-0 mainHeaderVideo">
                                          <iframe width="auto" height="auto"
                                              src={videos.linkEmbed} >
                                          </iframe>
                                      </Container>
                                  </Container>
                              </Tab>
                          </Tabs>
                      </Card.Body>
                  <Card.Body className='cast_head'>
                          <Card.Text className='pb-2 fw-bold fs-4'>Cast And Crew</Card.Text>
                          <Container fluid className='d-flex flex-row actors gap-4'>
                              {
                                  cast.map((e,id) => {
                                      return(
                                          <div key={e.id} className='text-center'>
                                              <Card.Img src={e.image} className="actor_image"/>
                                              <Card.Text className='mt-2 mb-0 p-0 twoLineCast'>{e.name}</Card.Text>
                                              <Card.Text className='mt-2 mb-0 p-0 twoLineCast twoLineCastSub'><span>as </span>{e.asCharacter}</Card.Text>
                                          </div>
                                      )
                                  })
                              }
                          </Container>
                      </Card.Body>
                  </Card>
                  <Card className='w-100 border-0 p-xs-1 p-lg-3'>
                      <Card.Text className='fs-4 fw-bold'>Reviews</Card.Text>
                      <ReviewPag/>
                  </Card>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="mb-4 d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
                  <Card className='w-100 border-0 shadow'>
                      <Card.Body className='mx-4'>
                          <Card.Text className='fs-5 fw-bold text-center text-uppercase about_book_header'>Ratings and Count</Card.Text>
                          {ratings.length > 0 ? 
                            ratings.map((e,id)=>{
                                return(
                                    <Container fluid key={id} className='p-0 d-flex justify-content-between'>
                                        <Card.Title className='fs-6 about_content'>Rating : {e.rating}</Card.Title>
                                        <Card.Title className='fs-6 about_content '>{e.votes} ({e.percent})</Card.Title>
                                    </Container>
                                )
                            })
                            :
                            <p>Demographic Ratings Isn't Available Right Now.</p>
                          }
                      </Card.Body>
                  </Card>
                  <Card className='w-100 border-0 shadow'>
                      <Card.Body className='mx-4'>
                          <Card.Text className='fs-5 fw-bold text-center text-uppercase about_book_header'>Plot</Card.Text>
                          <Card.Text className='single_book_text single_book_text1'>
                              {movieDesc}
                          </Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
          :
          <p>LOADING</p>
      }
    </Container>

  )
}

export default BookContent