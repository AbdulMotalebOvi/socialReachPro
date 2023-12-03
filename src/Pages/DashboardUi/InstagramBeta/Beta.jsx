import React, { useState } from 'react'
import instagram from '../../../assets/Logo/Activities/instagram.png'
import InstaFramModal from './InstaFramModal'
import SchedulePost from './SchedulePost'

const Beta = () => {
    let [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <div className='bg-white px-[29px] py-[29px]'>
                <div className="flex gap-3 items-center">
                    <img src={instagram} className="w-[40px] object-cover" alt="" />
                    <h3 className="text-[25px] font-medium">Instagram</h3>
                </div>
                <div className='flex flex-col mt-10'>
                    <button className='bg-[#012B6D] text-white font-semibold w-[200px] h-[30px] text-[14px] rounded'>Connect Your Instagram</button>

                    <button onClick={() => setIsOpen(!isOpen)} className='bg-[#FF5FC0] mt-10 text-white font-semibold w-[150px] h-[35px] text-[14px] rounded'>Schedule a Post</button>
                    <InstaFramModal isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>

            </div>
            <div className='bg-white px-[29px] py-[29px] mt-10'>
                <div className="flex gap-3 items-center">
                    <img src={instagram} className="w-[40px] object-cover" alt="" />
                    <h3 className="text-[25px] font-medium">Instagram</h3>
                </div>

                <SchedulePost />


            </div>
        </div>
    )
}

export default Beta