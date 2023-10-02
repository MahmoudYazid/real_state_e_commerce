import React, { useRef } from 'react'

export default function RightSideLower() {
    const FileRef =useRef(null)
    const TitleRef = useRef(null)

    const UploadFile =async(e)=>{
        e.preventDefault();
        const NewDataFrom = new FormData
        Object.values(FileRef.current.files).forEach(file=>{
            NewDataFrom.append('file',file)
        })
        if (!FileRef.current?.files?.length) {
            alert('Please, select file you want to upload');
            return;
        }

        const response = await fetch('http://localhost:3000/api/uploadadminads', {
            method: 'POST',
            headers: {
                title: String(encodeURIComponent(TitleRef.current.value)),
                
            },
            body: NewDataFrom
        }).then((data) => {
            console.log(data)
        });




  
    }
  return (
      <div className='bg-white mt-1 mb-0 mr-2 ml-2 flex flex-col justify-start items-center' >
          <div type='text' className=' border-black border-b-2  m-2 w-[100%] h-[3rem]'>
              <p className=' ml-4 text-[25px]'>upload Admin ads</p>
          </div>
          <input ref={TitleRef} placeholder="title" type='text' className='border-2 focus:outline-none focus:border-green-400 ControlPlaceHolders m-2 min-w-[33%] h-[3rem] rounded-[10px]'></input>
          <input ref={FileRef} type='file' className='border-2 focus:outline-none focus:border-green-400 ControlPlaceHolders m-2 min-w-[33%] h-[2rem] rounded-[10px]' placeholder='state' >
          </input>
          <div onClick={UploadFile} className='bg-black text-white min-w-[20%] h-[2rem] flex justify-center items-center'><p>enter</p></div>


      </div>
  )
  }
