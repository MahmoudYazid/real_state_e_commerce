import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getCookie } from 'cookies-next'
import { FcAdvertising } from 'react-icons/fc'
import { AiOutlineDelete, AiOutlineArrowRight } from 'react-icons/ai'
import Link from 'next/link'

export default function FirstCol() {
  const [FetchedData, SetFetchedData] = useState([])

  const getAdv = () => {
    axios.get('http://16.171.176.203:3000/api/getmyads',{
      headers: {
        id: String(JSON.parse(getCookie('realstate'))[0]['_id'])
      }
    }).then((resp) => {

        SetFetchedData(resp.data.res)


    })

  }
  const DelAd = async (id_) => {
    const data = await axios.get('http://16.171.176.203:3000/api/deluserads', {
      headers: {
        id: id_,

      }
    }).then(() => {

      getAdv()


    })

  }
  useEffect(() => {
    getAdv()

  }, [])
  return (
    <div className='w-100 min-h-screen bg-white flex flex-col justify-start items-center ' >

          <div className='min-w-[90%] min-h-[7rem] bg-white flex items-center justify-center '>
              <p className='text-[1.5rem]'>الاعلانات</p>

          </div>
          <div className='overflow-scroll min-w-[90%] min-h-[32rem] bg-white flex flex-col justify-start mt-3 items-center'>
           {
          FetchedData.map((Fdata) => (
            <div className='min-w-[90%] min-h-[7rem] bg-white border-2 border-b-black flex flex-row '>
              <div className=' w-[50%] h-100 flex items-center justify-center'>
                <FcAdvertising size={60}></FcAdvertising>
              </div>
              <div className=' w-[50%] min-w-100 min-h-100 flex flex-col text-center overflow-y-scroll'>
                <p className='text-[20px]'><span className='text-green-500'>العنوان</span> <br></br>{Fdata.titleSchimaInput}</p>
               
               <div className='flex flex-row gap-2'>
                  <AiOutlineDelete onClick={() => DelAd(Fdata._id)} size={40} className='hover:text-green-400'></AiOutlineDelete>
                  <Link href={`/details/${Fdata._id}`}>
                  <AiOutlineArrowRight size={40} className='hover:text-green-400'></AiOutlineArrowRight>
                  </Link>
               </div>
                
              </div>


            </div>
          ))
           }
           
          </div>
         
      
    </div>
  )
}
