import React from "react";
import Image from "next/image";
import AppNavbar from "../components/Navbar.jsx";

export default function Homepage() {
  return (
    <div className="flex flex-row">
      <div className="w-50">
        <AppNavbar />
      </div>
      <div className="bg-blue-200 w-screen px-2 text-black flex justify-center items-center min-h-screen">
       
         
        
        <div className="flex flex-col gap-8 w-full mt-8 ">
          {/* Post 1 */}
          <div className="flex flex-col bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-300">
                <Image
                  src="/Kumomi_logo.png"
                  alt="User Avatar"
                  width={56}
                  height={56}
                  priority
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">LeBron</h2>
                <p className="text-sm text-gray-600">k.theGoat</p>
              </div>
            </div>
            <p className="py-4 text-lg">I think Multiversus was gas imo yall just didn't see the vision</p>
            <img
              className="w-full h-80 object-cover rounded-lg"
              src="https://placehold.co/623x323"
              alt="Post Image"
            />
            <div className="flex gap-6 mt-4">
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span className="font-bold text-sm">100.1k</span>
              </div>
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path
                    d="M21 12.5C21 13.8807 19.8807 15 18.5 15C18.0322 15 17.6052 14.8442 17.25 14.6177C16.9441 15.1191 16.2502 15.5 15.5 15.5C13.8431 15.5 12.5 14.1569 12.5 12.5C12.5 10.8431 13.8431 9.5 15.5 9.5C16.2502 9.5 16.9441 9.88088 17.25 10.3823C17.6052 10.1558 18.0322 10 18.5 10C19.8807 10 21 11.1193 21 12.5ZM3 7.5C3 6.11929 4.11929 5 5.5 5C6.03219 5 6.44977 5.15581 6.75 5.3823C7.05596 4.88089 7.74983 4.5 8.5 4.5C10.1569 4.5 11.5 5.84314 11.5 7.5C11.5 9.15686 10.1569 10.5 8.5 10.5C7.74983 10.5 7.05596 10.1191 6.75 9.6177C6.44977 9.84419 6.03219 10 5.5 10C4.11929 10 3 8.88071 3 7.5ZM8.5 14.5C10.1569 14.5 11.5 15.8431 11.5 17.5C11.5 19.1569 10.1569 20.5 8.5 20.5C6.84314 20.5 5.5 19.1569 5.5 17.5C5.5 15.8431 6.84314 14.5 8.5 14.5Z"
                  />
                </svg>
                <span className="font-bold text-sm">10.1k</span>
              </div>
            </div>
          </div>

          {/* Post 2 */}
          <div className="flex flex-col bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-300">
                <Image
                  src="/Kumomi_logo.png"
                  alt="User Avatar"
                  width={56}
                  height={56}
                  priority
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">Uzi</h2>
                <p className="text-sm text-gray-600">k.MeteorMan</p>
              </div>
            </div>
            <p className="py-4 text-lg">I Told her aura lol.</p>
            
            <div className="flex gap-6 mt-4">
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span className="font-bold text-sm">100.1k</span>
              </div>
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path
                    d="M21 12.5C21 13.8807 19.8807 15 18.5 15C18.0322 15 17.6052 14.8442 17.25 14.6177C16.9441 15.1191 16.2502 15.5 15.5 15.5C13.8431 15.5 12.5 14.1569 12.5 12.5C12.5 10.8431 13.8431 9.5 15.5 9.5C16.2502 9.5 16.9441 9.88088 17.25 10.3823C17.6052 10.1558 18.0322 10 18.5 10C19.8807 10 21 11.1193 21 12.5ZM3 7.5C3 6.11929 4.11929 5 5.5 5C6.03219 5 6.44977 5.15581 6.75 5.3823C7.05596 4.88089 7.74983 4.5 8.5 4.5C10.1569 4.5 11.5 5.84314 11.5 7.5C11.5 9.15686 10.1569 10.5 8.5 10.5C7.74983 10.5 7.05596 10.1191 6.75 9.6177C6.44977 9.84419 6.03219 10 5.5 10C4.11929 10 3 8.88071 3 7.5ZM8.5 14.5C10.1569 14.5 11.5 15.8431 11.5 17.5C11.5 19.1569 10.1569 20.5 8.5 20.5C6.84314 20.5 5.5 19.1569 5.5 17.5C5.5 15.8431 6.84314 14.5 8.5 14.5Z"
                  />
                </svg>
                <span className="font-bold text-sm">10.1k</span>
              </div>
            </div>
          </div>

          {/* Post 3 */}
          <div className="flex flex-col bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-300">
                <Image
                  src="/Kumomi_logo.png"
                  alt="User Avatar"
                  width={56}
                  height={56}
                  priority
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">Ahmed</h2>
                <p className="text-sm text-gray-600">k.KatekyoGamingidk</p>
              </div>
            </div>
            <p className="py-4 text-lg">Solo Leveling in the big 25 LMAO</p>
            
            <div className="flex gap-6 mt-4">
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span className="font-bold text-sm">100.1k</span>
              </div>
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path
                    d="M21 12.5C21 13.8807 19.8807 15 18.5 15C18.0322 15 17.6052 14.8442 17.25 14.6177C16.9441 15.1191 16.2502 15.5 15.5 15.5C13.8431 15.5 12.5 14.1569 12.5 12.5C12.5 10.8431 13.8431 9.5 15.5 9.5C16.2502 9.5 16.9441 9.88088 17.25 10.3823C17.6052 10.1558 18.0322 10 18.5 10C19.8807 10 21 11.1193 21 12.5ZM3 7.5C3 6.11929 4.11929 5 5.5 5C6.03219 5 6.44977 5.15581 6.75 5.3823C7.05596 4.88089 7.74983 4.5 8.5 4.5C10.1569 4.5 11.5 5.84314 11.5 7.5C11.5 9.15686 10.1569 10.5 8.5 10.5C7.74983 10.5 7.05596 10.1191 6.75 9.6177C6.44977 9.84419 6.03219 10 5.5 10C4.11929 10 3 8.88071 3 7.5ZM8.5 14.5C10.1569 14.5 11.5 15.8431 11.5 17.5C11.5 19.1569 10.1569 20.5 8.5 20.5C6.84314 20.5 5.5 19.1569 5.5 17.5C5.5 15.8431 6.84314 14.5 8.5 14.5Z"
                  />
                </svg>
                <span className="font-bold text-sm">10.1k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
