import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Uploader } from 'uploader';
import { UploadButton } from 'react-uploader';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from '../PostNotification/TimePicker';
import { FaFileUpload } from 'react-icons/fa';

const SchedulePost = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const uploader = Uploader({ apiKey: 'free' });
    const onSubmit = (data) => {
        cancelModal()
        if (selectedFiles) {
            toast.success('Your Post is Successfully Scheduled!')
        }

    };
    const handleUploadComplete = (files) => {
        // Update the state with the uploaded files
        setSelectedFiles(files);
        setImageData(files)
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='bg-white  '>
            <div className=" w-[280px]   p-4      ">
                <div className='space-y-2'>
                    {/* Render the uploaded images */}
                    <p className='text-center mt -3'>Images</p>
                    <div className='flex gap-3 my-1'>
                        {selectedFiles.map((file, index) => (
                            <div key={index}>
                                <img src={file?.fileUrl} alt={`Uploaded Image ${index}`} className='max-w-[100px] max-h-[100px] w-full' />
                            </div>
                        ))}
                    </div>
                </div>

                <label className='relative block overflow-hidden border-gray-200 bg-transparent focus-within:border-blue-600'>
                    <div className="text-center">
                        <UploadButton uploader={uploader} options={{ multi: true }} onComplete={handleUploadComplete}>
                            {({ onClick }) => (
                                <button className='border text-[50px]  p-4 text-center' onClick={onClick}>
                                    <FaFileUpload className='' />
                                </button>
                            )}
                        </UploadButton>
                    </div>

                    {errors.file?.type === 'required' && (
                        <p className='text-red-600 font-semibold'>File is required</p>
                    )}
                </label>

                <div className='flex gap-2 items-center
                     mt-10 border p-2'>
                    {/* date picker */}
                    <DatePicker className=' focus:outline-dashed text-black text-xl w-3/4 ' selected={startDate} onChange={(date) => setStartDate(date)} />

                    <TimePicker />
                </div>
                <button type='submit' onClick={() => setIsOpen(!isOpen)} className='bg-[#FF5FC0] mt-10 text-white font-semibold w-[150px] h-[35px] text-[14px] rounded'>Schedule a Post</button>

            </div>
        </form>
    )
}

export default SchedulePost