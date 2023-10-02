import React, { useEffect, useRef } from 'react'
import FormComponant from './Form'

export default function index() {
  const MainPageController = useRef();
  const PutBg = () => {
    if (MainPageController.current !== null) {
      MainPageController.current.style.backgroundImage = " url('/egypt-collage-concept.jpg')";
    }


  }
  useEffect(() => {
    PutBg()

  })
  return (
      <section className='min-w-full min-h-screen bg-black grid  grid-cols-[1fr] lg:grid-cols-[1fr_1fr] '>
        <div className='bg-white  flex justify-center items-center '>
          
        <FormComponant></FormComponant>
        </div>
      <div ref={MainPageController} className=' LoginBackGround  bg-yellow-400 hidden lg:block flex  content-center justify-center'>
        
        </div>
      
    </section>
  )
}
