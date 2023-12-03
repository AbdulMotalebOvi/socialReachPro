import React from 'react'
import Modal from '../Tamplates/TamplateModal/Modal'
import rename from '../../../assets/Logo/rename.png'

const ImageModal = ({ isOpen, setIsOpen, imageData }) => {
    const cancelModal = () => {

        setIsOpen(false);

    };
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='View Image'>
            <div className='bg-white px-4 py-3 items-center'>
                <div className='flex gap-2 justify-center items-center mb-5'>
                    <p>Image Name </p>
                    <img src={rename} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    {
                        imageData && imageData.length > 0 && (
                            imageData.map((file, index) => (
                                <div key={index} className='border'>

                                    <img
                                        src={file.fileUrl}
                                        alt={`Uploaded Image ${index}`}
                                        onClick={() => setIsOpen(!isOpen)}
                                        className='max-w-sm'
                                    />
                                    {/* </button> */}


                                </div>
                            ))
                        )
                    }
                    <div className="p-6 w-full">
                        <label htmlFor="dropdown" className="block flex items-center text-sm whitespace-nowrap gap-2 font-bold">
                            Move to:
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
                </div>
                <div className='flex justify-end gap-3 mt-4'>
                    <button className='bg-[#012B6D] w-[110px] h-[40px] text-white rounded text-xs' type="submit" >Save</button>
                    <button onClick={cancelModal} className='border-2 border-[#ADADAD] w-[110px] h-[40px]  rounded' type="submit" >Cancel</button>
                </div>
            </div>
        </Modal>
    )
}

export default ImageModal