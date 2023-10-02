
import NavBarSection from '../LandingPage/NavBar'
import React, { useEffect, useState } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { LiaMoneyBillWaveAltSolid } from 'react-icons/lia'
import { BsTelephoneOutbound } from 'react-icons/bs'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router';

export default function index() {
    const [IncNumber, SetIncNumber] = useState(5)
    const [StartState, SetStartState] = useState(0)
    const [EndState, SetEndState] = useState(5)
    const [Fetcheddata, SetFetcheddata] = useState([])
    const router = useRouter();

    const { typeparam, qparam, stateparam, centerparam } = router.query;

    const NextPage = () => {
        SetEndState(Number(EndState + IncNumber))
        SetStartState(Number(StartState + IncNumber))
        GetFetchAllAds();
    }
    const PrevPage = () => {
        if (StartState > 0) {
            SetEndState(Number(EndState - IncNumber))
            SetStartState(Number(StartState - IncNumber))
            GetFetchAllAds();
        } else {
            return 0
        }

    }
    const GetFetchAllAds = async () => {
        const data = await axios.get('http://localhost:3000/api/adsfilter', {
            headers: {
                center: String(encodeURIComponent(centerparam)) ,
                state: String(encodeURIComponent(stateparam))  ,
                type: String(encodeURIComponent(typeparam))  ,
                word: String(encodeURIComponent(qparam))  ,
                start: String(encodeURIComponent(StartState))  ,
                end: EndState
            }
        }).then((response_) => {

            SetFetcheddata(response_.data.res)


        })

    }

    useEffect(() => {
        GetFetchAllAds()

    }, [EndState, StartState])


    return (
        <section className=' w-screen min-h-[100vh]	flex flex-col flex-wrap bg-white 	 '>
            <NavBarSection></NavBarSection>
          
            <div className='w-full h-full flex-1 bg-white grid grid-col-[1fr_1fr]'>
                <div className='mb-3 w-full flex justify-center content-center'> <p className='font-[500] text-[2rem] '> الاعلانات </p></div>


                <div className='flex flex-row w-full h-full flex-wrap justify-center'>

                    {
                        Fetcheddata.map((Fdata) => (
                            <div id='card' className='mr-2 ml-2 mb-5   z-5 h-[350px] w-[300px] bg-white border-2 border-[#FFBC60] rounded-[30px]  grid grid-rows-[1fr_1fr_.4fr]'>
                                <div className='bg-white rounded-se-[30px] rounded-ss-[30px]'>
                                    <img className='rounded-se-[30px] rounded-ss-[30px]' src="/analog-landscape-city-with-buildings.jpg" alt="" />
                                </div>
                                <div className='bg-white flex  flex-col'>
                                    <div className='bg-white flex  flex-col mt-5'>
                                        <div className='flex flex-row gap-2 ml-6'>
                                            <CiLocationOn size={25}></CiLocationOn>
                                            <p className='font-[500] text-[15px]'>{Fdata.stateSchimaInput} , {Fdata.centerSchimaInput} , {Fdata.streetSchimaInput} </p>

                                        </div>
                                        <div className='flex flex-row gap-2 ml-6'>
                                            <BsTelephoneOutbound size={25}></BsTelephoneOutbound>
                                            <p className='font-[500] text-[20px]'>{Fdata.phoneSchimaInput}</p>
                                        </div>
                                        <div className='flex flex-row gap-2 ml-6 '>
                                            <LiaMoneyBillWaveAltSolid size={25}></LiaMoneyBillWaveAltSolid>
                                            <p className='font-[500] text-[20px]' >{Fdata.priceSchimaInput}</p>
                                        </div>

                                    </div>

                                </div>
                                <Link href={`/details/${Fdata._id}`} className='bg-white rounded-es-[30px] rounded-ee-[30px] flex justify-center items-center '>
                                    <button className='bg-[#3AC118] text-white hover:bg-black h-[2rem] w-[8rem] rounded-full '> تفاصيل</button>
                                </Link>

                            </div>
                        ))
                    }




                </div>
                <div className='  min-w-[60%] min-h-[7rem] bg-white  flex  justify-center items-center '>

                    <div className='  rounded-lg w-[15rem] min-w-100 min-h-100 flex flex-row  justify-center items-center '>
                        <p onClick={() => PrevPage()} className='text-3xl hover:cursor-pointer hover:text-green-400 mr-3'>السابق</p>
                        <p onClick={() => NextPage()} className='text-3xl hover:cursor-pointer hover:text-green-400'>التالي</p>
                    </div>


                </div>
            </div>
        </section>
    )
}