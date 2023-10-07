import axios from 'axios'
import { Router, useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'

export default function SearchSection() {
  const [Centers,SetCenters]=useState([])
  const [state, Setstate] = useState([])
  const [AdsTypes, SetAdsTypes] = useState([])
  const AdsChoiceRef = useRef()
  const StateChoiceRef = useRef()
  const CenterChoiceRef = useRef()
  const SearchwordChoiceRef = useRef()
  const router = useRouter()

  const ChangeCenters = (Selection)=>{
    
    axios.get('http://16.171.176.203:3000/api/getspecificcenters',{
      headers: {
        state: String(encodeURIComponent(Selection))
      }
    }).then((data) => {
      SetCenters(data.data.res)

    })
  }



  const GetCentersListData = () => {
    axios.get('http://16.171.176.203:3000/api/getallcenters').then((data) => {
      SetCenters(data.data.res)
     
    })

  }
  const GetAdsTypesListData = () => {
    axios.get('http://16.171.176.203:3000/api/getadv').then((data) => {
      SetAdsTypes(data.data.res)
    })

  }
  const GetStateTypesListData = () => {
    axios.get('http://16.171.176.203:3000/api/getallstates').then((data) => {
      Setstate(data.data.res)
    })

   
  }
  const SearchFunc = () => {
    router.push(`/searchpage?typeparam=${AdsChoiceRef.current.value}&&qparam=${SearchwordChoiceRef.current.value}&&stateparam=${StateChoiceRef.current.value}&&centerparam=${CenterChoiceRef.current.value}`)


  }
  useEffect(() => {
    GetStateTypesListData()
    GetAdsTypesListData()
    GetCentersListData()



  }, [])
  return (
      <div className=' mt-[4rem] SearchContainer  w-screen  h-[26rem] bg-white   flex justify-center content-center flex-row '>
        
          <div className='m-3 w-[60rem] h-[20rem] bg-transparent flex flex-col  justify-center items-center '>
              <input ref={SearchwordChoiceRef} type='text' className=' focus:border-2 focus:outline-none focus:border-green-400 w-[80%] h-[3rem] rounded-[50px] ControlPlaceHolders ControlTextInsideTextInput' placeholder='بحث'></input>
            <div className='flex-col md:flex-row flex mt-5 w-[50%]'>
                
          <select ref={StateChoiceRef} onChange={ (e) => {
       
            ChangeCenters(e.target.value);
            
            }}  className='border-2 focus:outline-none focus:border-green-400 ControlPlaceHolders m-2 min-w-[33%] h-[3rem] rounded-[10px]' placeholder='state' >
                  {
              state.map((Fdata)=>(
                <option value={Fdata.nameSchimaInput} className='ControlPlaceHolders'>{Fdata.nameSchimaInput}</option>

              ))
                  }
                  </select>
                 
                 
                 
          <select ref={CenterChoiceRef}  className='border-2 focus:outline-none focus:border-green-400 ControlPlaceHolders m-2 min-w-[33%] h-[3rem] rounded-[10px]' placeholder='center'>         
            {
              Centers.map((Fdata) => (
                <option value={Fdata.centernameSchimaInput} className='ControlPlaceHolders'   >{Fdata.centernameSchimaInput}</option>

              ))
            }  
                       </select>



          <select ref={AdsChoiceRef} className='border-2 focus:outline-none focus:border-green-400 ControlPlaceHolders m-2 min-w-[33%] h-[3rem] rounded-[10px]'>
            {
              AdsTypes.map((Fdata) => (
                <option value={Fdata.nameSchimaInput} className='ControlPlaceHolders'   >{Fdata.nameSchimaInput}</option>

              ))
            }
                  </select>
               
                  
            </div>
        <div onClick={()=>SearchFunc()} className='cursor-pointer bg-black text-white min-w-[20%] h-[3rem] flex justify-center items-center'><p>بحث</p></div>
         </div>
      
        </div>
  )
}
