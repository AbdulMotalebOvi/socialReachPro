import React, { useState } from 'react'
import folderbig from '../../../assets/Logo/folder_big.png'
import ImageModal from './ImageModal'

const ViewImage = ({ imageData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImageId, setSelectedImageId] = useState(null);

    const openModal = (id) => {
        setSelectedImageId(id);
        setIsOpen(true);
    };

    const closeModal = () => {
        setSelectedImageId(null);
        setIsOpen(false);
    };

    // Create a filtered array containing the selected image data based on the selectedImageId
    const selectedImageData = selectedImageId !== null
        ? imageData.filter((file) => file.id === selectedImageId)
        : [];
    return (
        <>
            {imageData && imageData.length > 0 ? (
                imageData.map((file) => (
                    <div key={file.id} className='border'>
                        <img
                            src={file.fileUrl}
                            alt={`Uploaded Image ${file.id}`}
                            onClick={() => openModal(file.id)}
                            className='max-w-[100px] max-h-[100px] p-1'
                        />
                    </div>
                ))
            ) : (
                <div className='flex flex-col space-y-3'>
                    <img src={folderbig} alt="" />
                    <p>Images: {imageData.length}</p>
                </div>
            )}

            <ImageModal isOpen={isOpen} setIsOpen={setIsOpen} imageData={selectedImageData} onClose={closeModal} />
        </>

    )
}

export default ViewImage