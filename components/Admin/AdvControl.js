import React from 'react'
import LeftSide_ from './AdvControlComponant/LeftSide'
import RigtSideUpper from './AdvControlComponant/RigtSideUpper'
import RightSideLower from './AdvControlComponant/RightSideLower'

export default function AdvControl() {
  const RightSide = () => (
    <div className='bg-[#F5F3] grid grid-rows-[1fr_1fr]'>
      <RigtSideUpper></RigtSideUpper>
      <RightSideLower></RightSideLower>
    </div>
  )

  const LeftSide = () => (
    <div className='bg-[#F5F5F5] grid grid-col-[1fr]  '>
      <LeftSide_></LeftSide_>
    </div>
  )
  return (
    <div className='min-w-[100%] min-h-screen grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr]  bg-[#F5F5F5] overflow-hidden'>
      <LeftSide></LeftSide>
      <RightSide></RightSide>
    </div>
  )
}
