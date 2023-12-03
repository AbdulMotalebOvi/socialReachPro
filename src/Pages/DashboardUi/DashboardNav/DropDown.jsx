import { Menu, Transition } from '@headlessui/react';
import React from 'react'
import { FaChevronDown, FaEdit, FaUserEdit } from 'react-icons/fa';

const DropDown = () => {
    return (
        <div className=" text-right">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex items-center w-full justify-center rounded-md  px-4 py-2 text-[18px]  text-black">
                        Username
                        <FaChevronDown
                            className="ml-2 -mr-1 h-4 w-4 "
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>
                <Transition

                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <FaEdit
                                                className="mr-2 h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <FaUserEdit
                                                className="mr-2 h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        )}
                                        Edit
                                    </button>
                                )}
                            </Menu.Item>

                        </div>

                    </Menu.Items>
                </Transition>
            </Menu>
        </div>

    )
}

export default DropDown;