import React, { useState } from 'react'
import { FaChevronCircleRight } from 'react-icons/fa'
import plus from '../../../assets/Logo/Path.png'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Team = () => {
    let [isOpen, setIsOpen] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        cancelModal()
    }
    const cancelModal = () => {
        reset();
        setIsOpen(false);
    };
    return (
        <section className='mt-5'>
            <div className='bg-white px-[29px] py-[29px]'>
                <div className="flex gap-3 items-center">
                    <img src={plus} className="w-[30px] h-[30px]  object-cover" alt="" />
                    <h3 className="text-[25px] font-medium">Join a Team</h3>
                </div>

                {/* 
                <button onClick={() => setIsOpen(!isOpen)} className="btn btn-outline flex gap-2 ml-3"><span><FaPlusCircle /></span>Join</button>
                <TemplateUplodModal name='Enter the code and join team' title='Enter code' isOpen={isOpen} setIsOpen={setIsOpen} /> */}
                <p className='text-xs'>
                    A team allows its members to share templates and images without needing a share code. If there's a team you want to join, enter their code below:
                </p>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className='flex flex-col gap-2 space-y-2'>


                            <input type="text" placeholder="Share Folder Code" className="input input-bordered w-full max-w-xs" id='title'  {...register('code')} />

                            <div className='flex gap-3 justify-start'>
                                <button className='btn btn-primary' type="submit" >Find Here</button>
                                <button onClick={cancelModal} className='btn btn-danger' type="submit" >Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <Link className='flex text-sm gap-1 items-center  text-blue-500'>
                    How to use teams <span><FaChevronCircleRight /></span>
                </Link> */}
            </div>
            <div className='bg-slate-100 px-4 py-3 space-y-5 mt-5'>
                <h3 className='text-[22px] font-semibold'>Create A Team</h3>

                <p>
                    Create a team so you can share templates and images with your teammates.
                </p>
                <p>

                    You must have a verified email address before you can create a team. Please visit the <Link className='text-blue-500 text-sm'>profile
                    </Link> page to verify your email address.

                </p>
                <Link className='flex text-sm gap-1 items-center  text-blue-500'>
                    How to create and run a team <span><FaChevronCircleRight /></span>
                </Link>
            </div>
        </section>
    )
}

export default Team;