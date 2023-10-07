import axios from 'axios'
import { getCookie } from 'cookies-next'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

export default function index() {
  const FileRef = useRef(null)
  const TitleRef = useRef(null)
  const DescRef = useRef(null)
  const centerRef = useRef(null)
  const stateRef = useRef(null)
  const StreetRef = useRef(null)
  const typeofadsRef = useRef(null)
  const selectedEndDateRef = useRef(null)
  const priceRef = useRef(null)
  const [Centers, SetCenters] = useState([])
  const [state, Setstate] = useState([])
  const [AdsTypes, SetAdsTypes] = useState([])
  const [result, Setresult] = useState('')

  const UploadFile = async (e) => {
    e.preventDefault();
    const NewDataFrom = new FormData
    Object.values(FileRef.current.files).forEach(file => {
      NewDataFrom.append('file', file)
    })
    if (!FileRef.current?.files?.length) {
      alert('Please, select file you want to upload');
      return;
    }
    const currentDate = new Date();
    const EndDateDate = new Date();
    EndDateDate.setDate(EndDateDate.getDate() + Number(selectedEndDateRef.current.value));


    const response = await fetch('http://16.171.176.203:3000/api/uploadclientadd', {
      method: 'POST',
      headers: {
        title: String(encodeURIComponent(TitleRef.current.value)) ,
        desc: String(encodeURIComponent(DescRef.current.value)),
        center: String(encodeURIComponent(centerRef.current.value)),
        state: String(encodeURIComponent(stateRef.current.value)),
        street: String(encodeURIComponent(StreetRef.current.value)) ,
        typeofads: String(encodeURIComponent(typeofadsRef.current.value)) ,
        enddata: String(EndDateDate),
        startdate: String(currentDate),
        price: String(encodeURIComponent(priceRef.current.value)),
        id: String(JSON.parse(getCookie('realstate'))[0]['_id']) ,
        phone: String(encodeURIComponent(String(JSON.parse(getCookie('realstate'))[0]['phoneSchimaInput']))) ,


      },
      body: NewDataFrom
    }).then((respon) => {
      respon.json().then((data) => {

        Setresult(data.res) 
      })
   });





  }




  const ChangeCenters = (Selection) => {

    axios.get('http://16.171.176.203:3000/api/getspecificcenters', {
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


  useEffect(() => {

    GetStateTypesListData()
    GetAdsTypesListData()
    GetCentersListData()



  }, [])

  return (
    <section  className='w-[25rem] h-[35rem] bg-white drop-shadow-2xl  flex  flex-col justify-start items-center	' >
      <p className='z-2 mt-5 mb-2 font-2xl text-3xl text-[#FFBC60]'>انشر اعلان</p>
      <div className='flex flex-col item-start w-[80%] mt-1'>
        <input ref={TitleRef} type='text' className='focus:outline-none focus:border-green-400 ControlPlaceHolders border-2 border-black rounded-lg h-[3rem] ' id='title' placeholder='العنوان'></input>
      </div>
      <div className='flex flex-col item-start w-[85%] mt-1'>
        <select ref={typeofadsRef} className=' focus:outline-none focus:border-green-400 ControlPlaceHolders border-2 border-black m-2 min-w-[60%] h-[3rem] rounded-[10px]' placeholder='center'>
          {
            AdsTypes.map((Fdata) => (
              <option value={Fdata.nameSchimaInput} className='ControlPlaceHolders'   >{Fdata.nameSchimaInput}</option>

            ))
          }
        </select>
        
      </div>
      <div className='flex flex-row item-start w-[85%] mt-1'>
        <select ref={stateRef} onChange={(e) => {

          ChangeCenters(e.target.value);

        }} className='border-2 focus:outline-none focus:border-green-400 ControlPlaceHolders m-2 min-w-[33%] h-[3rem] rounded-[10px]' placeholder='state' >
          {
            state.map((Fdata) => (
              <option value={Fdata.nameSchimaInput} className='ControlPlaceHolders'>{Fdata.nameSchimaInput}</option>

            ))
          }
        </select>



        <select ref={centerRef} className=' focus:outline-none focus:border-green-400 ControlPlaceHolders border-2 border-black m-2 min-w-[50%] h-[3rem] rounded-[10px]' placeholder='center'>
          {
            Centers.map((Fdata) => (
              <option value={Fdata.centernameSchimaInput} className='ControlPlaceHolders'   >{Fdata.centernameSchimaInput}</option>

            ))
          }  
        </select>

      </div>
      <div className='flex flex-col item-start w-[80%] mt-2 mb-2'>
        <input ref={StreetRef} type='text' className='focus:outline-none focus:border-green-400 ControlPlaceHolders border-2 border-black rounded-lg h-[3rem] ' id='title' placeholder='الشارع'></input>
      </div>

      <div className='flex flex-col item-start w-[80%] mt-1'>
        <input ref={FileRef} type='file' className='focus:outline-none focus:border-green-400 rounded-lg h-[2rem] ' id='title' placeholder='صوره المنتج'></input>
      </div>

      <div className='flex flex-row item-start w-[80%] mt-1 gap-2'>
        <input ref={priceRef} type='text' className=' focus:outline-none focus:border-green-400 ControlPlaceHolders border-2 border-black rounded-lg h-[3rem] w-[50%]' id='title' placeholder='السعر'></input>
        <select ref={selectedEndDateRef} className='focus:outline-none focus:border-green-400 ControlPlaceHolders border-2 border-black  min-w-[50%] h-[3rem] rounded-[10px]' >
          <option value="" disabled selected className='ControlPlaceHolders'>وقت انتهاء الاعلان</option>
          <option value="7"   className='ControlPlaceHolders'>7 ايام</option>
          <option value="15"   className='ControlPlaceHolders'>15 يوم</option>
          <option value="30"   className='ControlPlaceHolders'>30 يوم</option>
        </select>

      </div>
      <div className='flex flex-col item-start w-[80%] mt-1'>
        <textarea ref={DescRef} className=' focus:outline-none focus:border-green-400 ControlPlaceHolders TextAreaResizeAble min-h-[6rem]  border-2 border-black rounded-lg h-[2rem] ' id='title' placeholder='الوصف'></textarea>
      </div>

      <div className='flex flex-row gap-2 content-center items-center justify-center  w-[80%] mt-5'>

        <div onClick={UploadFile} className=' rounded-[50px] bg-[#fff] w-[8rem] h-[2rem] text-black border-2 border-black flex flex-row justify-center items-center'><p>نشر</p></div>
        <div className=' rounded-[0px] bg-[#fff] w-[8rem] h-[2rem] text-black border-2 border-black flex flex-row justify-center items-center'><p>{result}</p></div>

        <Link href={'/'} className=' rounded-[50px] bg-[#FFBC60] w-[8rem] h-[2rem] text-white flex flex-row justify-center items-center border-2 border-black'><p>رجوع</p></Link>
      </div>
    </section>
  )
}
