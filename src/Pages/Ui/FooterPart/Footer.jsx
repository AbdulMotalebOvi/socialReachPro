import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo/footerLogo.png'
import { FaFacebook, FaInstagram, FaPhone, FaVoicemail } from "react-icons/fa";

const Footer = () => {
    return (
        < footer className="bg-[#012B6D] " >
            <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="flex justify-center sm:justify-start">
                            <Link to='/'><img className=' h-[120px]' src={logo} alt="" /> </Link>
                        </div>

                        <p
                            className="mt-6 max-w-md text-center leading-relaxed text-white sm:max-w-xs sm:text-left"
                        >
                            SocialReachPro has a strong sense of community built into it. You can share graphics and templates with your team members to help get off the ground running, or to inspire each other with new ideas.
                        </p>


                    </div>
                    <div>
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-white">About Us</p>

                            <ul className='text-white'>
                                <li className='list-disc my-2 ml-6'>Getting Started
                                    <ul className='mt-6'>
                                        <li className='text-[16px] font-medium list-decimal'>Facebook
                                            <ul className='ml-5   cursor-pointer space-y-1'>
                                                <li><Link className='text-white text-[14px]'>Facebook Overview</Link></li>
                                                <li><Link className='text-white text-[14px]'>Connecting Groups to Facebook</Link></li>
                                                <li><Link className='text-white text-[14px]'>Classic Facebook Business Page Connection</Link></li>
                                                <li><Link className='text-white text-[14px]'>Templates</Link></li>
                                                <li><Link className='text-white text-[14px]'>Sharing a Facebook Album</Link></li>
                                                <li><Link className='text-white text-[14px]'>Text Replacements</Link></li>
                                            </ul>
                                        </li>
                                        <li className='list-decimal'><span className='text-[16px] font-medium list-decimal my-3'>Instagram</span>
                                            <ul className='ml-5 space-y-1'>
                                                <li><Link className='text-white text-[1px]'></Link> Setting up Instagram</li>
                                                <li><Link className='text-white text-[13.5px]'> Converting your Instagram to a Business Account</Link></li>
                                                <li><Link className='text-white text-[14px]'>How often Should I post on Instagram</Link> </li>
                                            </ul>
                                        </li>
                                        <li className='list-decimal'><span className='text-[16px] font-medium list-decimal my-3'>Templates</span>
                                            <ul className='ml-5'>
                                                <li><Link className='text-white text-[14px]'>Using Templates</Link></li>
                                                <li><Link className='text-white text-[14px]'>Template Sharing Codes</Link></li>
                                            </ul>
                                        </li>

                                    </ul>
                                </li>
                                <li ><Link className='text-white text-[17px]'> What’s New</Link></li>
                                <li ><Link className='text-white text-[17px]'>FAQ</Link></li>
                                <li className='list-disc mt-4' ><Link className='text-white text-[17px]'>Contact Us</Link></li>
                            </ul>
                        </div>

                    </div>
                    <div>
                        <div className="text-center sm:text-left">

                            <ul className='text-white'>
                                <li><span className='text-[16px] font-medium list-decimal my-3'>Legal Information</span>
                                    <ul className='ml-7'>
                                        <li className='list-disc mt-4' ><Link className='text-white text-[14px]'>Privacy Policy</Link></li>
                                    </ul>
                                </li>
                                <li className='mt-5'><Link className='text-white '>Terms of Service</Link>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </footer >
    )
}
export default Footer;
