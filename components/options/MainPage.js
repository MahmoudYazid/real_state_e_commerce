import React from 'react'
import FirstCol from './FirstCol'
import SecondCol from './SecondCol'
export default function MainPage() {
  return (
      <div className='min-w-[100%] min-h-screen grid grid-cols-[3fr_2fr] gap-2 bg-[#F5F5F5] overflow-hidden' >
          <FirstCol></FirstCol>
          <SecondCol></SecondCol>

      </div>
  )
}
