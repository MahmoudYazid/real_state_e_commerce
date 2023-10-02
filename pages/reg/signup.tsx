import React, { useEffect } from 'react'
import SignupComponent from  '../../components/SignupComponent/index'

export default function signup() {
  const MainPageController = React.useRef<HTMLInputElement | null>(null);
  const PutBg = () => {
    if (MainPageController.current !== null) {
      MainPageController.current.style.backgroundImage = " url('/egypt-collage-concept.jpg')";
    }


  }
  useEffect(() => {
    PutBg()

  })
  return (
    <main ref={MainPageController}  className=' bg-black LoginBackGround min-w-screen min-h-screen  md:overflow-x-hidden flex justify-center items-center'>
        
          <SignupComponent></SignupComponent>
      </main>
      
  )
}
