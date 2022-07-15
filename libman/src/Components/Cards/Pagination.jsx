import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { IconContext } from 'react-icons'
import { GrNext, GrPrevious } from 'react-icons/gr'

import json_data from '../Pagination/MOCK_DATA.json'

function Pagination() {
    const [ users,setUsers ] = useState(json_data.slice(0,351))
    const [ page,setPage ] = useState(0)

    const usersPerPage = 20
    const currPage = usersPerPage * page
    const displayUsers = () =>{
        console.log(users.slice(currPage,currPage+usersPerPage))
    } 
    
    const pageCount = Math.ceil(users.length/usersPerPage)
    const changePage = ({ selected }) => {
        setPage(selected)
    }

  return (
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
        />
    </div>
  )
}

export default Pagination