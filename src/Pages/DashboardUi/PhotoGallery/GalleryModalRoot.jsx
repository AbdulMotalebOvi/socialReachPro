import React, { useState } from 'react'
import GalleryModal from './GalleryModal'

const GalleryModalRoot = ({ setImageData, setSelectedImageIndex }) => {
    let [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)} className="bg-[#FF5FC0] text-white font-semibold w-full lg:w-[150px] h-[35px] lg:h-[35px] text-[14px] rounded mb-2 lg:mb-0 lg:mr-2">Upload </button>
            <GalleryModal setSelectedImageIndex={setSelectedImageIndex} setImageData={setImageData} isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}

export default GalleryModalRoot