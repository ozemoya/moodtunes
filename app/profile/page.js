import React from "react";
import Image from "next/image";
import AppNavbar from "../components/Navbar.jsx";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-400 to-sky-600 font-sans">
      <AppNavbar />

      {/* Main Content Area */}
      <main className="relative overflow-hidden min-h-screen pt-24 p-8">
        {/* Decorative Clouds */}
       
        
      

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Profile Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {/* Profile Picture */}
                <div className="w-40 h-40 rounded-full border-4 border-white bg-white overflow-hidden flex-shrink-0">
                  <Image
                    src="/Kumomi_logo.png"
                    alt="Profile Avatar"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* User Info */}
                <div className="ml-6">
                  <h1 className="text-5xl font-bold text-white mb-2">Ahmed</h1>
                  <p className="text-xl italic text-white mb-4">k.cisse</p>
                </div>
              </div>

              {/* Stats and Edit Button */}
              <div className="flex flex-col items-end gap-4">
                <div className="flex gap-8 text-white text-xl font-semibold">
                  <span><strong>847</strong> Following</span>
                  <span><strong>1.2K</strong> Followers</span>
                  <span><strong>156</strong> Posts</span>
                </div>
                <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-12 gap-8">
            {/* Left side: Posts and Tabs */}
            <div className="col-span-12 lg:col-span-7">
              {/* Navigation Tabs */}
              <div className="flex border-b border-white/20 mb-6">
                <button className="px-6 py-3 text-white font-semibold border-b-2 border-white transition-colors duration-300">
                  Posts
                </button>
                <button className="px-6 py-3 text-slate-300 hover:text-white transition-colors duration-300">
                  Music
                </button>
                <button className="px-6 py-3 text-slate-300 hover:text-white transition-colors duration-300">
                  Playlists
                </button>
                <button className="px-6 py-3 text-slate-300 hover:text-white transition-colors duration-300">
                  Likes
                </button>
              </div>

              {/* Posts Feed */}
              <div className="flex flex-col gap-6">
                {/* Post 1 */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/Kumomi_logo.png"
                      alt="User Avatar"
                      width={48}
                      height={48}
                      className="rounded-full border-2 border-white/50"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-white">Ahmed</h3>
                          <p className="text-sm text-slate-300">@k.cisse · 2h</p>
                        </div>
                      </div>
                      <p className="text-white mt-3 mb-4">Grayson is Terrible</p>
                      <div className="flex items-center gap-6 text-slate-300">
                        <button className="flex items-center gap-2 hover:text-red-400 transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
                          <span className="font-semibold">186</span>
                        </button>
                        <button className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M21 12.5C21 13.8807 19.8807 15 18.5 15C18.0322 15 17.6052 14.8442 17.25 14.6177C16.9441 15.1191 16.2502 15.5 15.5 15.5C13.8431 15.5 12.5 14.1569 12.5 12.5C12.5 10.8431 13.8431 9.5 15.5 9.5C16.2502 9.5 16.9441 9.88088 17.25 10.3823C17.6052 10.1558 18.0322 10 18.5 10C19.8807 10 21 11.1193 21 12.5ZM3 7.5C3 6.11929 4.11929 5 5.5 5C6.03219 5 6.44977 5.15581 6.75 5.3823C7.05596 4.88089 7.74983 4.5 8.5 4.5C10.1569 4.5 11.5 5.84314 11.5 7.5C11.5 9.15686 10.1569 10.5 8.5 10.5C7.74983 10.5 7.05596 10.1191 6.75 9.6177C6.44977 9.84419 6.03219 10 5.5 10C4.11929 10 3 8.88071 3 7.5ZM8.5 14.5C10.1569 14.5 11.5 15.8431 11.5 17.5C11.5 19.1569 10.1569 20.5 8.5 20.5C6.84314 20.5 5.5 19.1569 5.5 17.5C5.5 15.8431 6.84314 14.5 8.5 14.5Z"/>
                          </svg>
                          <span className="font-semibold">42</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Post 2 */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/Kumomi_logo.png"
                      alt="User Avatar"
                      width={48}
                      height={48}
                      className="rounded-full border-2 border-white/50"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-white">Ahmed</h3>
                          <p className="text-sm text-slate-300">@k.cisse · 6h</p>
                        </div>
                      </div>
                      <p className="text-white mt-3 mb-4">Yes, I goon to deltarune osts</p>
                      <div className="flex items-center gap-6 text-slate-300">
                        <button className="flex items-center gap-2 hover:text-red-400 transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
                          <span className="font-semibold">342</span>
                        </button>
                        <button className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M21 12.5C21 13.8807 19.8807 15 18.5 15C18.0322 15 17.6052 14.8442 17.25 14.6177C16.9441 15.1191 16.2502 15.5 15.5 15.5C13.8431 15.5 12.5 14.1569 12.5 12.5C12.5 10.8431 13.8431 9.5 15.5 9.5C16.2502 9.5 16.9441 9.88088 17.25 10.3823C17.6052 10.1558 18.0322 10 18.5 10C19.8807 10 21 11.1193 21 12.5ZM3 7.5C3 6.11929 4.11929 5 5.5 5C6.03219 5 6.44977 5.15581 6.75 5.3823C7.05596 4.88089 7.74983 4.5 8.5 4.5C10.1569 4.5 11.5 5.84314 11.5 7.5C11.5 9.15686 10.1569 10.5 8.5 10.5C7.74983 10.5 7.05596 10.1191 6.75 9.6177C6.44977 9.84419 6.03219 10 5.5 10C4.11929 10 3 8.88071 3 7.5ZM8.5 14.5C10.1569 14.5 11.5 15.8431 11.5 17.5C11.5 19.1569 10.1569 20.5 8.5 20.5C6.84314 20.5 5.5 19.1569 5.5 17.5C5.5 15.8431 6.84314 14.5 8.5 14.5Z"/>
                          </svg>
                          <span className="font-semibold">89</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Song Rankings */}
            <div className="col-span-12 lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="font-bold text-white text-xl mb-4">Song Rankings</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { rank: 1, song: "Redbone", artist: "Childish Gambino" },
                    { rank: 2, song: "This Is America", artist: "Childish Gambino" },
                    { rank: 3, song: "3005", artist: "Childish Gambino" },
                    { rank: 4, song: "Sweatpants", artist: "Childish Gambino" },
                    { rank: 5, song: "Bonfire", artist: "Childish Gambino" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-2 rounded-lg hover:bg-white/10 transition-colors duration-300">
                      <div className="text-2xl font-bold text-slate-300 w-8 text-center">{item.rank}</div>
                      <div>
                        <p className="font-semibold text-white">{item.song}</p>
                        <p className="text-sm text-slate-300">{item.artist}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
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