import React from 'react'
import SearchSection from './SearchSection'
import NavBarSection from './NavBar'
import AdminAdsCarouselSection from './AdminAdsCarousel'
import AdvPlaceSection from './AdvPlace'
import { FaWhatsappSquare } from 'react-icons/fa';

export default function index() {
  return (
      <section className=' w-screen min-h-[100vh]	flex flex-col flex-wrap bg-white 	 '>
          <NavBarSection></NavBarSection>
          <SearchSection></SearchSection>
          <AdminAdsCarouselSection/>
          <AdvPlaceSection></AdvPlaceSection>
          <FaWhatsappSquare size={60} className='cursor-pointer fixed z-3 text-green-400  bottom-0 right-0'></FaWhatsappSquare>
     
    </section>
  )
}
