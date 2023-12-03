import React from 'react'
import { Link } from 'react-router-dom'
import track from '../../../assets/Logo/tracked.png'
import HidePages from '../FacebookGroup&Pages/HidePages'
import { FaBars } from 'react-icons/fa'

const Notification = () => {
    return (
        <section>
            {/* tracked  */}
            <div className='bg-white px-[29px] py-[29px]'>
                <div className="flex gap-3 items-center">
                    <img src={track} className="w-[40px] h-[29px] object-cover" alt="" />
                    <h3 className="text-[25px] font-medium">Tracked Parties</h3>
                </div>
                <div className='mt-[20px]'>
                    <div className=" w-[280px] h-[180px] rounded-lg p-4 bg-[#F4F7F8] shadow-lg shadow-[#00000026]">
                        <img
                            alt="Home"
                            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            className="h-[110px] w-[230px] rounded-md object-cover"
                        />
                        <div className=" flex justify-between items-center mt-5">
                            <span
                                className="whitespace-nowrap rounded-full bg-[#E82828] px-2.5 py-0.5 text-sm text-white"
                            >
                                1
                            </span>
                            <h4 className="font-medium text-[16px]">Marketing Madness</h4>
                            <FaBars />

                        </div>
                    </div>
                </div>
                <div className='mt-6 space-y-2'>
                    <p className='text-[#7E97A5] '>Sep 6, 2023  6:00PM</p>
                    <button className=' bg-[#FF5FC0] text-white font-semibold w-[150px] h-[35px] text-[14px] rounded'>Open Party</button>
                </div>

            </div>
            <HidePages />
        </section>
    )
}

export default Notification;