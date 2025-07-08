import Link from "next/link";
import Image from "next/image";
import localFont from "@next/font/local";

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

export default function SignUp() {
  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-sky-300 via-sky-200 to-blue-100 overflow-hidden p-8'>
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

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        <header className="text-center mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/30 mb-6">
            <Image className="mx-auto"
              src="/Kumomi_logo.png" 
              alt="Kumomi logo"
              width={180}
              height={38}
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-white drop-shadow-lg mb-2">WELCOME TO KUMOMI</h1>
          <p className="text-lg text-blue-100">Join the skies today!</p>
        </header>

        <main className="flex flex-col items-center gap-8 w-full">
          <form className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 w-full">
            <div className="mb-6">
              <label className="block ml-2 text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow-lg border border-gray-200 rounded-3xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                id="username"
                type="text"
                placeholder="Choose a username"
              />
            </div>
            <div className="mb-6">
              <label className="block ml-2 text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow-lg border border-gray-200 rounded-3xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block ml-2 text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow-lg border border-gray-200 rounded-3xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                id="password"
                type="password"
                placeholder="Create a password"
              />
            </div>
            <div className="mb-8">
              <label className="block ml-2 text-gray-700 text-sm font-bold mb-2" htmlFor="confirmpassword">
                Confirm Password
              </label>
              <input
                className="shadow-lg border border-gray-200 rounded-3xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                id="confirmpassword"
                type="password"
                placeholder="Confirm your password"
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <button
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                type="button"
              >
                Sign Up
              </button>
              <Link href="/signin" className="text-center font-medium text-blue-600 hover:text-blue-800 transition-colors">
                Already have an account? Sign in
              </Link>
            </div>
          </form>
        </main>

        <footer className="mt-8 text-center">
          <p className="text-white/80 text-sm">&copy; 2024 Kumomi. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}