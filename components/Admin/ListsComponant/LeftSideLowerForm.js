import axios from 'axios'
import React, { useRef, useState } from 'react'

export default function LeftSideLowerForm() {
    const itemName=useRef()
    const Selection = useRef()
    const [result, Setresult]= useState('')

    const AddToDb=()=>{
        if (Selection.current.value == "state"){
            axios.get('http://localhost:3000/api/addstate',{
                headers:{
                    item: String(encodeURIComponent(itemName.current.value))
                }
            })
            .then((response_)=>{
                response_.data.res=="done" ? Setresult('State Added') : Setresult('State existed')
            })
        }

        if (Selection.current.value == "Type_of_ads") {
            axios.get('http://localhost:3000/api/addadv', {
                headers: {
                    item: String(encodeURIComponent(itemName.current.value))
                }
            })
                .then((response_) => {
                    response_.data.res == "done" ? Setresult('adv Added') : Setresult('adv existed')
                })
        }
    }
  return (
      <div className='flex flex-col justify-center items-center bg-white mt-2 mb-2 mr-2 ml-2' >
          <input ref={itemName} placeholder="Add state name  or ads type " type='text' className='border-2 focus:outline-none focus:border-green-400 ControlPlaceHolders m-2 min-w-[33%] h-[3rem] rounded-[10px]'></input>
          <select ref={Selection} className='border-2 focus:outline-none focus:border-green-400 ControlPlaceHolders m-2 min-w-[33%] h-[3rem] rounded-[10px]' placeholder='state' >
              <option value="Type_of_ads" className='ControlPlaceHolders' >Type of ads</option>
              <option value="state" className='ControlPlaceHolders' >state</option>
          </select>
          <p className='mr-3 ml-3 '>
              <span className='text-[#16DF42] text-[15px] '>{result}</span>
          </p>
          <div onClick={() =>AddToDb()} className='bg-black text-white min-w-[20%] h-[2rem] flex justify-center items-center cursor-pointer hover:text-white hover:bg-green-400'><p>enter</p></div>
      </div>
  )
}
