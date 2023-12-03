import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/Logo/logo.png';
import DropDown from '../../Pages/DashboardUi/DashboardNav/DropDown';
import banner from '../../assets/Banner/Dashboard_banner.png';
import Sidebar from '../../Pages/DashboardUi/SidebarTwo/Sidebar';

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <div className="px-4 py-2 h-[110px] shadow mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-12">
                <div className="flex items-center justify-between">
                    <Link to='/'>
                        <img className="w-[90px] h-[90px] " src={logo} alt="" />
                    </Link>
                    <button className="lg:hidden" onClick={toggleSidebar}>
                        {isSidebarOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <ul
                        className={`lg:flex items-center space-x-8 ${isSidebarOpen ? 'hidden' : 'lg:flex'
                            }`}
                    >
                        <li>
                            <DropDown />
                        </li>
                    </ul>
                </div>
            </div>
            <main
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundSize: 'cover',
                    objectFit: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh !important',
                    width: '100%',
                }}
            >
                <div className="flex gap-5">
                    <div
                        className={`lg:w-60 ${isSidebarOpen ? 'bg-white text-black' : 'hidden lg:block'
                            } transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-60'
                            } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
                    >
                        <Sidebar />
                    </div>
                    <div className="flex-1 max-w-6xl mx-auto my-5">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;


