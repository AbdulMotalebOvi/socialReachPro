import React from 'react'
import { Link } from 'react-router-dom'
import track from '../../../assets/Logo/tracked.png'
import groups from '../../../assets/Logo/groups.png'
import HidePages from './HidePages'


const Pages = () => {
    return (
        <section >
            {/* tracked  */}
            <div className='bg-white px-[29px] py-[29px]'>
                <div className="flex gap-3 items-center">
                    <img src={track} className="w-[40px] h-[29px] object-cover" alt="" />
                    <h3 className="text-[25px] font-medium">Tracked Pages</h3>
                </div>
                <div className='flex justify-between items-center my-6'>
                    <p>You are not tracking any pages right now.</p>
                    <button className='bg-[#012B6D] text-white font-semibold w-[200px] h-[30px] text-[14px] rounded'>Connect Your Facebook</button>
                </div>
            </div>
            {/* available pages */}
            <div className='bg-white px-[29px] py-[29px] mt-[40px]'>
                <div className="flex gap-3 items-center">
                    <img src={groups} className=" h-[29px] object-cover" alt="" />
                    <h3 className="text-[25px] font-medium">Available Pages</h3>
                </div>
                <div className='flex gap-3 items-center my-6'>
                    <p className='text-[18px]'>Updated: <span className='font-bold'>just now</span></p>
                    <button className='text-black border border-[#ADADAD]  rounded font-semibold w-[130px] h-[33px] text-[14px] '>Refresh Now</button>
                </div>
                <div>
                    <Link to="" className="block w-[280px] h-[230px] rounded-lg p-4 bg-[#F4F7F8] shadow-lg shadow-[#00000026
]">
                        <img
                            alt="Home"
                            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            className="h-[110px] w-[230px] rounded-md object-cover"
                        />
                        <div className="mt-2">
                            <dd className="font-medium">Marketing Madness</dd>
                            <div className="mt-6 flex items-center justify-between">
                                <button className='bg-[#FF5FC0] w-[60px] h-[30px] text-white rounded font-semibold text-sm'>Track</button>
                                <button className='bg-[#012B6D] w-[60px] h-[30px] text-white rounded text-sm font-semibold'>Hide</button>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
            <HidePages />
        </section>
    )
}

export default Pages