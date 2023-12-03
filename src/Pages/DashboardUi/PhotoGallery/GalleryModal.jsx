import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../Tamplates/TamplateModal/Modal';
import folderbig from '../../../assets/Logo/folder_big.png'
import { Uploader } from 'uploader';
import { UploadButton } from 'react-uploader';

const GalleryModal = ({ isOpen, setIsOpen, setImageData }) => {
    const { handleSubmit, reset, formState: { errors } } = useForm();
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [imageCounter, setImageCounter] = useState(1);

    const uploader = Uploader({ apiKey: 'free' });

    const cancelModal = () => {
        reset();
        setIsOpen(false);

    };

    const onSubmit = (data) => {
        cancelModal();
    };

    const handleUploadComplete = (files) => {
        // Generate unique IDs for each image and update the state with the uploaded files
        const updatedImageData = files.map((file, index) => ({
            ...file,
            id: imageCounter + index
        }));
        // Update the state with the uploaded files
        setImageCounter(imageCounter + files.length);
        setSelectedFiles(files);
        setImageData(updatedImageData)
    };


    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='Upload Images'>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* dropdown folder */}
                <div className="p-6 ">
                    <label htmlFor="dropdown" className="block flex items-center text-sm whitespace-nowrap gap-2 font-bold">
                        Into Folder:
                        <select
                            id="dropdown"
                            name="dropdown"
                            className="mt-1 block border w-full pl-3 pr-10 py-2 border-[#ADADAD] focus:outline-none  sm:text-sm rounded-md"
                        >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                            {/* Add more options as needed */}
                        </select>
                    </label>
                </div>
                <div className='flex flex-col space-y-2 gap-2'>
                    {/* Render the uploaded images */}
                    <p className='text-center mt-5'>Select Images</p>
                    <div className='flex gap-3 my-1'>
                        {selectedFiles.map((file, index) => (
                            <div key={index}>
                                <img src={file?.fileUrl} alt={`Uploaded Image ${index}`} className='max-w-[100px] max-h-[100px]' />
                            </div>
                        ))}
                    </div>
                    <label className='relative block overflow-hidden border-gray-200 bg-transparent focus-within:border-blue-600'>
                        <div className="text-center">
                            <UploadButton uploader={uploader} options={{ multi: true }} onComplete={handleUploadComplete}>
                                {({ onClick }) => (
                                    <button className='border text-[50px]  p-4 text-center' onClick={onClick}>
                                        <img src={folderbig} alt="" />
                                    </button>
                                )}
                            </UploadButton>
                        </div>

                        {errors.file?.type === 'required' && (
                            <p className='text-red-600 font-semibold'>File is required</p>
                        )}
                    </label>

                    <div className='flex justify-end gap-3 mt-4'>
                        <button className='bg-[#012B6D] w-[110px] h-[40px] text-white rounded text-xs' type="submit" >Save</button>
                        <button onClick={cancelModal} className='border-2 border-[#ADADAD] w-[110px] h-[40px]  rounded' type="submit" >Cancel</button>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default GalleryModal;
