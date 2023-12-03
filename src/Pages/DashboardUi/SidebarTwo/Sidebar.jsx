import React from "react";
import { NavLink } from "react-router-dom";

import home from '../../../assets/Logo/home.png'
import facebook from '../../../assets/Logo/Activities/facebook.png'
import groups from '../../../assets/Logo/Activities/groups.png'
import pages from '../../../assets/Logo/Activities/pages.png'
import Instagram from '../../../assets/Logo/Activities/instagram.png'
import Post from '../../../assets/Logo/Activities/post.png'
import Email from '../../../assets/Logo/Activities/email.png'
import Template from '../../../assets/Logo/Templates/template.png'
import image from '../../../assets/Logo/Templates/image.png'
import video from '../../../assets/Logo/Templates/video.png'
import plus from '../../../assets/Logo/Templates/plus.png'
import people from '../../../assets/Logo/Account/profile.png'
import billing from '../../../assets/Logo/Account/billing.png'
import star from '../../../assets/Logo/About/star.png'
import faq from '../../../assets/Logo/About/faq.png'
import privacy from '../../../assets/Logo/LegalInfo/privacy.png'




const Sidebar = () => {



  return (

    <div className="flex flex-col  w-[330px] h-full">
      <ul className=" px-[30px] text-[20px] py-5 flex flex-col gap-1 ">
        <li>
          <NavLink style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold " : "",
              color: isActive ? "blue" : "black",
            };
          }} to={"/Dashboard"} className="link bg-white text-[#012B6D] font-bold">

            <img src={home} alt="" className="min-w-max" />
            Dashboard
          </NavLink>
        </li>
        {/* activities */}

        <div className="border mt-7 bg-white rounded border-[#ADADAD] ">
          <div className="bg-[#012B6D] text-center text-white text-[20px] h-[40px]">
            <h3 className="py-[4px]">Activities</h3>
          </div>

          <ul className="pl-[30px] py-3 space-y-3 pt-[12px]">
            <li>
              <span className="flex gap-2  items-center">
                <img src={facebook} alt="" />
                Facebook
              </span>
              <ul className="px-6 space-y-3">
                <li>
                  <NavLink style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold " : "",
                      color: isActive ? "blue" : "black",
                    };
                  }} to={'/Dashboard/groups'} className="flex gap-3 mt-3  items-center">
                    <img src={groups} alt="" />
                    Groups
                  </NavLink>
                </li>
                <li >
                  <NavLink style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "blue" : "black",
                    };
                  }} to={'/Dashboard/pages'} className="flex gap-4  items-center">
                    <img src={pages} alt="" />
                    Pages
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "blue" : "black",
                };
              }} to={'/Dashboard/beta'} className="flex gap-2  items-center">
                <img src={Instagram} alt="" />
                Instagram
              </NavLink>
            </li>

            <li>
              <NavLink to={'/Dashboard/notification'} className="flex gap-2  items-center">
                <img src={Post} alt="" />
                Post Notifications
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Planning */}
        <div className="border mt-7 bg-white rounded border-[#ADADAD] ">
          <div className="bg-[#012B6D] text-center text-white text-[20px] h-[40px]">
            <h3 className="py-[4px]">Planning</h3>
          </div>

          <ul className="pl-[30px] py-3 space-y-3 pt-[12px]">
            <li>
              <span className="flex gap-2  items-center">
                <img src={Template} alt="" />
                Templates
              </span>
              <ul className="px-6 space-y-3">
                <li>
                  <NavLink style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "blue" : "black",
                    };
                  }} to={'/Dashboard/facbooktemp'} className="flex gap-3 mt-3  items-center">
                    <img src={facebook} alt="" />
                    Facebook
                  </NavLink>
                </li>
                <li >
                  <NavLink style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "blue" : "black",
                    };
                  }} to={'/Dashboard/instagramtemp'} className="flex gap-4  items-center">
                    <img src={Instagram} alt="" />
                    Instagrm
                  </NavLink>
                </li>

              </ul>
            </li>
            <li>
              <NavLink style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "blue" : "black",
                };
              }} to={'/Dashboard/gallery'} className="flex gap-2  items-center">
                <img src={image} alt="" />
                Image Gallery
              </NavLink>
            </li>
            <li>
              <NavLink style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "blue" : "black",
                };
              }} to={'/Dashboard/videoGallery'} className="flex gap-2  items-center">
                <img src={video} alt="" />
                Video Gallery
              </NavLink>
            </li>

          </ul>
        </div>
        {/* team */}
        <div className="border mt-7 bg-white rounded border-[#ADADAD] ">
          <div className="bg-[#012B6D] text-center text-white text-[20px] h-[40px]">
            <h3 className="py-[4px]">Teams</h3>
          </div>

          <ul className="pl-[30px] py-3 space-y-3 pt-[12px]">
            <li >
              <NavLink to={'/Dashboard/joinTeam'} className="flex gap-3 mt-3  items-center">
                <img src={plus} alt="" />
                Join / Create Team
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Account */}
        <div className="border mt-7 bg-white rounded border-[#ADADAD] ">
          <div className="bg-[#012B6D] tspace-y-3 text-center text-white text-[20px] h-[40px]">
            <h3 className="py-[4px]">Account</h3>
          </div>

          <ul className="pl-[30px] py-3 space-y-3 pt-[12px]">
            <li >
              <NavLink to={'/Dashboard/groups'} className="flex gap-3 mt-3  items-center">
                <img src={people} alt="" />
                Profile
              </NavLink>
            </li>

            <li >
              <NavLink to={'/Dashboard/groups'} className="flex gap-3 mt-3  items-center">
                <img src={billing} alt="" />
                Billing
              </NavLink>
            </li>
          </ul>
        </div>
        {/* About */}
        <div className="border mt-7 bg-white rounded border-[#ADADAD] ">
          <div className="bg-[#012B6D] tspace-y-3 text-center text-white text-[20px] h-[40px]">
            <h3 className="py-[4px]">About Us</h3>
          </div>

          <ul className="pl-[30px] py-3 space-y-3 pt-[12px]">
            <li >
              <NavLink to={'/Dashboard/groups'} className="flex gap-3 mt-3  items-center">
                <img src={star} alt="" />
                Getting Started
              </NavLink>
            </li>
            <li >
              <NavLink to={'/Dashboard/groups'} className="flex gap-3 mt-3  items-center">
                <img src={faq} alt="" />
                FAQs
              </NavLink>
            </li>
            <li >
              <NavLink to={'/Dashboard/groups'} className="flex gap-3 mt-3  items-center">
                <img src={Email} alt="" />
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Privacy */}
        <div className="border mt-7 bg-white rounded border-[#ADADAD] ">
          <div className="bg-[#012B6D] tspace-y-3 text-center text-white text-[20px] h-[40px]">
            <h3 className="py-[4px]">Legal Info</h3>
          </div>

          <ul className="pl-[30px] py-3 space-y-3 pt-[12px]">
            <li >
              <NavLink to={'/Dashboard/groups'} className="flex gap-3 mt-3  items-center">
                <img src={privacy} alt="" />
                Privacy Policy
              </NavLink>
            </li>
            <li >
              <NavLink to={'/Dashboard/groups'} className="flex gap-3 mt-3  items-center">
                <img src={privacy} alt="" />
                Terms of Service
              </NavLink>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
