import React from 'react'
import Image from "next/image";
import AppNavbar from '../components/Navbar.jsx';

export default function Profile() {
  return (
    <div className="flex flex-row ">
          <div className="justify-items-center w-50">
          <AppNavbar/>
          </div>
          <div className="bg-blue-200 w-screen px-2 text-black">
            PROFILE PAGE
            Use this div to fill page
            <div>
              PROFILE PICTURE
            </div>
            <div>
              WORK ON FIGMA TO GET A PROFILE DESIGN
            </div>

          </div>
    </div>
  )
}
