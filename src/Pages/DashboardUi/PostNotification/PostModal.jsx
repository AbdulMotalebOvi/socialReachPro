import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Modal from '../Tamplates/TamplateModal/Modal';
import { FaCalendar, FaClock } from 'react-icons/fa';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from './TimePicker';

const PostModal = ({ isOpen, setIsOpen, title }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [startDate, setStartDate] = useState(new Date());

    const cencelModal = () => {
        reset()
        setIsOpen(false)
    }
    const onSubmit = (data) => {
        cencelModal()
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={title}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='flex flex-col gap-2 '>
                    <label htmlFor='title'>
                        Start Time
                    </label>
                    <div className='flex gap-2 items-center'>
                        {/* date picker */}
                        <div className='flex gap-2  items-center'>
                            <FaCalendar className='border-r-2' />
                            <DatePicker className='focus:outline-dashed text-black text-xl w-[150px]' selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaClock className='border-r-2' />
                            <TimePicker />
                        </div>
                    </div>
                    {/* title */}
                    <label htmlFor='title'>
                        Title
                    </label>
                    <input type="text" placeholder="Title here" className="input input-bordered w-full  rounded-[5px]" id='Event-Link'  {...register('Event Link')} />
                    <label htmlFor='Event Link'>
                        Event Link
                    </label>
                    <input type="text" placeholder="Event Link here" className="input input-bordered w-full  rounded-[5px]" id='title'  {...register('title')} />

                    <div className='flex gap-3  mt-4'>
                        <button className='btn btn-primary rounded-[10px]' type="submit" >Create</button>
                        <button onClick={cencelModal} className='btn btn-danger rounded-[10px]' type="submit" >Cancel</button>
                    </div>
                </div>
            </form>
        </Modal>

    )
}

export default PostModal