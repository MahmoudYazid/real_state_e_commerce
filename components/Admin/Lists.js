import React from 'react'
import LeftSideMiddleForm from './ListsComponant/LeftSideMiddleForm'
import LeftSideLowerForm from './ListsComponant/LeftSideLowerForm'
import LeftSideUpperForm from './ListsComponant/LeftSideUpperForm'
import RightSideUpperForm from './ListsComponant/RightSideUpperComponant'
import RightSideLowerForm from './ListsComponant/RightSideLowerComponant'

export default function Lists() {
 
  const RightSide=()=>(
    <div className='bg-[#F5F5F5] grid grid-rows-[1fr_1fr]'>
      <RightSideUpperForm/>
      <RightSideLowerForm/>
    </div>
  )
  
  const LeftSide = () => (
    <div className='bg-[#F5F5F5] grid grid-rows-[1fr_1fr_1fr] '>
      <LeftSideUpperForm/>
      <LeftSideMiddleForm></LeftSideMiddleForm>
      <LeftSideLowerForm></LeftSideLowerForm>
    </div>
  )
  return (
    <div className='min-w-[100%] min-h-screen grid grid-cols-[1fr] md:grid-cols-[1fr_1fr]  bg-[#F5F5F5] overflow-hidden'>
    <LeftSide></LeftSide>
   <RightSide></RightSide>
    </div>
  )
}
