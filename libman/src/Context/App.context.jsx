import React,{ useState,useEffect,createContext } from 'react'

export const BookContext = createContext()

export const AppContext = ({children}) => {
  return (
    <BookContext.Provider value={{
      isLoggedIn : true
    }}>
        {children}
    </BookContext.Provider>
  )
}
