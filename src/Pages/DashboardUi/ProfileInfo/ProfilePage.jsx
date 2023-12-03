import React from 'react'
import PersonalInformation from './PersonalInformation'

const ProfilePage = () => {
    return (
        <section>
            <div className='bg-slate-100 px-4 py-3 space-y-5 mt-5'>
                <h3 className='text-[22px] font-semibold'>Update Your Profile</h3>

                <PersonalInformation />

            </div>
        </section>
    )
}

export default ProfilePage