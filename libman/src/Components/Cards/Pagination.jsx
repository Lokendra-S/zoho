import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { IconContext } from 'react-icons'
import { GrNext, GrPrevious } from 'react-icons/gr'

import json_data from '../Pagination/MOCK_DATA.json'
import { useContext } from 'react'
import { BookContext } from '../../Context/App.context'
import Cards from './Card'
import { Container, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

function Pagination(loc) {

    const { movies,popularPages,ChangeCurrPage,addMovie } = useContext(BookContext)
    
    const [ users, setUsers ] = useState(popularPages)
    const [ pageNumber, setPageNumber ] = useState(0)
    
    useEffect(()=>{
        setPageNumber(0)
    },[loc])
    const userPerPage = 24
    const pagesVisited = pageNumber * userPerPage

    const displayUsers = movies
    .slice(pagesVisited, pagesVisited+userPerPage)
    .map((e) => {
        return( 
        <Cards 
            k={e.id} 
            data={e} 
            addMovie={addMovie}
        />)
    })

    const pageCount = Math.ceil(popularPages/userPerPage)
    const changePage = ({ selected=0 }) => {
        setPageNumber(selected)
    }

  return (
    <>
    <Container fluid className='mt-3 px-4'>
        <Row>
            {displayUsers}
        </Row>  
    </Container>
    <div className='p-0 d-flex justify-content-center align-items-center'>
        <ReactPaginate
            previousLabel = {
                <IconContext.Provider value = {{className:"prev_icon me-1 text-center"}}>
                    <GrPrevious /> 
                    <p className='mb-0'>Prev</p>
                </IconContext.Provider>
            }
            nextLabel = {
                <IconContext.Provider value = {{className:"next_icon ms-1 text-center"}}>
                    <p className='mb-0'>Next</p> <GrNext  />
                </IconContext.Provider>
            }
            pageCount = { pageCount }
            breakLabel='. . .'
            pageRangeDisplayed={2}
            onPageChange = {changePage}
            containerClassName = {"paginationButtons col-12 my-4 d-flex flex-wrap justify-content-center align-items-center"}
            previousLinkClassName = {"previousBtn d-flex justify-content-center align-items-center px-3 py-2"}
            nextLinkClassName = {"nextBtn d-flex justify-content-center align-items-center px-3 py-2"}
            disabledClassName = {"paginationDisabled"}
            activeClassName = {"paginationActive"}
            forcePage = {pageNumber&&pageNumber}
        />
    </div>
    </>
  )
}

export default Pagination