import React from "react";
import AppNavbar from "../components/Navbar.jsx";
import Image from "next/image";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-400 to-sky-600 font-sans">
      <AppNavbar />
      
      {/* Main Content Area */}
      <main className="relative overflow-hidden min-h-screen pt-24 p-8">
        {/* Decorative Clouds */}

       

        {/* Content Grid */}
        <div className="relative z-10 grid grid-cols-12 gap-8">
          
          {/* Middle Column: Post Feed */}
          <div className="overflow-y-auto  max-h-[830px] col-span-12 lg:col-span-9 flex flex-col gap-6">
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
                      <h3 className="font-bold text-white">LeBron</h3>
                      <p className="text-sm text-slate-300">@k.theGoat · 2h</p>
                    </div>
                    <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-full text-sm transition-colors duration-300">
                      Follow
                    </button>
                  </div>
                  <p className="text-white mt-3 mb-4">I think Multiversus was gas imo yall just didn't see the vision 🎮</p>
                  <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                    <img
                      className="w-full h-80 object-cover"
                      src="/MultiVersus_Cover_Art.png"
                      alt="MultiVersus Cover Art"
                    />
                  </div>
                  <div className="flex items-center gap-6 text-slate-300">
                    <button className="flex items-center gap-2 hover:text-red-400 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span className="font-semibold">100.1k</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M21 12.5C21 13.8807 19.8807 15 18.5 15C18.0322 15 17.6052 14.8442 17.25 14.6177C16.9441 15.1191 16.2502 15.5 15.5 15.5C13.8431 15.5 12.5 14.1569 12.5 12.5C12.5 10.8431 13.8431 9.5 15.5 9.5C16.2502 9.5 16.9441 9.88088 17.25 10.3823C17.6052 10.1558 18.0322 10 18.5 10C19.8807 10 21 11.1193 21 12.5ZM3 7.5C3 6.11929 4.11929 5 5.5 5C6.03219 5 6.44977 5.15581 6.75 5.3823C7.05596 4.88089 7.74983 4.5 8.5 4.5C10.1569 4.5 11.5 5.84314 11.5 7.5C11.5 9.15686 10.1569 10.5 8.5 10.5C7.74983 10.5 7.05596 10.1191 6.75 9.6177C6.44977 9.84419 6.03219 10 5.5 10C4.11929 10 3 8.88071 3 7.5ZM8.5 14.5C10.1569 14.5 11.5 15.8431 11.5 17.5C11.5 19.1569 10.1569 20.5 8.5 20.5C6.84314 20.5 5.5 19.1569 5.5 17.5C5.5 15.8431 6.84314 14.5 8.5 14.5Z"/>
                      </svg>
                      <span className="font-semibold">10.1k</span>
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
                      <h3 className="font-bold text-white">Uzi</h3>
                      <p className="text-sm text-slate-300">@k.MeteorMan · 6h</p>
                    </div>
                    <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-full text-sm transition-colors duration-300">
                      Follow
                    </button>
                  </div>
                  <p className="text-white mt-3 mb-4">I told her aura lol. ✨</p>
                  <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                    
                  </div>
                  <div className="flex items-center gap-6 text-slate-300">
                    <button className="flex items-center gap-2 hover:text-red-400 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span className="font-semibold">8.7k</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M21 12.5C21 13.8807 19.8807 15 18.5 15C18.0322 15 17.6052 14.8442 17.25 14.6177C16.9441 15.1191 16.2502 15.5 15.5 15.5C13.8431 15.5 12.5 14.1569 12.5 12.5C12.5 10.8431 13.8431 9.5 15.5 9.5C16.2502 9.5 16.9441 9.88088 17.25 10.3823C17.6052 10.1558 18.0322 10 18.5 10C19.8807 10 21 11.1193 21 12.5ZM3 7.5C3 6.11929 4.11929 5 5.5 5C6.03219 5 6.44977 5.15581 6.75 5.3823C7.05596 4.88089 7.74983 4.5 8.5 4.5C10.1569 4.5 11.5 5.84314 11.5 7.5C11.5 9.15686 10.1569 10.5 8.5 10.5C7.74983 10.5 7.05596 10.1191 6.75 9.6177C6.44977 9.84419 6.03219 10 5.5 10C4.11929 10 3 8.88071 3 7.5ZM8.5 14.5C10.1569 14.5 11.5 15.8431 11.5 17.5C11.5 19.1569 10.1569 20.5 8.5 20.5C6.84314 20.5 5.5 19.1569 5.5 17.5C5.5 15.8431 6.84314 14.5 8.5 14.5Z"/>
                      </svg>
                      <span className="font-semibold">2.5k</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Post 3 */}
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
                      <p className="text-sm text-slate-300">@k.KatekyoGamingidk · 1d</p>
                    </div>
                    <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-full text-sm transition-colors duration-300">
                      Follow
                    </button>
                  </div>
                  <p className="text-white mt-3 mb-4">Solo Leveling in the big 25 LMAO 🔥</p>
                  <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                    
                  </div>
                  <div className="flex items-center gap-6 text-slate-300">
                    <button className="flex items-center gap-2 hover:text-red-400 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span className="font-semibold">15.2k</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M21 12.5C21 13.8807 19.8807 15 18.5 15C18.0322 15 17.6052 14.8442 17.25 14.6177C16.9441 15.1191 16.2502 15.5 15.5 15.5C13.8431 15.5 12.5 14.1569 12.5 12.5C12.5 10.8431 13.8431 9.5 15.5 9.5C16.2502 9.5 16.9441 9.88088 17.25 10.3823C17.6052 10.1558 18.0322 10 18.5 10C19.8807 10 21 11.1193 21 12.5ZM3 7.5C3 6.11929 4.11929 5 5.5 5C6.03219 5 6.44977 5.15581 6.75 5.3823C7.05596 4.88089 7.74983 4.5 8.5 4.5C10.1569 4.5 11.5 5.84314 11.5 7.5C11.5 9.15686 10.1569 10.5 8.5 10.5C7.74983 10.5 7.05596 10.1191 6.75 9.6177C6.44977 9.84419 6.03219 10 5.5 10C4.11929 10 3 8.88071 3 7.5ZM8.5 14.5C10.1569 14.5 11.5 15.8431 11.5 17.5C11.5 19.1569 10.1569 20.5 8.5 20.5C6.84314 20.5 5.5 19.1569 5.5 17.5C5.5 15.8431 6.84314 14.5 8.5 14.5Z"/>
                      </svg>
                      <span className="font-semibold">5.8k</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
                      <p className="text-sm text-slate-300">@k.KatekyoGamingidk · 1d</p>
                    </div>
                    <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-full text-sm transition-colors duration-300">
                      Follow
                    </button>
                  </div>
                  <p className="text-white mt-3 mb-4">Solo Leveling in the big 25 LMAO 🔥</p>
                  <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                    
                  </div>
                  <div className="flex items-center gap-6 text-slate-300">
                    <button className="flex items-center gap-2 hover:text-red-400 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span className="font-semibold">15.2k</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M21 12.5C21 13.8807 19.8807 15 18.5 15C18.0322 15 17.6052 14.8442 17.25 14.6177C16.9441 15.1191 16.2502 15.5 15.5 15.5C13.8431 15.5 12.5 14.1569 12.5 12.5C12.5 10.8431 13.8431 9.5 15.5 9.5C16.2502 9.5 16.9441 9.88088 17.25 10.3823C17.6052 10.1558 18.0322 10 18.5 10C19.8807 10 21 11.1193 21 12.5ZM3 7.5C3 6.11929 4.11929 5 5.5 5C6.03219 5 6.44977 5.15581 6.75 5.3823C7.05596 4.88089 7.74983 4.5 8.5 4.5C10.1569 4.5 11.5 5.84314 11.5 7.5C11.5 9.15686 10.1569 10.5 8.5 10.5C7.74983 10.5 7.05596 10.1191 6.75 9.6177C6.44977 9.84419 6.03219 10 5.5 10C4.11929 10 3 8.88071 3 7.5ZM8.5 14.5C10.1569 14.5 11.5 15.8431 11.5 17.5C11.5 19.1569 10.1569 20.5 8.5 20.5C6.84314 20.5 5.5 19.1569 5.5 17.5C5.5 15.8431 6.84314 14.5 8.5 14.5Z"/>
                      </svg>
                      <span className="font-semibold">5.8k</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
                      <p className="text-sm text-slate-300">@k.KatekyoGamingidk · 1d</p>
                    </div>
                    <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-full text-sm transition-colors duration-300">
                      Follow
                    </button>
                  </div>
                  <p className="text-white mt-3 mb-4">Solo Leveling in the big 25 LMAO 🔥</p>
                  <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                    
                  </div>
                  <div className="flex items-center gap-6 text-slate-300">
                    <button className="flex items-center gap-2 hover:text-red-400 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span className="font-semibold">15.2k</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M21 12.5C21 13.8807 19.8807 15 18.5 15C18.0322 15 17.6052 14.8442 17.25 14.6177C16.9441 15.1191 16.2502 15.5 15.5 15.5C13.8431 15.5 12.5 14.1569 12.5 12.5C12.5 10.8431 13.8431 9.5 15.5 9.5C16.2502 9.5 16.9441 9.88088 17.25 10.3823C17.6052 10.1558 18.0322 10 18.5 10C19.8807 10 21 11.1193 21 12.5ZM3 7.5C3 6.11929 4.11929 5 5.5 5C6.03219 5 6.44977 5.15581 6.75 5.3823C7.05596 4.88089 7.74983 4.5 8.5 4.5C10.1569 4.5 11.5 5.84314 11.5 7.5C11.5 9.15686 10.1569 10.5 8.5 10.5C7.74983 10.5 7.05596 10.1191 6.75 9.6177C6.44977 9.84419 6.03219 10 5.5 10C4.11929 10 3 8.88071 3 7.5ZM8.5 14.5C10.1569 14.5 11.5 15.8431 11.5 17.5C11.5 19.1569 10.1569 20.5 8.5 20.5C6.84314 20.5 5.5 19.1569 5.5 17.5C5.5 15.8431 6.84314 14.5 8.5 14.5Z"/>
                      </svg>
                      <span className="font-semibold">5.8k</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Widgets */}
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-8">
            {/* Recommended Songs */}
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/20">
              <h3 className="font-bold text-white text-xl mb">Recommended Songs</h3>
              <div className="hidden group-hover:block flex flex-col gap-4">
                {/* Song 1 */}
                <div className="flex items-center gap-4">
                  <img src="/song1.png" alt="Song 1" className="w-12 h-12 rounded-lg object-cover" />
                  <div>
                    <p className="font-semibold text-white">Gambino</p>
                    <p className="text-sm text-slate-300">3005</p>
                  </div>
                </div>
                {/* Song 2 */}
                <div className="flex items-center gap-4">
                  <img src="/song2.png" alt="Song 2" className="w-12 h-12 rounded-lg object-cover" />
                  <div>
                    <p className="font-semibold text-white">ANRI</p>
                    <p className="text-sm text-slate-300">DRIVING MY LOVE</p>
                  </div>
                </div>
                {/* Song 3 */}
                <div className="flex items-center gap-4">
                  <img src="/song3.png" alt="Song 3" className="w-12 h-12 rounded-lg object-cover" />
                  <div>
                    <p className="font-semibold text-white">WTHELLY</p>
                    <p className="text-sm text-slate-300">ROB49</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Friends Listening */}
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/20">
              <h3 className="font-bold text-white text-xl">Friends Listening</h3>
              <div className="hidden group-hover:block flex flex-col gap-4">
                {/* Friend 1 */}
                <div className="flex items-center gap-4">
                  <Image src="/Kumomi_logo.png" alt="Friend 1" width={40} height={40} className="rounded-full" />
                  <div>
                    <p className="font-semibold text-white">carti</p>
                    <p className="text-sm text-slate-300">H00DBYAIR - Playboi Carti</p>
                  </div>
                </div>
                {/* Friend 2 */}
                <div className="flex items-center gap-4">
                  <Image src="/Kumomi_logo.png" alt="Friend 2" width={40} height={40} className="rounded-full" />
                  <div>
                    <p className="font-semibold text-white">ye</p>
                    <p className="text-sm text-slate-300">HH - Kanye West</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Discover Friends Section */}
            <div className="col-span-12">
              <div className="group bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/20">
                <h3 className="font-bold text-white text-xl">Discover Friends</h3>
                <div className="hidden group-hover:block grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Friend Card 1 */}
                  <div className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-colors duration-300 flex flex-col items-center justify-center m-4">
                    <Image src="/Kumomi_logo.png" alt="Friend 1" width={73} height={73} className="rounded-full" />
                    <h4 className="font-bold text-white text-lg">Frank</h4>
                    <p className="text-slate-300 text-sm">@frankocean</p>
                    <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-6 rounded-full text-sm transition-colors duration-300">
                      Follow
                    </button>
                  </div>
                  {/* Friend Card 2 */}
                  <div className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-colors duration-300 flex flex-col items-center justify-center m-4">
                    <Image src="/Kumomi_logo.png" alt="Friend 2" width={73} height={73} className="rounded-full" />
                    <h4 className="font-bold text-white text-lg">Tyler</h4>
                    <p className="text-slate-300 text-sm">@tylerthecreator</p>
                    <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-6 rounded-full text-sm transition-colors duration-300">
                      Follow
                    </button>
                  </div>
                  {/* Friend Card 3 */}
                  <div className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-colors duration-300 flex flex-col items-center justify-center m-4">
                    <Image src="/Kumomi_logo.png" alt="Friend 3" width={73} height={73} className="rounded-full" />
                    <h4 className="font-bold text-white text-lg">SZA</h4>
                    <p className="text-slate-300 text-sm">@sza</p>
                    <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-6 rounded-full text-sm transition-colors duration-300">
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8 z-20">
          <button className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-xl hover:shadow-2xl text-white text-2xl hover:scale-110 transition-all duration-300">
            +
          </button>
        </div>
      </main>
    </div>
  );
}
