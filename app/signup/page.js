import Link from "next/link";
import Image from "next/image";
import localFont from "@next/font/local"; // Import localFont function


export default function SignUp() {
  return (
    <div
      className='flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 animate-gradient'
    >
      <header className="text-center mb-16">
        <Image className="mx-auto"
          src="/Kumomi_logo.png" 
          alt="Kumomi logo"
          width={180}
          height={38}
          
          priority
        />
        <h1 className="text-4xl font-bold text-white mt-4">Sign Up</h1>
        <p className="text-lg text-white mt-2">Welcome to Kumomi!</p>
      </header>

      <main className="flex flex-col items-center gap-8 w-full max-w-md">
        <form className="bg-white p-8 rounded-lg shadow-lg w-full">
        <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="username"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmpassword">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmpassword"
              type="confirmpassword"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
            <Link href="/have-account" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Already have an account?
            </Link>
          </div>
        </form>
      </main>

      <footer className="mt-16 text-white">
        <p className="p-4 mb-4">&copy; 2024 Kumomi. All rights reserved.</p>
      </footer>
    </div>
  );
}