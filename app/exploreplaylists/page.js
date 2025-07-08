import React from 'react';
import AppNavbar from "../components/Navbar.jsx";

// Cloud component for decorative elements
const Cloud = ({ size = "md", position = "static", className = "" }) => {
  const sizeClasses = {
    sm: "w-16 h-10",
    md: "w-24 h-14",
    lg: "w-32 h-18",
    xl: "w-40 h-22"
  };

  return (
    <div className={`${position} ${className}`}>
      <svg
        className={`${sizeClasses[size]} text-white opacity-80`}
        viewBox="0 0 100 60"
        fill="currentColor"
      >
        <path d="M25 40c-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15 2.337 0 4.546.534 6.52 1.487C34.216 5.135 40.13 1 47 1c8.837 0 16 7.163 16 16 0 1.487-.203 2.923-.581 4.281C65.456 22.389 68 25.28 68 28.75c0 4.142-3.358 7.5-7.5 7.5H25z"/>
      </svg>
    </div>
  );
};

const ExplorePlaylists = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 via-sky-200 to-blue-100">
      <AppNavbar />
      
      {/* Main Content Area with Sky Background */}
      <div className="relative overflow-hidden pt-24">
        {/* Floating Clouds Background */}
        <div className="absolute inset-0 overflow-hidden">
          <Cloud size="xl" position="absolute" className="top-10 left-10 animate-pulse" />
          <Cloud size="lg" position="absolute" className="top-20 right-20 animate-pulse delay-1000" />
          <Cloud size="md" position="absolute" className="top-32 left-1/3 animate-pulse delay-500" />
          <Cloud size="sm" position="absolute" className="top-40 right-1/3 animate-pulse delay-1500" />
          <Cloud size="lg" position="absolute" className="bottom-40 left-1/4 animate-pulse delay-700" />
          <Cloud size="md" position="absolute" className="bottom-60 right-1/4 animate-pulse delay-300" />
          <Cloud size="xl" position="absolute" className="bottom-80 left-1/2 animate-pulse delay-1200" />
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 flex justify-center items-start min-h-screen px-4 py-8">
          <div className="flex flex-col gap-8 w-full max-w-6xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white drop-shadow-lg mb-2">
                Explore Playlists
              </h1>
              <p className="text-lg text-blue-100 drop-shadow-md">
                Discover curated playlists from the community
              </p>
            </div>

            {/* Playlist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Playlist Card 1 */}
              <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Chill Vibes</h3>
                <p className="text-white/80 mb-3">Relaxing tunes for a peaceful day</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">42 songs</span>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
                    Play
                  </button>
                </div>
              </div>

              {/* Playlist Card 2 */}
              <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Workout Pump</h3>
                <p className="text-white/80 mb-3">High-energy tracks for your workout</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">38 songs</span>
                  <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
                    Play
                  </button>
                </div>
              </div>

              {/* Playlist Card 3 */}
              <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="w-full h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-xl mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Focus Mode</h3>
                <p className="text-white/80 mb-3">Instrumental music for deep work</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">56 songs</span>
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
                    Play
                  </button>
                </div>
              </div>

              {/* Playlist Card 4 */}
              <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="w-full h-48 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Throwback Hits</h3>
                <p className="text-white/80 mb-3">Classic songs from the past decades</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">73 songs</span>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
                    Play
                  </button>
                </div>
              </div>

              {/* Playlist Card 5 */}
              <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="w-full h-48 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Late Night</h3>
                <p className="text-white/80 mb-3">Smooth sounds for nighttime listening</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">29 songs</span>
                  <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
                    Play
                  </button>
                </div>
              </div>

              {/* Playlist Card 6 */}
              <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="w-full h-48 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Road Trip</h3>
                <p className="text-white/80 mb-3">Perfect songs for your next adventure</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">64 songs</span>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
                    Play
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePlaylists;
