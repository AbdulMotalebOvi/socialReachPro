import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'

const NotificationSettings = () => {
    return (
        <table className="w-full">
            <tbody>
                <tr>
                    <td className="py-1 font-semibold">Sounds :</td>
                    <td className="py-1">
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <input type="checkbox" className="checkbox checkbox-warning" />
                            </label>
                        </div>
                    </td>
                    <td className="py-1 text-slate-500">Play chime when a post completes processing.</td>
                </tr>
                <tr>
                    <td className="py-1 font-semibold">Comment Notification:</td>
                    <td className="py-1">
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <input type="checkbox" className="checkbox checkbox-warning" />
                            </label>
                        </div>
                    </td>
                    <td className="py-1 text-slate-500">Get a pop-up on Vizzlie when it's time for a scheduled comment to go out.</td>
                </tr>

                <tr>
                    <td className="py-1 font-semibold">Email Payment receipts
                        :</td>
                    <td className="py-1">
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <input type="checkbox" className="checkbox checkbox-warning" />
                            </label>
                        </div>
                    </td>

                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td><div className='flex items-center'>
                        <button className='btn btn-outline text-sm flex gap-2 items-center'><span><FaPlusCircle /></span> Save all notification setting</button>
                    </div></td>
                </tr>
            </tbody>
        </table>

    )
}

export default NotificationSettings