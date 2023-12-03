import { Disclosure } from '@headlessui/react'
import hidden from '../../../assets/Logo/hidden.png'
import Chevron from '../../../assets/Logo/chevron.png'

export default function HidePages() {
    return (
        <div className="bg-white px-[29px] py-[29px] mt-[40px]">

            <div className="">
                <Disclosure defaultOpen>
                    {() => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left font-medium focus:outline-none">
                                <div className="flex gap-3 items-center">
                                    <img src={hidden} className="h-[29px] object-cover" alt="" />
                                    <h3 className="text-[25px] font-medium">Hidden Pages</h3>
                                </div>
                                <img
                                    className={`h-3 mt-3 sm:mt-0 ${open ? 'transform rotate-180' : ''} text-black`}
                                    src={Chevron}
                                    alt=""
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel
                                className={`px-4 pt-4 pb-2 text-sm ${open ? 'block' : 'hidden'}`}
                            >
                                You have no hidden pages.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

            </div>
        </div>
    )
}
