import { createBrowserRouter } from "react-router-dom";
import PageLayout from "../Components/Layouts/PageLayout";
import DashboardLayout from "../Components/Layouts/DashboardLayout";
import DashboardHome from "../Pages/DashboardUi/DashboardHome";
import Groups from "../Pages/DashboardUi/FacebookGroup&Pages/Groups";
import Beta from "../Pages/DashboardUi/InstagramBeta/Beta";
import Notification from "../Pages/DashboardUi/PostNotification/Notification";
import FaceBooksTamplates from "../Pages/DashboardUi/Tamplates/FaceBooksTamplates";
import InstagramTampltes from "../Pages/DashboardUi/Tamplates/InstagramTampltes";
import Gallery from "../Pages/DashboardUi/PhotoGallery/Gallery";
import VideoGallery from "../Pages/DashboardUi/VideoGallery/VideoGallery";
import Team from "../Pages/DashboardUi/CreateTeam/Team";
import ProfilePage from "../Pages/DashboardUi/ProfileInfo/ProfilePage";
import Biling from "../Pages/DashboardUi/Biling/Biling";

import Pages from "../Pages/DashboardUi/FacebookGroup&Pages/Pages";
import SignIn from "../Components/SecurityLogin/SignIn";
import SignUp from "../Components/Register/SignUp";
import LandingPage from "../Pages/HomeLandingPage/LandingPage";
import PartTempl from "../Pages/DashboardUi/Tamplates/PartyTemplates/PartTempl";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout />,
        children: [
            {
                path: '/',
                element: <LandingPage />
            },
            {
                path: '/login',
                element: <SignIn />
            },
            {
                path: '/SignUp',
                element: <SignUp />
            }
        ]
    },
    {
        path: '/Dashboard',
        element: <DashboardLayout />,
        children: ([
            {
                path: '/Dashboard',
                element: <DashboardHome />
            },
            {
                path: '/Dashboard/groups',
                element: <Groups />
            },
            {
                path: '/Dashboard/pages',
                element: <Pages />
            },
            {
                path: '/Dashboard/beta',
                element: <Beta />
            },
            {
                path: '/Dashboard/notification',
                element: <Notification />
            },
            {
                path: '/Dashboard/facbooktemp',
                element: <FaceBooksTamplates />
            },
            {
                path: '/Dashboard/partytemplates',
                element: <PartTempl />
            },
            {
                path: '/Dashboard/instagramtemp',
                element: <InstagramTampltes />
            },
            {
                path: '/Dashboard/gallery',
                element: <Gallery />
            },
            {
                path: '/Dashboard/videoGallery',
                element: <VideoGallery />
            },
            {
                path: '/Dashboard/joinTeam',
                element: <Team />
            },
            {
                path: '/Dashboard/profileInformation',
                element: <ProfilePage />
            },
            {
                path: '/Dashboard/biling',
                element: <Biling />
            },

        ])
    }
])