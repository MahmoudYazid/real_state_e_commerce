import React, { useEffect, useState } from 'react'
import { TbBuildingEstate } from 'react-icons/tb'
import { AiOutlineDelete } from 'react-icons/ai'
import axios from 'axios';

export default function LeftSideUpperForm() {
    const [FetchedData, SetFetchedData] = useState([]);
    const GetData = () => {
        axios.get('http://16.171.176.203:3000/api/getallstates').then((data) => {
            SetFetchedData(data.data.res)
        })

    }

    const delAd = (IdInput) => {
        axios.get('http://16.171.176.203:3000/api/delstate', {
            headers: {
                id: IdInput
            }
        }).then((data) => {
            GetData()
        })

    }
    useEffect(() => {
        GetData()
    }, [])

  return (
      <div className='bg-white mt-2 mb-2 mr-2 ml-2 flex flex-col justify-center items-center ' >
          <div type='text' className=' border-black border-b-2  m-2 w-[100%] h-[3rem]'>
            <p className=' ml-4 text-[25px]'>STATES</p>
          </div>
       <div className='bg-white w-[100%] h-[7rem] overflow-y-scroll flex flex-col justify-start items-center'>
              {
                  FetchedData.map((Fdata) => (
                      <div className='min-w-[60%] min-h-[7rem] bg-white border-2 border-b-black flex flex-row '>
                          <div className=' w-[50%] h-100 flex items-center justify-center'>
                              <TbBuildingEstate size={60}></TbBuildingEstate>
                          </div>
                          <div className=' bg-white w-[50%] min-w-100 min-h-100 flex flex-col text-center '>
                              <p>name: {Fdata.nameSchimaInput}</p>

                              <AiOutlineDelete onClick={() => delAd(Fdata._id)}  size={30} className='hover:text-green-400 ml-5'></AiOutlineDelete>
                          </div>


                      </div>
                  ))
              }
       </div>
      </div>
  )
}
