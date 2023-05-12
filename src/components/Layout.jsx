import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import GoBackBtn from './GoBackBtn'
import { useLocation } from 'react-router-dom'


function Layout() {
  const location = useLocation()
  return (
    <>
      {location.pathname != '/' && (
        <GoBackBtn/>
      )
      }
    <Header/>
    <Outlet/>
    
    </>
  )
}

export default Layout