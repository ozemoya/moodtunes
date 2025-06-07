import React from "react";
import Image from "next/image";
import AppNavbar from "../components/Navbar.jsx";

export default function Profile() {
  return (
    <div className="flex flex-row">
      <div className="w-50">
        <AppNavbar />
      </div>
      <div className="bg-blue-200 w-screen text-black flex">
        <div className="flex bg-sky_blue h-48 w-screen border-b-2">
          {/*Profile*/}
          <Image  
              src="/Blank_photo.png"
              alt="Profile Picture"
              width={100}
              height={100}
              priority
              className="w-[9rem] h-[9rem] mx-10 my-5"
          />
          {/*The User Info*/}
          <ul className="my-6">
            <h1 className="text-5xl text-white">
              Username
            </h1>
            <h2 className="px-1 text-blue-300">
              k.Adress
            </h2>
            <p className="px-1 text-sm text-white">
              I LOVE! Solo Leveling. Hiroyuki Sawano Fan!
            </p>
          </ul>
          {/* Edit Button*/}
          <div className="px-4 my-6">
            <a href="editprofile" className="p-2 text-white font-bold border border-white-100 flex bg-sky_blue rounded-3xl hover:bg-blue-200">
              Edit Profile
            </a>
          </div>
          <div className="px-3 my-6 text-white">
            <ul>
              <li>
                {0} Following
              </li>
              <li>
                {0} Followers
              </li>
              <li>
                {0} Posts
              </li>
              <li>
                {0} Songs Ranked
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* For sum later
    > Also find why the side scroll/why so elongated
      <div className="flex flex-row">
          <div className=" bg-sky_blue">
            Posts
          </div>
          <div className="bg-blue-900">
            Song Ranking
          </div>
      </div>
    */}