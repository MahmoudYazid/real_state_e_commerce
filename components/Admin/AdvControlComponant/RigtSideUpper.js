import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { RiMoneyDollarCircleFill, RiAdvertisementFill } from 'react-icons/ri'

export default function RigtSideUpper() {
    const [FetchedData, SetFetchedData] = useState([])
    const GetData = () => {
        fetch('http://16.171.176.203:3000/api/getalladminads', {
            method: 'GET',
        }).then((res) => {
            res.json().then((Fdata) => {
                SetFetchedData(Fdata.res)

            })

        })

    }
    const DelAdd = (idInput) => {
        fetch('http://16.171.176.203:3000/api/deladminads', {
            method: 'GET',
            headers:{
                id_: idInput
            }
        }).then(() => {
            GetData()
        })

    }
    useEffect(() => {
        GetData()

    }, [])

    return (
        <div className='bg-white mt-2 mb-0 mr-2 ml-2 flex flex-col justify-start items-center ' >
            <div type='text' className=' border-black border-b-2  m-2 w-[100%] h-[3rem]'>
                <p className=' ml-4 text-[25px]'>Admin ads</p>
            </div>
            <div className='bg-white w-[100%] h-[17rem] overflow-y-scroll flex flex-col justify-start items-center border-2 border-black'>
               {
                FetchedData.map((Fdata)=>(
                    <div className='min-w-[60%] min-h-[7rem] bg-white border-2 border-b-black flex flex-row '>
                        <div className=' w-[50%] h-100 flex items-center justify-center'>
                            <RiAdvertisementFill size={60}></RiAdvertisementFill>
                        </div>
                        <div className=' bg-white w-[50%] min-w-100 min-h-100 flex flex-col text-center '>
                            <p>title: {Fdata.titleSchimaInput}</p>

                            <div className='flex flex-row  '>
                                <AiOutlineDelete onClick={() => DelAdd(Fdata._id)} size={30} className='hover:text-green-400 ml-5'></AiOutlineDelete>
                            </div>

                        </div>


                    </div>
                ))
               }
  
            </div>
        </div>
    )
}
