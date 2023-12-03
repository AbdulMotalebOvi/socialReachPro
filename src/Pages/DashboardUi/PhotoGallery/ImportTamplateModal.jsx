import React, { useState } from 'react'
import Import from '../Tamplates/TamplateModal/ImportTemplates/Import'


const ImportTamplateModal = () => {
    let [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">Import Tamplates</button>
            <Import name='Enter Code' isOpen={isOpen} setIsOpen={setIsOpen} title='Import' />
        </>
    )
}

export default ImportTamplateModal