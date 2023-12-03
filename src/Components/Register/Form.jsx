import React, { useState } from 'react'

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../Buttons/Button/Button";
import ButtonWhite from "../../Buttons/ButtonVrTwo/BtnVrTwo";


export default function Form() {
    const [error, setError] = useState()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const submit = (data) => {
        console.log(data)

    };
    return (
        <div className=" border-2 bg-white border-[#eaedff] max-w-screen-lg mx-auto">
            <div className="px-10 py-10">

                <form onSubmit={handleSubmit(submit)} className="w-full flex flex-col justify-center space-y-5">
                    {/* username */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className='space-y-2'>
                            <label className="font-semibold" htmlFor="name">First Name</label>
                            <input
                                className="w-full rounded-lg border focus:outline-none border-[#D0D2D3] p-2 text-sm"

                                type="name"
                                id="name"
                                {...register("firstName", { required: true })}
                            />
                        </div>
                        <div className='space-y-2'>
                            <label className="font-semibold" htmlFor="name">Last Name</label>
                            <input
                                className="w-full rounded-lg border focus:outline-none border-[#D0D2D3] p-2 text-sm"

                                type="name"
                                id="name"
                                {...register("lastname", { required: true })}
                            />
                        </div>


                    </div>
                    {/* email */}
                    <div className="form-control">
                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 space-y-2'>
                            <div className='space-y-2 '>
                                <label className="font-semibold" htmlFor="email">Email</label>
                                <input
                                    className="w-full rounded-lg border focus:outline-none border-[#D0D2D3] p-2 text-sm"

                                    type="email"
                                    id="email"
                                    {...register("email", { required: true })}
                                />
                            </div>
                            {/* select user or manager */}
                            <div className='space-y-2 '>
                                <label htmlFor="select user or manager" className="block font-semibold ">
                                    Select user / Manager
                                </label>
                                <select
                                    name="HeadlineAct"
                                    id="HeadlineAct"
                                    className="space-y-3 max-w-lg rounded-lg border focus:outline-none border-[#D0D2D3] p-2 mb-4 text-sm"
                                    {...register("optoins", { required: true })}
                                >
                                    <option value="">Select User / Manager</option>
                                    <option value="User">User</option>
                                    <option value="Manager">Manager</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    {/* password */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className='space-y-2'>
                            <label className="font-semibold" htmlFor="name">Password</label>
                            <input
                                className="w-full rounded-lg border focus:outline-none border-[#D0D2D3] p-2 text-sm"

                                type="password"
                                id="password"
                                {...register("password", { required: true })}
                            />
                        </div>
                        <div className='space-y-2'>
                            <label className="font-semibold" htmlFor="name">Confirm Password</label>
                            <input
                                className="w-full rounded-lg border focus:outline-none border-[#D0D2D3] p-2 text-sm"

                                type="pasword"
                                id="password"
                                {...register("confirmPassword", { required: true })}
                            />
                        </div>


                    </div>
                    <div className=" mt-10 ">
                        <button className='bg-[#012B6D] text-white font-semibold w-[150px] h-[40px] text-[14px] rounded'>Create</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
