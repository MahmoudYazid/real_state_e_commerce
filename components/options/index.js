import React from 'react'
import MainPage from  '../options/MainPage'
import SideBar from '../options/SideBar'
export default function index() {
  return (
  
    <div className='min-w-[100%] min-h-screen grid grid-cols-[.1fr_1fr]'>
          <SideBar></SideBar>
          <MainPage></MainPage>
         
    </div>

  )
}
