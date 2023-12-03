import React, { useState } from 'react'
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo/logo.png'
import Button from '../../../Buttons/Button/Button';
import BtnVrTwo from '../../../Buttons/ButtonVrTwo/BtnVrTwo';

const Nav = () => {
    // adding the states 
    const [isActive, setIsActive] = useState(false);


    //add the active class
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };


    //clean up function to remove the active class
    const removeActive = () => {
        setIsActive(false)
    }

    return (
        <div >
            <header className="bg-gradient-to-r from-slate-200	via-slate-100 to-slate-50">

                <nav className={`${styles.navbar}`}>

                    {/* logo */}
                    <Link to='/' className={`${styles.logo}`}><img src={logo} alt="" /> </Link>

                    {/* manubar */}
                    <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                        <li onClick={removeActive}>
                            <Link to='/' className={`${styles.navLink}`}>Home</Link>
                        </li>
                        <li onClick={removeActive}>
                            <Link to='#home' className={`${styles.navLink}`}>Catalog</Link>
                        </li>
                        <li onClick={removeActive}>
                            <Link to='#home' className={`${styles.navLink}`}>All products</Link>
                        </li>
                        <li onClick={removeActive}>
                            <Link to='#home' className={`${styles.navLink}`}>Contact</Link>
                        </li>

                        <li onClick={removeActive}>
                            <Link to='/Dashboard' >Dashboard</Link>
                        </li>
                        <li className='ml-[60px]'>
                            {/* Sign in and Sign up buttons */}
                            <div className=' flex ml-auto justify-center items-center gap-3'>
                                <Link to='/login'><Button title='Sign in' /></Link>
                                <Link to='/SignUp'><BtnVrTwo title='Create a free account' /></Link>
                            </div>
                        </li>

                    </ul>


                    {/* humberger */}
                    <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
                        <span className={`${styles.bar}`}></span>
                        <span className={`${styles.bar}`}></span>
                        <span className={`${styles.bar}`}></span>
                    </div>

                </nav>

            </header>
        </div >
    )
}

export default Nav;