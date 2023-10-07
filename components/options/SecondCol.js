
import React, { useState } from 'react'
import axios from 'axios'
import { getCookie } from 'cookies-next'

export default function SecondCol() {
    const [result , Setresult]=useState('')
    const [NewpassRef, SetNewpassRef] = useState('')

    const Change=()=>{
        axios.get('http://16.171.176.203:3000/api/changepassword',{
            headers:{
                 id: String(JSON.parse(getCookie('realstate'))[0]['_id']),
                 newvalue: NewpassRef
            }
          

        }).then((data)=>{
            Setresult(data.data.res)
        })
    }
  return (
 
      <div className='w-100 min-h-screen bg-white flex flex-col justify-start items-center ' >

          <div className='min-w-[90%] min-h-[7rem] bg-white flex flex-col gap-3 items-center justify-center'>
              <p className='text-[1.5rem] mt-3 border-2 border-b-black w-[100%] text-center'>تغيير  الباسورد</p>
              <input onChange={(e) => SetNewpassRef(e.target.value)} type='password' className='ControlPlaceHolders border-2 border-black rounded-lg h-[2rem] focus:outline-none focus:border-green-400 ' placeholder='كلمه السر الجديده'></input>
              <div onClick={() => Change()} className='  cursor-pointer rounded-[30px] h-[2rem] border-2 border-black w-[7rem] text-center bg-[#D9D9D9] '><p>تغيير</p></div>
              <div className='  cursor-pointer rounded-[30px] h-[2rem] text-center  '><p>{result}</p></div>
          </div>
       

      </div>

  )
}
