import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { IconContext } from 'react-icons'
import { GrNext, GrPrevious } from 'react-icons/gr'

import { useContext } from 'react'
import { BookContext } from '../../Context/App.context'
import Cards from './Card'
import { Container, Row, Spinner } from 'react-bootstrap'

function Pagination({loc}) {

    const { movies,userMovies,popularPages,searchData } = useContext(BookContext)

    const [ pageNumber, setPageNumber ] = useState(0)
    const [ text, setText ] = useState("")

    useEffect(()=>{
        setPageNumber(0)
    },[loc])
    const userPerPage = 24
    const pagesVisited = pageNumber * userPerPage
    
    const renderer = loc === "/profile" ? userMovies : loc.pathname==="/search/s" ? searchData : movies

    const displayUsers = renderer
    .slice(pagesVisited, pagesVisited+userPerPage)
    .map((e,id) => {
        return( 
            <Cards 
                k={e.id} 
                data={e}
                s = { loc === "/profile" ? "u" : "m" }
            />
        )
    })

    const pageCount = Math.ceil(popularPages/userPerPage)
    const changePage = ({ selected=0 }) => {
        setPageNumber(selected)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
          if(renderer.length === 0){
            setText("Query returns as empty.")
          }
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

  return (
    <>
    { renderer.length > 0 ?   
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
        :
        <Container fluid className='text-center my-5' >
            {text ?
                <p className='fs-5 fw-bold'>{text}</p>
                : 
                <Spinner animation='grow' size='lg'/>
            }
        </Container>
    }
    </>
  )
}

export default Pagination