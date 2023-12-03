import React from 'react'
import Nav from '../../Pages/Ui/Navbar/Nav'
import Footer from '../../Pages/Ui/FooterPart/Footer';
import LandingPage from '../../Pages/HomeLandingPage/LandingPage';
import { Outlet } from 'react-router-dom';



const PageLayout = () => {
    return (
        <>
            <Nav />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default PageLayout;