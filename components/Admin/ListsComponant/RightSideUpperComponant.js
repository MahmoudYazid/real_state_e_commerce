import React, { useEffect, useState } from 'react'
import { FcAdvertising } from 'react-icons/fc'
import { AiOutlineDelete } from 'react-icons/ai'
import axios from 'axios';
export default function RightSideUpperComponant() {
    const [FetchedData, SetFetchedData]=useState([]);
    const GetData =()=>{
        axios.get('http://localhost:3000/api/getadv').then((data)=>{
            SetFetchedData(data.data.res)
        })
        
    }

    const delAd = (IdInput) => {
        axios.get('http://localhost:3000/api/delAdd',{
            headers:{
                id: IdInput
            }
        }).then((data) => {
            GetData()
        })

    }
    useEffect(()=>{
        GetData()
    },[])

    return (
        <div className='bg-white mt-2 mb-2 mr-2 ml-2 flex flex-col justify-start items-center ' >
            <div type='text' className=' border-black border-b-2  m-2 w-[100%] h-[3rem]'>
                <p className=' ml-4 text-[25px]'>Type of adv</p>
            </div>
            <div className='bg-white w-[100%] h-[17rem] overflow-y-scroll flex flex-col justify-start items-center'>
{
FetchedData.map((Fdata)=>(
    <div className='min-w-[60%] min-h-[7rem] bg-white border-2 border-b-black flex flex-row '>
        <div className=' w-[50%] h-100 flex items-center justify-center'>
            <FcAdvertising size={60}></FcAdvertising>
        </div>
        <div className=' bg-white w-[50%] min-w-100 min-h-100 flex flex-col text-center '>
            <p>name: {Fdata.nameSchimaInput}</p>

            <AiOutlineDelete onClick={() => delAd(Fdata._id)} size={30} className='hover:text-green-400 ml-5'></AiOutlineDelete>
        </div>


    </div>
))
}
            </div>
        </div>
    )
}
