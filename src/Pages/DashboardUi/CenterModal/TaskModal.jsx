import React from 'react'
import { useForm } from 'react-hook-form';
import Modal from '../Tamplates/TamplateModal/Modal'
import shape from '../../../assets/Logo/Shape.png'


const TaskModal = ({ isOpen, setIsOpen, title }) => {
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
                <div className='flex flex-col gap-2 mt-5 '>
                    <label htmlFor='title' className='font-semibold'>
                        Enter a Template Share Code Below:
                    </label>

                    <div className='flex'>
                        <input {...register('title')} id='text' type="text" placeholder="Type here" className="w-full max-w-xs border-2 border-[#ADADAD] p-2 "   {...register('code')} />
                        <span className='bg-[#012B6D] p-2 w-[40px]'><img className='text-center' src={shape} alt="" /></span>

                    </div>

                    <div className='flex justify-end mt-4'>

                        <button onClick={cencelModal} className=' border-2 border-[#ADADAD] w-[120px] h-[45px] rounded' type="submit" >Cancel</button>
                    </div>
                </div>
            </form>
        </Modal>

    )
}

export default TaskModal