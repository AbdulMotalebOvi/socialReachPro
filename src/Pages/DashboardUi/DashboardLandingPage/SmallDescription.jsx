import React from 'react'
import track from '../../../assets/Logo/tracked.png'

const SmallDescription = () => {
    return (
        <section className='bg-white rounded shadow my-10'>
            <div className='px-[29px] py-[29px]'>
                <div className='flex gap-3 items-center'>
                    <img src={track} className='h-[38px]' alt="" />
                    <h3 className='text-[25px] font-medium'>Tracked Groups</h3>
                </div>
                <div className='mt-[40px]'>
                    <table className="table-auto">
                        <thead className='text-[#012B6D] font-bold text-[20px]'>
                            <tr>
                                <th className="p-2">Status</th>
                                <th className="p-2">Queued</th>
                                <th className="p-2">Name</th>
                            </tr>
                        </thead>
                        <tbody className='text-center bg-[#F4F7F8] mt-5'>
                            <tr className=''>
                                <td className="p-2 text-[#E21717]">pause</td>
                                <td className="p-2">1</td>
                                <td className="p-2">marketing madness</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='mt-[35px]'>
                        <button className='bg-[#FF5FC0] font-medium px-2 text-white w-[180px] h-[35px]'>Track a New group</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SmallDescription