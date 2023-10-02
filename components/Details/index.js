import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function index() {
    const [FetchedDta, SetFetchedDta] = useState([])
    const router = useRouter()
    const { id } = router.query;
    const GetData=()=>{
        axios.get('http://localhost:3000/api/getspecificadv',{
            headers:{
                id_: id,
            }
        }).then(response=>{
            SetFetchedDta(response.data.res)
        })
    }
    useEffect(()=>{
        GetData()
    })
  return (
      <section className='min-w-full min-h-screen bg-white grid  grid-cols-[1fr] lg:grid-cols-[1fr_1fr] '>
          {
              FetchedDta.map((Fdata) => (
                <>
          <div className='  bg-white   flex  content-center justify-center items-center mb-2 lg:m-0'>
                          <img src={`/UploadedImg/${Fdata.imgsrcSchimaInput}`} className='w-[40rem] h-[30rem] drop-shadow-2xl border-2 border-black'/> 
          </div>

          <div className='bg-white  flex justify-center items-center mb-[8rem] '>

            
                    <section className='flex flex-col bg-white w-[40rem] h-[30rem] '>
                        <div className='bg-black w-100 h-[3rem] flex flex-row'>
                            <div className=' h-[3rem] w-[50%] bg-white text-center'>
                                <p className='text-[1.5rem]'>{Fdata.titleSchimaInput}</p>
                            </div>
                            <div className=' h-[3rem] w-[50%] bg-white text-center'>
                                <p className='text-[1.5rem] text-black'>جنيه {Fdata.priceSchimaInput}</p>
                            </div>
                        </div>

                        <div className='bg-black w-100 h-[3rem] flex flex-row'>
                            <div className=' h-[3rem] w-[1000%] bg-[#ECF0F1] text-center'>
                                <p className='text-[1.5rem] text-black'>الهاتف : {Fdata.phoneSchimaInput}</p>
                            </div>
                        </div>

                        <div className='bg-white w-100 h-[3rem] flex flex-col mb-[5rem]'>
                            <div className=' h-[3rem] w-[100%] bg-white text-center'>
                                <p className='text-[1.5rem]'>التفاصيل</p>
                            </div>
                            <div dir='rtl' className='w-[100%] bg-white flex flex-row justify-start items-start ltr'>
                                <ul class="list-disc list-inside mr-5">
                                    <li>المحافظه :{Fdata.stateSchimaInput}</li>
                                    <li>المركز :{Fdata.centerSchimaInput}</li>
                                    <li>الشارع :{Fdata.streetSchimaInput}</li>
                                </ul>
                            </div>

                        </div>

                        <div className='h-[20rem] w-[100%] bg-[#F5F5F5] text-black mb-2 overflow-scroll'>
                            <p dir='rtl'>{Fdata.descSchimaInput}                            </p>
                        </div>


                    </section>
             
          </div>
                  </>
              ))
          }
          <div className='bottom-0  fixed w-[100%] h-[4.5rem] bg-[#D9D9D9] flex flex-row justify-start items-center '>
              <Link href={'/'} className='hover:cursor-pointer flex text-center bg-[#2ECC71] h-[3rem] w-[8rem] justify-center items-center ml-5 rounded-[30px]'>
                <p className='text-white'>الصفحه الرئيسيه</p>
            </Link>

          </div>
      </section>
  )
}
