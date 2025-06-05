import React from "react";
import Image from "next/image";
import AppNavbar from "../components/Navbar.jsx";

export default function Profile() {
  return (
    <div className="flex flex-row">
      <div className="w-50">
        <AppNavbar />
      </div>
      <div className="bg-blue-200 w-screen px-2 text-black flex justify-center items-center min-h-screen">
        {/* Add your profile content here */}
      </div>
    </div>
  );
}
