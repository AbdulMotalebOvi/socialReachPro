import React from 'react'
import facebook from '../../../../assets/Logo/Activities/facebook.png'
import image from '../../../../assets/Clients/img-1.jpg'
import { FaBars } from 'react-icons/fa'
import Drop from './DropDown/Drop'

const PartTempl = () => {
    return (
        <section>
            <div className='bg-white px-4 py-3 space-y-5 mt-5'>
                <div className='flex justify-between items-center'>
                    <div className="flex gap-3 items-center">
                        <img src={facebook} className="w-[40px] object-cover" alt="" />
                        <h3 className="text-[25px] font-medium">1st Party Template</h3>
                    </div>
                    <button className='text-red-600'>Delete</button>
                </div>
                <div className='flex justify-between items-center py-7'>
                    <button className="bg-[#FF5FC0] font-semibold text-white px-4 py-1  h-[45px] rounded ">New Posts</button>
                    <div className='border-2 border-[#ADADAD]'>
                        <div className='inline-flex gap-2 '>
                            <button className='border-r-2 border-[#ADADAD] p-2 '>Share</button>
                            <button className='border-r-2 border-[#ADADAD] p-2'>Import Post</button>
                            <button className='border-r-2 border-[#ADADAD] p-2'>Move to Folder</button>
                            <button className='p-2'>Duplicate</button>
                        </div>
                    </div>
                </div>
                <div className='bg-[#adadad0f]'>
                    <div className='px-[12px] py-3'>
                        <div className='flex gap-2'>
                            <img className='w-[60px] h-[60px]' src={image} alt="" />
                            <p className='font-bold text-[13px]'>Part 1</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end'>

                    <Drop />
                </div>
            </div>
        </section>
    )
}

export default PartTempl