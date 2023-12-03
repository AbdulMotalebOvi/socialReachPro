import React, { useState } from 'react'
import photo from '../../../assets/Logo/Templates/image.png'
import GalleryModalRoot from './GalleryModalRoot'

const UploadModal = ({ setImageData, imageData, name }) => {

    return (
        <div className='bg-white px-4 py-3 space-y-3 mt-5'>
            <span className='flex gap-2 items-center'>
                <img src={photo} alt="" />
                <h3 className='text-[22px] font-semibold'>{name}</h3>
            </span>
            <div className='mt-5'>
                <GalleryModalRoot setImageData={setImageData} />

                <div className='my-4 flex gap-3 '>
                    {imageData && imageData.length > 0 ? (
                        imageData.map((file, index) => (
                            <div key={index} className='border'>
                                <img
                                    src={file.fileUrl}
                                    alt={`Uploaded Image ${index}`}
                                    className='max-w-[120px] p-2  max-h-[120px]'
                                />
                            </div>
                        ))
                    )
                        :
                        <p className='mt-3'>You have no file in this folder</p>

                    }
                </div>
            </div>
        </div>
    )
}

export default UploadModal