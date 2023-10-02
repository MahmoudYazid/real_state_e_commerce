import React, { useState } from 'react'
import WelcomePageComp from './welcomePage'
import InboxPageComp from './Inbox'
import ListsPageComp from './Lists'
import UsersPageComp from './users'
import AdvControlComp from './AdvControl'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineControl } from 'react-icons/ai'
import { BsFillInboxFill, BsReverseListColumnsReverse } from 'react-icons/bs'
import { FaSignOutAlt } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { deleteCookie, getCookie } from 'cookies-next'

export default function index() {
    const router = useRouter()
    const [CurrentComp, SetCurrentComp] = useState("") 
    const ChangePage =(Word)=>{
        SetCurrentComp(Word)

    }
  return (
      <div className='min-w-[100%] min-h-screen grid  grid-cols-[1fr] lg:grid-cols-[.1fr_1fr]'>
          <div className='border-2 border-r-black w-100 min-v-screen bg-white flex flex-row lg:flex-col gap-3 justify-start items-center'>
              <div onClick={() => ChangePage('User')}  className='flex flex-row w-100 justify-center items-center m-2 hover:text-green-400 hover:cursor-pointer'>
                  <BiUserCircle size={41} ></BiUserCircle><p className='ml-2'>User</p>

              </div>
              <div onClick={() => ChangePage('Control')}  className='flex flex-row w-100 justify-center items-center m-2 hover:text-green-400 hover:cursor-pointer'>
                  <AiOutlineControl size={41} ></AiOutlineControl><p className='ml-2' >Control</p>

              </div>
              <div onClick={() => ChangePage('inbox')}  className='flex flex-row w-100 justify-center items-center m-2 hover:text-green-400 hover:cursor-pointer'>
                  <BsFillInboxFill size={41} ></BsFillInboxFill><p className='ml-2' >inbox</p>

              </div>
              <div className='flex flex-row w-100 justify-center items-center m-2 hover:text-green-400 hover:cursor-pointer' onClick={() => ChangePage('lists')}>
                  <BsReverseListColumnsReverse size={41} ></BsReverseListColumnsReverse><p className='ml-2' >lists</p>

              </div>
              <Link onClick={()=>{
                    getCookie('realstate') ? deleteCookie('realstate') : deleteCookie('realstateadmin');
                    router.push('/')
             
              }} href={'/'}  className='flex flex-row w-100 justify-center items-center m-2 hover:text-green-400 hover:cursor-pointer'>
                  <FaSignOutAlt size={41}></FaSignOutAlt><p className='ml-2 '>Sign-Out</p>

              </Link>
             
          </div>
          {
              CurrentComp == "" ? <WelcomePageComp /> : CurrentComp == "User" ? 
              <UsersPageComp /> : CurrentComp == "Control" ? 
                      <AdvControlComp /> : CurrentComp == "inbox" ? 
                          <InboxPageComp /> : CurrentComp == "lists" ? <ListsPageComp/>: null
          }

      </div>
  )
}
