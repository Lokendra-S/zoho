import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import {
    Container,
    Dropdown,
    Row,

} from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'
import { AppContext, BookContext } from '../../Context/App.context'

import Cards from './Card'
import Pagination from './Pagination'


function HomeCard({width}) {
    const location = useLocation();
    const loc = location.pathname;
    const { ChangeCurrPage,fetchTopRatedMovies,fetchPopularMovies,fetchNowPlayingMovies
        ,fetchUpcomingMovies } = useContext(BookContext)

    useEffect(()=>{
        if(loc==="/toprated"){
            fetchTopRatedMovies()
        }else if(loc==="/upcoming"){
            fetchUpcomingMovies()
        }
        else if(loc==="/nowplaying"){
            fetchNowPlayingMovies()
        }else{
            fetchPopularMovies()
        }
    },[loc])

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
        <Pagination loc={loc} />
    </Container>
  )
}

export default HomeCard