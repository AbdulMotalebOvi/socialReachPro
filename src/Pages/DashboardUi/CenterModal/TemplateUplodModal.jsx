import React from 'react'
import { useForm } from 'react-hook-form';
import Modal from '../Tamplates/TamplateModal/Modal';



const TemplateUplodModal = ({ isOpen, setIsOpen, title, name }) => {
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
                    <label htmlFor='title'>
                        {title}
                    </label>

                    <input type="text" placeholder="Share Folder Code" className="input input-bordered w-full max-w-xs" id='title'  {...register('code')} />

                    <div className='flex gap-3 justify-start'>
                        <button className='btn btn-primary' type="submit" >Find Here</button>
                        <button onClick={cencelModal} className='btn btn-danger' type="submit" >Cancel</button>
                    </div>
                </div>
            </form>
        </Modal>

    )
}

export default TemplateUplodModal