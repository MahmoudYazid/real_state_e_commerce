import React, { useEffect, useRef, useState } from 'react'

import { AiOutlineDelete } from 'react-icons/ai'
import { RiMoneyDollarCircleFill, RiAdvertisementFill } from 'react-icons/ri'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import axios from 'axios'
import Link from 'next/link'

export default function LeftSide() {
  const [IncNumber, SetIncNumber] = useState(5)
  const [StartState, SetStartState] = useState(0)
  const [EndState, SetEndState] = useState(5)
  const [Fetcheddata, SetFetcheddata] = useState([])
  const [NewValueRef, SetNewValueRef] = useState('')

  const NextPage = () => {
    SetEndState(Number(EndState + IncNumber))
    SetStartState(Number(StartState + IncNumber))
    GetFetchAllAds();
  }
  const PrevPage = () => {
    if (StartState > 0) {
      SetEndState(Number(EndState - IncNumber))
      SetStartState(Number(StartState - IncNumber))
      GetFetchAllAds();
    } else {
      return 0
    }

  }
  const GetFetchAllAds = async () => {
    const data = await axios.get('http://16.171.176.203:3000/api/getadvforusers', {
      headers: {
        start: StartState,
        end: EndState
      }
    }).then((response_) => {

      SetFetcheddata(response_.data.res)


    })

  }

  const DelAd = async (id_) => {
    const data = await axios.get('http://16.171.176.203:3000/api/deluserads', {
      headers: {
        id: id_,
        
      }
    }).then(() => {

      GetFetchAllAds()


    })

  }
  const updatevalue = async (id_) => {
    const data = await axios.get('http://16.171.176.203:3000/api/changevalue', {
      headers: {
        id: id_,
        newvalue: NewValueRef

      }
    }).then(() => {

      GetFetchAllAds()


    })

  }

  useEffect(() => {
    GetFetchAllAds()

  }, [EndState, StartState])


  return (
    <div className='bg-white mt-2 mb-0 mr-2 ml-2 flex flex-col justify-start items-center ' >
      <div type='text' className=' border-black border-b-2  m-2 w-[100%] h-[3rem]'> 
        <p className=' ml-4 text-[25px]'>All ads</p>
      </div>
      <div className='bg-white w-[100%] h-[40rem] overflow-y-scroll flex flex-col justify-start items-center border-2 border-black'>
      {
        Fetcheddata.map((Fdata)=>(
          <div className='min-w-[70%] min-h-[15rem] bg-white border-2 border-b-black flex flex-row '>
            <div className=' w-[50%] h-100 flex items-center justify-center'>
              <RiAdvertisementFill size={60}></RiAdvertisementFill>
            </div>
            <div className=' bg-white w-[50%] min-w-100 min-h-100 flex flex-col text-center '>
              <p>title: {Fdata.titleSchimaInput}</p>
              <p>Owner: {Fdata.phoneSchimaInput}</p>
              <p>value: {Fdata.valueSchimaInput}</p>
              <div className='flex flex-row  mb-2 mt-2  border-2 border-t-black '>
                <AiOutlineDelete onClick={() => DelAd(Fdata._id)} size={30} className='mt-2  hover:text-green-400 ml-5'></AiOutlineDelete>
                <Link href={`/details/${Fdata._id}`}>
                  <BsFillArrowRightCircleFill size={30} className='mt-2 hover:text-green-400 ml-5'></BsFillArrowRightCircleFill>
                </Link>
                <RiMoneyDollarCircleFill onClick={() => updatevalue(Fdata._id)} size={35} className='mt-2 mb-2 hover:text-green-400 ml-5'></RiMoneyDollarCircleFill>
                
              </div>
              <div className=' w-100 h-[5rem] flex flex-row justify-center items-center border-2 border-t-black'>
            

                <input onChange={(e) => SetNewValueRef(e.target.value)} type='text' className='border-2 border-black' placeholder='Change value'></input>
              </div>

            </div>


          </div>
        ))
      }
        <div className='hover:cursor-pointer   min-w-[60%] min-h-[4rem] bg-white border-2 border-b-black flex  justify-center items-center '>

          <div className='  rounded-lg w-[15rem] min-w-100 min-h-100 flex flex-row  justify-center items-center '>
            <p onClick={() => PrevPage()} className='text-3xl hover:cursor-pointer hover:text-green-400 mr-3'>السابق</p>
            <p onClick={() => NextPage()} className='text-3xl hover:cursor-pointer hover:text-green-400'>التالي</p>
          </div>


        </div>
      </div>
    </div>
  )
}
