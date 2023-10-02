
import React, { useEffect, useState } from 'react'

export default function AdminAdsCarousel() {
  
  
  const [FetchedData, SetFetchedData] = useState([{ imgsrcSchimaInput :"/5149654.jpg"}])
  const [CurrentPhoto, SetCurrentPhoto] = useState(0)
  
  const changeBackGround =()=>{
    document.querySelector('#AdvPlace').style.backgroundImage = `url('/UploadedImg/${FetchedData[CurrentPhoto].imgsrcSchimaInput}')`
  }

  const GetData =  ()=>{
     fetch('http://localhost:3000/api/getalladminads',{
      method: 'GET',
    }).then((res) => {
      res.json().then((Fdata) => {
        SetFetchedData(Fdata.res)
        
      }).then(()=>{
        changeBackGround()

      })
    
    })

  }
  useEffect(()=>{
    GetData()

  }, [])

  return (
    <div id='AdvPlace' className=' AdvBackground w-screen  h-[26rem] bg-white   flex  flex-col mt-2 flex flex-row justify-center items-center border-2 border-black'>
         

        
          <div className='relative top-[14rem] flex flex-row justify-center item-center min-width-full  h-[5rem] bg-transparent'>
              {
          FetchedData.map((data, i) =>(
            <div key={i} onClick={()=>{
              SetCurrentPhoto(i)
              changeBackGround()
            
            }} className={` ${CurrentPhoto == i ? "bg-green-400" : "bg-white"} hover:bg-green-400 hover:cursor-pointer m-1  border-2 border-black bg-white flex flex-row justify-end w-[1rem] h-[1rem] rounded-full`}></div>
          ))
              }
         
        
   
           
              
          </div>
          </div>

      
  )
}
