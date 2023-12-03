import React from 'react'
import { FaPlusCircle, FaRegSave, FaSave, FaTrash, FaUpload } from 'react-icons/fa'
import Business from './PersonalInformation/Business'
import TimezoneDropdown from './PersonalInformation/TimezoneDropdown'
import LoginInformation from './LoginInfo/LoginInformation'
import NotificationSettings from './Others/NotificationSettings'

const PersonalInformation = () => {
    return (

        <div className="bg-gray-100">
            <div className="container mx-auto py-3">
                <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div className="col-span-4 sm:col-span-3">
                        <div className="bg-white shadow rounded-lg p-6">
                            <div className="flex flex-col items-center">
                                <img src="https://randomuser.me/api/portraits/men/94.jpg" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">

                                </img>


                                <div className="mt-6 flex  gap-2 justify-center">
                                    <button className="btn btn-sm btn-outline flex gap-2 "><span><FaUpload /></span>Upload Image</button>
                                    <button className="btn btn-sm  btn-error flex gap-2 "><span><FaTrash /></span>Delete</button>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-span-4 sm:col-span-9">
                        {/* personal information */}

                        <div className="bg-white shadow rounded-lg p-6">
                            <div>
                                <h2 className="text-[20px] font-bold mb-4">Personal Information</h2>
                                <div className='flex gap-2 items-center'>
                                    <div className='flex flex-col'>
                                        <label className='text-slate-800 font-semibold'>
                                            Name:
                                        </label>
                                        <input type="text" placeholder="Type here" className="input input-bordered rounded-[5px] w-full mt-3 h-[40px]" defaultValue='John DOe' />
                                    </div>
                                    <Business />
                                    <TimezoneDropdown />
                                </div>
                                <div className='mt-6'>
                                    <button className='btn btn-outline text-sm fl;ex gap-2 items-center'>Save Changes <span><FaSave /></span></button>
                                </div>
                            </div>
                            {/* login information */}
                            <div>
                                <div className='space-y-2 mt-5'>
                                    <h2 className="text-[20px] font-bold ">Login Information</h2>

                                    <LoginInformation />

                                </div>
                                <div className='mt-6'>
                                    <button className='btn btn-outline text-sm flex gap-2 items-center'>Save Login Information <span><FaSave /></span></button>
                                </div>
                            </div>

                            {/* Emails and Notification settings */}

                            <div>
                                <div className='space-y-2 mt-5'>
                                    <h2 className="text-[20px] font-bold ">Additional Emails</h2>
                                    <div className='flex items-center'>
                                        <button className='btn btn-outline text-sm flex gap-2 items-center'><span><FaPlusCircle /></span> Add Email Address </button>
                                    </div>

                                </div>
                                <div className='mt-6'>
                                    <h2 className="text-[20px] font-bold "> Notification Settings</h2>

                                    <NotificationSettings />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInformation