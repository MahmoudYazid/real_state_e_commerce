import React, { useEffect, useState } from 'react'
import { FaCity } from 'react-icons/fa'
import { AiOutlineDelete } from 'react-icons/ai'
import axios from 'axios';

export default function RightSideLowerComponant() {
    const [FetchedData, SetFetchedData] = useState([]);

    const GetCentersListData = () => {
        axios.get('http://localhost:3000/api/getallcenters').then((data) => {
            SetFetchedData(data.data.res)
        })

    }
    const delcenter = (IdInput) => {
        axios.get('http://localhost:3000/api/delcenter', {
            headers: {
                id: IdInput
            }
        }).then((data) => {
            GetCentersListData()
        })

    }
    useEffect(()=>{
        GetCentersListData()
    },[])
    return (
        <div className='bg-white mt-2 mb-2 mr-2 ml-2 flex flex-col justify-start items-center ' >
            <div type='text' className=' border-black border-b-2  m-2 w-[100%] h-[3rem]'>
                <p className=' ml-4 text-[25px]'>Centers</p>
            </div>
            <div className='bg-white w-[100%] h-[17rem] overflow-y-scroll flex flex-col justify-start items-center'>
                {
                    FetchedData.map((Fdata) => (
                        <div className='min-w-[60%] min-h-[7rem] bg-white border-2 border-b-black flex flex-row '>
                            <div className=' w-[50%] h-100 flex items-center justify-center'>
                                <FaCity size={60}></FaCity>
                            </div>
                            <div className=' bg-white w-[50%] min-w-100 min-h-100 flex flex-col text-center '>
                                <p>Center name: {Fdata.centernameSchimaInput} </p>
                                <p>state Name : {Fdata.statenameSchimaInput}</p>

                                <AiOutlineDelete onClick={() => delcenter(Fdata._id)} size={30} className='hover:text-green-400 ml-5'></AiOutlineDelete>
                            </div>


                        </div>
                    ))
                }
            </div>
        </div>
    )
}
