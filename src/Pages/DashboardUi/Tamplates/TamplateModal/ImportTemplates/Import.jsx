import React from 'react'
import { useForm } from 'react-hook-form';
import Modal from '../Modal';



const Import = ({ isOpen, setIsOpen, title, name }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const cencelModal = () => {
        reset()
        setIsOpen(false)
    }
    const onSubmit = (data) => {
        cencelModal()
    }
    return (
        <Modal name={name} isOpen={isOpen} setIsOpen={setIsOpen} title='Import Image Folder'>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='flex flex-col gap-2 space-y-2'>
                    <label htmlFor="title" className="font-semibold flex gap-2 items-center justify-center mt-5">Code:
                        <input
                            type="text"
                            id="title"

                            className="w-full max-w-sm  border-2 border-[#ADADAD] p-2"
                            {...register('code')}
                        />
                    </label>

                    <div className='flex justify-end gap-3 mt-4'>
                        <button className='bg-[#012B6D] w-[110px] h-[40px] text-white rounded text-xs' type="submit" >Import</button>
                        <button onClick={cencelModal} className='border-2 border-[#ADADAD] w-[110px] h-[40px]  rounded' type="submit" >Cancel</button>
                    </div>
                </div>
            </form>
        </Modal>

    )
}

export default Import;