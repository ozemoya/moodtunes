import Link from "next/link";
import Image from "next/image";
import localFont from "@next/font/local"; // Import localFont function


export default function SignIn() {
  return (
    <div className='flex flex-row items-center justify-center min-h-screen p-8 bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 animate-gradient'>
      {/* Login Section */}
      <div id="login" className='flex flex-col items-center justify-center w-1/2 p-8'>
        <header className="text-center mb-16">
        <Image className="mx-auto"
            src="/Kumomi_logo.png" 
            alt="Kumomi logo"
            width={180}
            height={38}
            priority
          />

          
          <h1 className="text-4xl font-bold text-white mt-4">Sign In to Kumomi</h1>
          <p className="text-lg text-white mt-2">Welcome back! Please sign in to continue.</p>
        </header>
        <main className="flex flex-col items-center gap-8 w-full max-w-md">
          <form className="bg-white p-8 rounded-lg shadow-lg w-full">
            <div className="mb-4">
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
            <div className="mb-6">
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
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <Link href="/forgot-password" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Forgot Password?
              </Link>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}