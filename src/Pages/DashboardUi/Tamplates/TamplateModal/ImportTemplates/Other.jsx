import React, { useState } from 'react'
import Import from './Import'
import { FaCloudUploadAlt } from 'react-icons/fa'

const Other = () => {
    let [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className="border-2 border-[#ADADAD] p-2 h-[45px] rounded">Import Tamplates</button>
            <Import name='Enter Code' isOpen={isOpen} setIsOpen={setIsOpen} title='Import  Templates' />
        </>

    )
}

export default Other