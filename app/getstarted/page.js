'use client'
import React from 'react';
import AppNavbar from "../components/Navbar.jsx";
import Image from 'next/image';

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 via-sky-200 to-blue-100 text-white">
      <AppNavbar />
      
      <div className="relative flex flex-col items-center justify-center min-h-screen pt-20 px-4">
        {/* Background Clouds */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-40 h-22 animate-pulse">
            <Image src="/othsky.png" alt="Cloud" layout="fill" objectFit="contain" />
          </div>
          <div className="absolute top-20 right-20 w-32 h-18 animate-pulse delay-1000">
            <Image src="/othsky.png" alt="Cloud" layout="fill" objectFit="contain" />
          </div>
          <div className="absolute bottom-40 left-1/4 w-24 h-14 animate-pulse delay-700">
            <Image src="/othsky.png" alt="Cloud" layout="fill" objectFit="contain" />
          </div>
          <div className="absolute bottom-60 right-1/4 w-32 h-18 animate-pulse delay-300">
            <Image src="/othsky.png" alt="Cloud" layout="fill" objectFit="contain" />
          </div>
        </div>

        <div className="relative z-10 bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-white/20 text-center max-w-lg w-full">
          <div className="flex justify-center mb-6">
            <Image src="/Kumomi_logo.png" alt="Kumomi Logo" width={100} height={100} />
          </div>
          <h1 className="text-5xl font-bold mb-4">Welcome to Kumomi</h1>
          <p className="text-lg text-white/80 mb-8">
            Your personal music cloud. Let's get you set up.
          </p>
          
          <div className="space-y-6">
            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
              <h3 className="text-2xl font-semibold mb-3">Step 1: Connect Spotify</h3>
              <p className="text-white/80 mb-4">
                Link your Spotify account to bring in your favorite music and playlists.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                Connect with Spotify
              </button>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
              <h3 className="text-2xl font-semibold mb-3">Step 2: Personalize Your Profile</h3>
              <p className="text-white/80 mb-4">
                Customize your profile and tell us about your music tastes.
              </p>
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                Set Up Profile
              </button>
            </div>
          </div>
          
          <p className="mt-8 text-sm text-white/60">
            By continuing, you agree to our Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
