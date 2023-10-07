import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { MdPermPhoneMsg } from 'react-icons/md'

export default function Inbox() {
    const [IncNumber, SetIncNumber]=useState(5)
    const [StartState, SetStartState] = useState(0)
    const [EndState, SetEndState]=useState(5)
    const [Fetcheddata, SetFetcheddata] = useState([])

    const NextPage = ()=>{
        SetEndState(Number(EndState + IncNumber)) 
        SetStartState(Number(StartState + IncNumber))
        GetPhonesApiFetch();
    }
    const PrevPage = () => {
        if (StartState >0){
            SetEndState(Number(EndState - IncNumber))
            SetStartState(Number(StartState - IncNumber))
            GetPhonesApiFetch();
        }else{
            return 0
        }
      
    }
    const GetPhonesApiFetch = async () => {
        const data =  await axios.get('http://16.171.176.203:3000/api/getallphones', {
            headers: {
                start: StartState,
                end: EndState
            }
        }).then((response_) => {
         
            SetFetcheddata(response_.data.res)
  
        })

    }
    const DelPhonesApiFetch = async (phoneInput) => {
        const data = await axios.get('http://16.171.176.203:3000/api/deletephones', {
            headers: {
                phone: phoneInput,
              
            }
        }).then(() => {

            GetPhonesApiFetch()

        })

    }
    useEffect(()=>{
        GetPhonesApiFetch()
        console.log([StartState, EndState])
    }, [EndState, StartState])

  return (
      <div className='min-w-[100%] min-h-screen grid lg:grid-cols-[3fr_2fr] grid-cols-[1fr] gap-2 bg-[#F5F5F5] overflow-hidden' >
          <div className='w-100 min-h-screen bg-white flex flex-col justify-start items-center ' >

              <div className='min-w-[90%] min-h-[7rem] bg-white flex items-center justify-center '>
                  <p className='text-[1.5rem]'>inbox</p>

              </div>
              <div className='overflow-scroll min-w-[90%] max-h-[36rem]  bg-white flex flex-col justify-start mt-3 items-center'>
                  <div className='min-w-[60%] max-h-[36rem] bg-white border-2 border-b-black flex flex-col '>
                 
                {
              
                          Fetcheddata.map((GetData) => (



                              <div className='min-w-[60%] min-h-[7rem] bg-white border-2 border-b-black flex flex-row '>
                                  <div className=' w-[50%] h-100 flex items-center justify-center'>
                                      <MdPermPhoneMsg size={60}></MdPermPhoneMsg>
                                  </div>
                                  <div className=' bg-white w-[50%] min-w-100 min-h-100 flex flex-col text-center '>

                                      <p>phone : {GetData.msgSchimaInput}</p>

                                      <AiOutlineDelete onClick={()=>{
                                          DelPhonesApiFetch(GetData.msgSchimaInput);
                                      }} size={30} className='hover:text-green-400 ml-5'></AiOutlineDelete>
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
      </div>
  )
}
