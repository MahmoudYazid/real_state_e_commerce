import React, { useEffect, useRef } from 'react'
import LoginComp from '../../components/LoginComponent/index'
export default function login() {
  const MainPageController = React.useRef<HTMLInputElement | null>(null);
  const PutBg=()=>{
    if (MainPageController.current !== null) {
      MainPageController.current.style.backgroundImage = " url('/egypt-collage-concept.jpg')";
    }


  }
  useEffect(()=>{
    PutBg()

  })
  return (
      <main ref={MainPageController} className=' bg-black LoginBackGround min-w-screen min-h-screen  md:overflow-x-hidden flex justify-center items-center'>
      <link rel="preload" href='/egypt-collage-concept.jpg' as='image' ></link>

    <LoginComp></LoginComp>
      </main>
  )
}
