import React from 'react'
import { Link } from 'react-router-dom'
import track from '../../../assets/Logo/tracked.png'
import groups from '../../../assets/Logo/groups.png'
import { FaBars } from "react-icons/fa";
import HidePages from './HidePages'
import GroupBarsDrop from './GroupBarsDrop';


const Groups = () => {

    return (
        <section >
            {/* tracked  */}
            <div className='bg-white px-[29px] py-[29px]'>
                <div className="flex gap-3 items-center">
                    <img src={track} className="w-[40px] h-[29px] object-cover" alt="" />
                    <h3 className="text-[25px] font-medium">Tracked Groups</h3>
                </div>

                <div className='mt-[20px]'>
                    <Link to="" className="block w-[280px] h-[180px] rounded-lg p-4 bg-[#F4F7F8] shadow-lg shadow-[#00000026]">
                        <img
                            alt="Home"
                            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            className="h-[110px] w-[230px] rounded-md object-cover"
                        />
                        <div className="flex justify-between  items-center  my-2">
                            <span
                                className="whitespace-nowrap text-center rounded-full  sm:bg-[#E82828] mr-2 sm:mr-0 w-20 sm:w-10 h-6 sm:h-7 text-[16px] sm:text-[20px] text-black sm:text-white"
                            >
                                1
                            </span>

                            <h4 className="ml-0 sm:ml-2 whitespace-nowrap font-semibold text-[18px] sm:text-[16px]">
                                Marketing Madness
                            </h4>
                            <div>
                                {/* <FaBars /> */}
                                <GroupBarsDrop />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='flex flex-col lg:flex-row justify-between items-center my-6'>
                    <button className='bg-[#FF5FC0] text-white font-semibold w-full lg:w-[150px] h-[35px] lg:h-[35px] text-[14px] rounded mb-2 lg:mb-0 lg:mr-2'>
                        Open Group
                    </button>
                    <button className='bg-[#012B6D] text-white font-semibold w-full lg:w-[200px] h-[35px] lg:h-[35px] text-[14px] rounded'>
                        Connect Your Facebook
                    </button>
                </div>

            </div>
            {/* available pages */}
            <div className='bg-white px-[29px] py-[29px] mt-[40px]'>
                <div className="flex gap-3 items-center">
                    <img src={groups} className=" h-[29px] object-cover" alt="" />
                    <h3 className="text-[25px] font-medium">Available groups</h3>
                </div>
                <div className='flex gap-3 items-center my-6'>
                    <p className='text-[18px]'>Updated: <span className='font-bold'>just now</span></p>
                    <button className='text-black border border-[#ADADAD]  rounded font-semibold w-[130px] h-[33px] text-[14px] '>Refresh Now</button>
                </div>


            </div>
            <HidePages />
        </section>
    )
}

export default Groups