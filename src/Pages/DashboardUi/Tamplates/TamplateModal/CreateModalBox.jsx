import React from 'react'
import { useForm } from 'react-hook-form';
import Modal from './Modal';

const CreateModalBox = ({ isOpen, setIsOpen, title }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
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
                <div className="flex flex-col  mt-10">
                    <div className="mb-4">
                        <label htmlFor="title" className="font-semibold flex gap-2 items-center justify-center ml-14">Title:
                            <input
                                type="text"
                                id="title"

                                className="w-full max-w-sm  border-2 border-[#ADADAD] p-2"
                                {...register('title')}
                            />
                        </label>
                    </div>

                    <label htmlFor="desc" className="font-semibold flex gap-1 items-center justify-center">Description:
                        <textarea
                            id="desc"

                            className="w-full  max-w-sm border-2 border-[#ADADAD] p-1"
                            {...register('desc')}
                        ></textarea>
                    </label>

                </div>
                <div>
                    <p className='text-[14px] mt-6'>A template will let you store and organize posts to be used later. You can alter it any time,
                        share it with friends, and re-use it anytime.</p>
                </div>

                <div className='flex justify-end gap-3 mt-4'>
                    <button className='bg-[#012B6D] w-[110px] h-[40px] text-white rounded text-xs' type="submit" >Create Folder</button>
                    <button onClick={cencelModal} className='border-2 border-[#ADADAD] w-[110px] h-[40px]  rounded' type="submit" >Cancel</button>
                </div>

            </form>
        </Modal >

    )
}

export default CreateModalBox