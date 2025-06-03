import Link from "next/link";
import Image from "next/image";
import localFont from "@next/font/local"; // Import localFont function


export default function SignUp() {
  return (
    <div
      className=' flex flex-col items-center justify-center min-h-screen bg-sky-pattern'
    >
      <header className="text-center mb-5">
        <Image className="mx-auto"
          src="/Kumomi_logo.png" 
          alt="Kumomi logo"
          width={180}
          height={38}
          
          priority
        />
        <h1 className="text-4xl text-white mt-4">WELCOME TO KUMOMI</h1>
        <p className="text-lg text-white mt-2">Join the skies today!</p>
      </header>

      <main className="flex flex-col items-center gap-8 w-full max-w-md">
        <form className="bg-white p-8 rounded-3xl shadow-lg w-full">
        <div className="mb-2">
            <label className="block ml-2 text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="username"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block ml-2 text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block ml-2 text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
            <label className="block ml-2 text-gray-700 text-sm font-bold mb-2" htmlFor="confirmpassword">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmpassword"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-300 hover:bg-blue-100 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
            <Link href="/signin" className="inline-block align-baseline font-bold text-sm text-blue-300 hover:text-blue-100">
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