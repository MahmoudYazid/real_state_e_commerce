import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import {getCookie} from 'cookies-next'
import { useRouter } from 'next/router'

export default function index() {
  const [Result, SetResult] = useState('')
  const phoneInputRef=useRef()
  const PasswordInputRef = useRef()
  const router = useRouter()
  const CheckExist = ()=>{
    axios.get('http://localhost:3000/api/login',{
      headers:{
        phone: String(encodeURIComponent(phoneInputRef.current.value)),
        password: String(encodeURIComponent(PasswordInputRef.current.value))
      }
    }).then((response)=>{
      if (response.data.res=="admin"){
        router.push('/control/admin')
      }else{
        
        response.data.res == "not existed" ? SetResult("المستخدم غير موجود بالفعل") : router.push('/')
      }
     
    })
  }

  const CheckCookies=()=>{
    if (getCookie('realstate')){
      router.push('/')
    }
    if (getCookie('realstateadmin')){
      router.push('/control/admin')
    }
  }

  useEffect(()=>{
    CheckCookies()

  })
  return (
    <section className='w-[25rem] h-[25rem] bg-white drop-shadow-2xl  flex  flex-col justify-start items-center	' >
      <p className='z-2 mt-5 font-2xl text-3xl text-[#FFBC60]'>تسجيل الدخول</p>
      <div className='flex flex-col item-start w-[80%] mt-5'>
        <p className='text-[#3AC118] font-bold text-[22px]'>رقم الهاتف</p>
        <input ref={phoneInputRef} type='text' className='focus:outline-none focus:border-green-400 border-2 border-black rounded-lg h-[2rem] '></input>
      </div>
      <div className='flex flex-col item-start w-[80%] mt-5'>
        <p className='text-[#3AC118] font-bold text-[22px]'>الباسوورد</p>
        <input ref={PasswordInputRef} type='password' className='focus:outline-none focus:border-green-400 border-2 border-black rounded-lg h-[2rem] '></input>
      </div>
      <p className='text-[#3AC118] font-bold text-[22px]'>{Result}</p>
      <div className='flex flex-col gap-2 content-center items-center justify-center  w-[80%] mt-5'>

        <div onClick={() => CheckExist()} className='cursor-pointer rounded-[50px] bg-[#3AC118] w-[8rem] h-[2rem] text-white flex flex-row justify-center items-center'><p>دخول</p></div>

        <Link href={'/'}  className=' rounded-[50px] bg-[#ffff] w-[8rem] h-[2rem] text-black flex flex-row justify-center items-center border-2 border-black'><p>رجوع</p></Link>
      </div>
    </section>
  )
}
