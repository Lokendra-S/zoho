import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { BookContext } from '../../Context/App.context'
import {
    Container,
} from 'react-bootstrap'

import Pagination from './Pagination'

function Sample() {
  const [search] = useSearchParams()
  const loc = useLocation()
  
  const navigate = useNavigate()
  const { fetchMovieSearch,setSearchData } = useContext(BookContext)
  
  useEffect(() => {
    if(search.get("name")){
      fetchMovieSearch(search.get("name"))
    }else{
      navigate("/")
    }
  },[search.get("name")])

  return (
    <>
      <Container fluid className='mt-2'>
        <Container fluid className='px-5 d-flex align-items-center justify-content-between book_head'>
          <h1 className='fs-3 fw-bold text-center text-uppercase book_headline'>Movies</h1>
        </Container>
        <Pagination loc={loc} />
      </Container>
    </>
  )
}

export default Sample