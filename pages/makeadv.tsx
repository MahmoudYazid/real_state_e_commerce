import React, { useEffect, useRef } from 'react'
import MakeAdvComponant from  '../components/MakeAdvComponant/index'
export default function makeadv() {
  
  const MainPageController = React.useRef<HTMLInputElement | null>(null);

  const PutBg = () => {
    if (MainPageController.current !== null) {
      MainPageController.current.style.backgroundImage = " url('/egypt-collage-concept.jpg')";
    }


  }

  useEffect(()=>{
    PutBg()

  },[])
  return (
    <section ref={MainPageController}  className=' bg-black LoginBackGround min-w-screen min-h-screen  md:overflow-x-hidden flex justify-center items-center'>
  <MakeAdvComponant></MakeAdvComponant>
      </section>
    
  )
}
