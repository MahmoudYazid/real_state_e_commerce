import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

export default function LeftSideMiddleForm() {
    const [FetchedData, SetFetchedData] = useState([]);
    const CenterNameRef =useRef()
    const StateNameRef =useRef()
    const [result, Setresult] = useState('')
    const GetStateListData = () => {
        axios.get('http://localhost:3000/api/getallstates').then((data) => {
            SetFetchedData(data.data.res)
        })

    }

    const AddToDb = () => {
            axios.get('http://localhost:3000/api/addcenter', {
                headers: {
                    center: String(encodeURIComponent(CenterNameRef.current.value)),
                    state: String(encodeURIComponent(StateNameRef.current.value))
                }
            })
                .then((response_) => {
                    response_.data.res == "done" ? Setresult('center Added') : Setresult('center exist')
                })
        

       
    }
    useEffect(()=>{
        GetStateListData()
    },[])
  return (
      <div className='bg-white mt-2 mb-2 mr-2 ml-2 flex flex-col justify-center items-center' >
          <input ref={CenterNameRef}  placeholder="add center name" type='text' className='border-2 focus:outline-none focus:border-green-400 ControlPlaceHolders m-2 min-w-[33%] h-[3rem] rounded-[10px]'></input>
          <select ref={StateNameRef} className='border-2 focus:outline-none focus:border-green-400 ControlPlaceHolders m-2 min-w-[33%] h-[3rem] rounded-[10px]' placeholder='state' >
             {
                FetchedData.map((Fdata)=>(
                    <option value={Fdata.nameSchimaInput} className='ControlPlaceHolders'   >{Fdata.nameSchimaInput}</option>
                ))
             }
            
          </select>
          <p className='mr-3 ml-3 '>
              <span className='text-[#16DF42] text-[15px] '>{result}</span>
          </p>
          <div onClick={() => AddToDb()} className='bg-black text-white min-w-[20%] h-[2rem] flex justify-center items-center'><p>enter</p></div>


      </div>
  )
}
