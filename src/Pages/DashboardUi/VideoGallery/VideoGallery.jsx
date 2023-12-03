import React, { useState } from 'react'

import folderSmall from '../../../assets/Logo/folder.png'
import plus from '../../../assets/Logo/plus.png'
import TaskModal from '../CenterModal/TaskModal'
import ImportTamplateModal from '../PhotoGallery/ImportTamplateModal'
import ViewImage from '../PhotoGallery/ViewImage'
import UploadModal from '../PhotoGallery/UploadModal'

const VideoGallery = () => {
    let [isOpen, setIsOpen] = useState(false)
    const [imageData, setImageData] = useState([])
    console.log(imageData)
    return (
        <section className='ml-[32px] '>
            <div className='bg-white px-4 py-3 space-y-3 mt-5'>
                <div className='flex justify-between items-center'>
                    <span className='flex gap-2 items-center'>
                        <img src={folderSmall} alt="" />
                        <h3 className='text-[22px] font-semibold'>Folders</h3>
                    </span>
                    <div className='flex justify-between items-center py-2'>
                        <div className='border-2 border-[#ADADAD]'>
                            <div className='inline-flex gap-2 '>
                                <button onClick={() => setIsOpen(!isOpen)} className='border-r-2 border-[#ADADAD] p-2 '><span><img src={plus} alt="" /></span></button>
                                <TaskModal title='Create Folder' isOpen={isOpen} setIsOpen={setIsOpen} />
                                <ImportTamplateModal />
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' px-6 py-[10px]'>
                    <div className='flex gap-3 pb-2'>
                        <ViewImage imageData={imageData} />
                    </div>
                </div>

            </div>
            <UploadModal name='Video' imageData={imageData} setImageData={setImageData} />
        </section>
    )
}

export default VideoGallery