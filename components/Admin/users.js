import React, { useEffect, useState } from 'react'
import { RiAccountCircleFill } from 'react-icons/ri'
import { AiOutlineDelete } from 'react-icons/ai'
import axios from 'axios'



export default function users() {
    const [IncNumber, SetIncNumber] = useState(5)
    const [StartState, SetStartState] = useState(0)
    const [EndState, SetEndState] = useState(5)
    const [Fetcheddata, SetFetcheddata] = useState([])

    const NextPage = () => {
        SetEndState(Number(EndState + IncNumber))
        SetStartState(Number(StartState + IncNumber))
        GetUsersApiFetch();
    }
    const PrevPage = () => {
        if (StartState > 0) {
            SetEndState(Number(EndState - IncNumber))
            SetStartState(Number(StartState - IncNumber))
            GetUsersApiFetch();
        } else {
            return 0
        }

    }
    const GetUsersApiFetch = async () => {
        const data = await axios.get('http://16.171.176.203:3000/api/getallusers', {
            headers: {
                start: StartState,
                end: EndState
            }
        }).then((response_) => {

            SetFetcheddata(response_.data.res)
          

        })

    }
    const DelusersApiFetch = async (IdInput) => {
        const data = await axios.get('http://16.171.176.203:3000/api/DelUser', {
            headers: {
                id: IdInput,

            }
        }).then(() => {

            GetUsersApiFetch()

        })

    }
    useEffect(() => {
        GetUsersApiFetch()
        
    }, [EndState, StartState])


    return (
        <div className='min-w-[100%] min-h-screen grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr] gap-2 bg-[#F5F5F5] overflow-hidden' >
            <div className='min-w-[80%] min-h-screen bg-white flex flex-col justify-start items-center ' >
                <div className='min-w-[90%] min-h-[7rem] bg-white flex items-center justify-center '>
                    <p className='text-[1.5rem]'>All users</p>

                </div>
                <div className='overflow-x-scroll min-w-[100%] max-h-[36rem] bg-white flex flex-col justify-start mt-3 items-center'>
                    {
                        Fetcheddata.map((data)=>(
                            <div className='min-w-[60%] min-h-[7rem] bg-white border-2 border-b-black flex flex-row '>
                                <div className=' w-[50%] h-100 flex items-center justify-center'>
                                    <RiAccountCircleFill size={60}></RiAccountCircleFill>
                                </div>
                                <div className=' bg-white w-[50%] min-w-100 min-h-100 flex flex-col text-center '>
                                    <p>name: {data.nameSchimaInput}</p>
                                    <p>phone : {data.phoneSchimaInput}</p>
                                    <p>password: {data.passwordSchimaInput}</p>
                                    <AiOutlineDelete onClick={() => DelusersApiFetch(data._id)} size={30} className='hover:text-green-400 ml-5'></AiOutlineDelete>
                                </div>


                            </div>
                        ))

                    }
            

                    <div className=' min-w-[60%] min-h-[7rem] bg-white border-2 border-b-black flex  justify-center items-center '>

                        <div className='  w-[50%] min-w-100 min-h-100 flex justify-center items-center '>
                            <p onClick={() => {
                                PrevPage()
                            }} className='hover:cursor-pointer  hover:text-green-400 text-3xl m-2' >previous</p>
                            <p onClick={() => {
                                NextPage()
                            }} className='text-3xl m-2 hover:cursor-pointer  hover:text-green-400'>next</p>
                        </div>


                    </div>
                </div>
              
            </div>
          
      </div>
  )
}
