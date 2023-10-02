import Link from 'next/link'
import React from 'react'
import { MdOutlineManageAccounts, MdHome } from 'react-icons/md'
export default function SideBar() {
  return (
    <div className='border-2 border-r-black w-100 min-v-screen bg-white flex flex-col justify-start items-center'>
        <div className='flex flex-col w-100 justify-center items-center mt-3 '>
        <diiv className=' text-center w-[3rem] h-[3rem] hover:text-green-400 hover:cursor-pointer'>
        <MdOutlineManageAccounts className='hover:text-green-400 hover:cursor-pointer ml-[.5rem]' size={41}></MdOutlineManageAccounts><p>الاعدادات</p>
        </diiv>
        <Link href={'/'} className='text-center w-[3rem] h-[3rem] hover:text-green-400 hover:cursor-pointer mt-[3rem]'>
          <MdHome size={41}></MdHome><p>الصفحه الرئيسيه</p>
        </Link>
        
        </div>
    </div>
  )
}
