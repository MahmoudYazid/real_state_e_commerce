
import axios from 'axios'
import Link from 'next/link'
import React, { useRef, useState } from 'react'

export default function index() {
    const phoneInput = useRef()
    const UsernameInput = useRef()
    const PasswordInput = useRef()
    const [Result, SetResult] = useState('')

    const SendPhoneApiFetch =()=>{
        const data =  axios.get('http://localhost:3000/api/reg/signup', {
            headers: {
                "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
                phone: `${String(encodeURIComponent(phoneInput.current.value))  }` ,
                password: `${String(encodeURIComponent(PasswordInput.current.value)) }` ,
                name: `${String(encodeURIComponent(UsernameInput.current.value)) }`   ,
            }
        }).then((response) => {
            response.data.res == "done" ? SetResult("تم التسجيل") : SetResult("المستخدم موجود بالفعل")
        })



    }
    
  return (
      <section className='w-[25rem] h-[30rem] bg-white drop-shadow-2xl  flex  flex-col justify-start items-center	'>
          <p className='z-2 mt-5 font-2xl text-3xl text-[#FFBC60]'>مستخدم جديد</p>
          <div className='flex flex-col item-start w-[80%] mt-5'>
              <p className='text-[#3AC118] font-bold text-[22px]'>الاسم</p>
              <input ref={UsernameInput} type='text' className='focus:outline-none focus:border-green-400 border-2 border-black rounded-lg h-[2rem] '></input>
          </div>
          <div className='flex flex-col item-start w-[80%] mt-5'>
              <p className='text-[#3AC118] font-bold text-[22px]'>رقم الهاتف</p>
              <input ref={phoneInput} type='text' className='focus:outline-none focus:border-green-400 border-2 border-black rounded-lg h-[2rem] '></input>
          </div>
          <div className='flex flex-col item-start w-[80%] mt-5'>
              <p className='text-[#3AC118] font-bold text-[22px]'>الباسورد</p>
              <input ref={PasswordInput} type='text' className='focus:outline-none focus:border-green-400 border-2 border-black rounded-lg h-[2rem] '></input>
          </div>

          <p className='text-[#3AC118] font-bold text-[22px]'>{Result}</p>
          <div className='flex flex-col gap-2 content-center items-center justify-center  w-[80%] mt-5'>

              <div onClick={() => SendPhoneApiFetch()} className='hover:cursor-pointer rounded-[50px] bg-[#FFBC60] w-[8rem] h-[2rem] text-white flex flex-row justify-center items-center'><p>تسجيل</p></div>

              <Link href='/' className=' rounded-[50px] bg-[#ffff] w-[8rem] h-[2rem] text-black flex flex-row justify-center items-center border-2 border-black'><p>رجوع</p></Link>
          </div>
      </section>
  )
}
