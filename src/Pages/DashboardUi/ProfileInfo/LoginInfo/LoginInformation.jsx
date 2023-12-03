import React from 'react'

const LoginInformation = () => {
    return (
        <div className='space-y-3'>
            <div className='flex gap-2 items-center'>
                <button className='btn bt-outline rounded-[8px]'>Resend Verification Email</button>
                <p className='text-red-400'>Pending</p>
            </div>
            <div className='flex flex-col'>
                <label className='text-slate-500 h-3 font-semibold'>
                    Password:
                </label>
                <input type="password" placeholder="Type here" className="input input-bordered rounded-[5px] max-w-xs mt-3 h-[40px]" defaultValue='123456789' />
            </div>
            <div className='flex flex-col '>
                <label className='text-slate-500 h-3 font-semibold'>
                    Confirm Password:
                </label>
                <input type="password" placeholder="Type here" className="input input-bordered rounded-[5px] max-w-xs mt-3 h-[40px]" defaultValue='123456789' />
                <p className='text-xs text-slate-500 mt-2'>Leave password fields blank unless you want to change it.</p>
            </div>
        </div>
    )
}

export default LoginInformation