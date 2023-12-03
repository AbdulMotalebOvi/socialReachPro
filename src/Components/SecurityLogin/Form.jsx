import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


export default function Form() {
    const [error, setError] = useState()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const submit = (data) => {
        console.log(data)
    }

    return (
        <div className="my-10 border-2 bg-white border-[#eaedff] max-w-screen-sm mx-auto">
            < div className="px-3 py-5" >
                <form onSubmit={handleSubmit(submit)} className="max-w-lg mx-auto flex flex-col justify-center">
                    <div className="form-control space-y-4 mt-8">
                        {/* email  */}
                        <div className='space-y-2 '>
                            <label className="font-semibold" htmlFor="email">Email</label>
                            <input
                                className="w-full rounded-lg border focus:outline-none border-[#D0D2D3] p-2 text-sm"

                                type="email"
                                id="email"
                                {...register("email", { required: true })}
                            />
                        </div>
                        {/* password */}
                        <div className='space-y-2'>
                            <label className="font-semibold" htmlFor="name">Password</label>
                            <input
                                className="w-full rounded-lg border focus:outline-none border-[#D0D2D3] p-2 text-sm"

                                type="password"
                                id="password"
                                {...register("password", { required: true })}
                            />
                        </div>
                    </div>
                    <div className="mt-10">
                        <button className='bg-[#012B6D] text-white font-semibold w-[150px] h-[40px] text-[14px] rounded'>Log in</button>
                    </div>
                </form>
                <div className="ml-11">
                    <h4 className='my-3'> Don’t have an account? <Link to='/SignUp' className="text-[16px] font-semibold text-[#012B6D]">Sign Up</Link></h4>
                </div>
            </div >
        </div >
    )
}
