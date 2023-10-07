
import React, { useRef, useState } from 'react'
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { FaWhatsappSquare } from 'react-icons/fa';
import axios from "axios"



export default function Form() {
    const [PhoneRef, SetPhoneRef] = useState('')
    const [Result,SetResult] = useState('')
    const SendPhoneApiFetch = async (phoneInput) => {
        const data = await axios.get('http://16.171.176.203:3000/api/sendphone', {
            headers: {
                phone: phoneInput
            }
        }).then((response) => {
            response.data.res == "done" ? SetResult("تم الارسال وسنتواصل معك في اقرب وقت") : SetResult("قد تم ارسال رقمك بالفعل من قبل")
        })

    }
  return (
      <section className='w-[30rem] h-[30rem]  bg-white drop-shadow-2xl  flex  flex-col justify-start items-center border-2 border-[#FFBC60]	' >
          <p className='z-2 mt-2 font-2xl text-3xl text-[#FFBC60]'>للبحث اليدوي - اتصل بنا</p>
          <div className='flex flex-col item-start w-[80%] mt-5'>
              <div className='w-full text-center'> <p className='text-black font-bold text-[22px] ml-[50]'>رقم الهاتف</p></div>
              
              <input onChange={(e) => SetPhoneRef(e.target.value)} type='text' className='focus:outline-none focus:border-green-400 border-2 border-black rounded-lg h-[2rem] '></input>
          </div>
         
          <div onClick={() => {
                SendPhoneApiFetch(PhoneRef)


            }} className='flex flex-col gap-2 content-center items-center justify-center  w-[80%] mt-5'>

              <div className=' hover:cursor-pointer rounded-[50px] bg-[#ffff] w-[8rem] h-[2rem] text-black border-2 border-black flex flex-row justify-center items-center'><p>تواصل</p></div>

          </div>
          <div className='w-full flex justify-center items-center mt-3'> 
              <BiLogoFacebookSquare size={60} className='text-blue-400'></BiLogoFacebookSquare>
              <FaWhatsappSquare size={55} className='text-green-400'></FaWhatsappSquare>
          

             
       
          </div>
          <p className='mr-3 ml-3 '>
              <span className='text-[#16DF42] text-[15px] '>{Result}</span>
              </p>


          <div className='w-full flex  flex-col text-center mt-1'>
              <p className='mt-2 mr-3 ml-3'>إذا كنت ترغب في العثور على شقة ولا تعرف أين يمكنك العثور عليها<br></br>
                  <span className='text-[#0055FF] text-[30px]'> ! سوف نساعدك    </span></p>
                  <br></br>
              <p className='mr-3 ml-3 '> فقط أرسل لنا هاتفك وسوف نتصل بك. <br></br>
                  <span className='text-[#16DF42] text-[30px] '>! لا تنتظر افعلها الآن</span></p>

          </div>
      </section>
  )
}
