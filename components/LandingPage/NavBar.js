import { deleteCookie, getCookie } from 'cookies-next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiOutlinePlusSquare } from 'react-icons/ai'

export default function NavBar() {
  const router = useRouter()
  const [LoginAction,SetLoginAction]= useState(0)
  useEffect(()=>{
    getCookie('realstate') ? SetLoginAction(1) : SetLoginAction(0)

  })
  return (

    <div>
        {
          LoginAction ==1 ? (
          <section className='  fixed w-screen h-[4rem] flex flex-row bg-white   z-40 flex justify-center flex-row border-b-2 border-black'>
            <div className='mt-3 ml-2  hover:text-green-600  hover:cursor-pointer text-[20px] w-[30rem]'> {getCookie('realstate') ? JSON.parse(getCookie('realstate'))[0]['nameSchimaInput'] : null} </div>
            <div className='  w-screen  h-[3rem] flex flex-row bg-white   flex justify-end flex-row mr-6'>
              <Link href={'/options'} className=' flex justify-center item-center bg-[#47B45F] text-white  h-[2rem] w-[6rem] mt-3 ml-2  hover:bg-black  hover:cursor-pointer  '>
                <p>الاعدادات</p>
              </Link>
              <Link href={'/contactus'} className=' flex justify-center item-center bg-[#47B45F] text-white  h-[2rem] w-[6rem] mt-3 ml-2  hover:bg-black  hover:cursor-pointer  '>
                <p>تواصل معنا</p>
              </Link>

              <Link className='mt-2 ml-2 ' href={'/makeadv'}>
                <AiOutlinePlusSquare size={40} className='hover:text-green-400'></AiOutlinePlusSquare>
              </Link>
             
              <Link onClick={() => {
                getCookie('realstate') ? deleteCookie('realstate') : deleteCookie('realstateadmin');
              }}  href={'/'} className=' mt-3 ml-2  hover:text-green-600  hover:cursor-pointer'>تسجيل خروج
              </Link>

            

            </div>

          </section>
          ):(
            <section className='  fixed w-screen h-[4rem] flex flex-row bg-white   z-40 flex justify-end flex-row border-b-2 border-black'>
              <div className='  w-screen  h-[3rem] flex flex-row bg-white   flex justify-end flex-row mr-6'>
                <Link href={'/contactus'} className=' ml-2 flex justify-center item-center bg-[#47B45F] text-white  h-[2rem] w-[6rem] mt-3 hover:bg-black  hover:cursor-pointer  '>
                  <p>تواصل معنا</p>
                </Link>
                <Link href={'/reg/signup'} className='mt-3 ml-2  hover:text-green-600  hover:cursor-pointer'>مستخدم جديد</Link>

                <Link href={'/reg/login'} className='mt-3 ml-2 hover:text-green-600  hover:cursor-pointer'>تسجيل دخول</Link>

              </div>

            </section>
          )
        }
          

      
    
    
    </div>
  )
}
