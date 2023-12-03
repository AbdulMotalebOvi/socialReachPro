import React, { useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import TaskModal from '../CenterModal/TaskModal'
import folder from '../../../assets/Logo/folder.png'
import instagram from '../../../assets/Logo/Activities/instagram.png'
import CreateNewTemp from './CreateNewTemp'
import Other from './TamplateModal/ImportTemplates/Other'


const InstagramTampltes = () => {
    let [isOpen, setIsOpen] = useState(false)
    return (
        <section className='mt-5'>
            <div className='bg-white px-4 py-3 space-y-5 mt-5'>
                <div className="flex gap-3 items-center">
                    <img src={folder} className="w-[40px] object-cover" alt="" />
                    <h3 className="text-[25px] font-medium">Folders</h3>
                </div>
                <div className='flex gap-2 items-center'>
                    {/* modal */}
                    <button onClick={() => setIsOpen(!isOpen)} className="border-2 p-3"><span><FaPlusCircle /></span></button>
                    <TaskModal title='Create Folder' isOpen={isOpen} setIsOpen={setIsOpen} />

                    <button className="border-2 border-[#ADADAD] p-2 h-[45px] rounded ">All Tamplates</button>
                    <button className="border-2 border-[#ADADAD] p-2 h-[45px] rounded ">Unsorted Tamplates</button>
                </div>
            </div>
            <div className='bg-white px-4 py-3 space-y-5 mt-5'>
                <div className="flex gap-3 items-center">
                    <img src={instagram} className=" object-cover" alt="" />
                    <h3 className="text-[25px] font-medium">Instagram Tamplates</h3>
                </div>

                <div className='flex gap-2 items-center'>
                    <CreateNewTemp />
                    <Other />
                </div>
            </div>
            <div className='bg-white px-4 py-3  '>
                <div className='border border-[#ADADAD] p-3'>
                    <Link to='/Dashboard/partytemplates' className="flex flex-col space-y-3">
                        <span
                            className="whitespace-nowrap rounded-full bg-[#012B6D]  w-[36px] h-[22px] text-sm text-center  text-white"
                        >
                            1
                        </span>
                        <p className='font-medium'>1st Party Template</p>

                    </Link>
                </div>
                <div className='border border-[#ADADAD] p-3 mt-[22px]'>
                    <Link to='/Dashboard/partytemplates' className="flex flex-col space-y-3">
                        <span
                            className="whitespace-nowrap rounded-full bg-[#012B6D]  w-[36px] h-[22px] text-sm text-center  text-white"
                        >
                            6
                        </span>
                        <p className='font-medium'>Sample Template</p>

                    </Link>
                </div>
            </div>
        </section >
    )
}

export default InstagramTampltes