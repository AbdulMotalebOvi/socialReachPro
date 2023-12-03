import React, { useState } from 'react'
import CreateModalBox from './TamplateModal/CreateModalBox'

const CreateNewTemp = () => {
    let [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className="bg-[#FF5FC0] font-semibold text-white p-2 h-[45px] rounded ">Create New Tamplates</button>
            <CreateModalBox title=' New Templates' isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default CreateNewTemp