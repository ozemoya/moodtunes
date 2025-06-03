import Link from "next/link";
import Image from "next/image";
import localFont from "@next/font/local"; // Import localFont function


export default function SignIn() {
  return (
    <div className='flex flex-row items-center justify-center min-h-screen p-8 bg-sky-pattern'>
      {/* Login Section */}
      
      <Image className="flex flex-col mx-50"
              src="/Kumomi_logo.png" 
              alt="Kumomi logo"
              width={600}
              height={600}
              priority
            />
      <div id="login" className='flex flex-col items-center justify-center w-1/2 p-2'>
        <header className="text-center mb-7">
          <h1 className="text-4xl font-(baloo) text-white">WELCOME BACK</h1>
        </header>
        <main className="flex flex-col items-center gap-8 w-full max-w-md">
          <form className="bg-white p-8 rounded-3xl shadow-lg w-full">
            <div className="mb-4">
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
            <div className="mb-6">
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
            <div className="flex flex-col justify-center items-center">
              <button
                className="items-center bg-blue-300 hover:bg-blue-100 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                type="button"
              >
                SIGN IN
              </button>
              <Link href="/signup" className="flex m-2 pt-2 font-bold text-sm text-blue-300 hover:text-blue-100">
                  Sign up
              </Link>
              <Link href="/forgot-password" className="flex m-2 font-bold text-sm text-blue-300 hover:text-blue-100">
                  Forgot Password?
              </Link>
            </div>
            <div>
            </div>
          </form>
            <footer className="-mt-7 text-white">
              <p className="p-4 mb-4">&copy; 2024 Kumomi. All rights reserved.</p>
            </footer>
        </main>
      </div>
    </div>
  );
}