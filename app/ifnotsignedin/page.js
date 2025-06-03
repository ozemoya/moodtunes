import Link from "next/link";
import Image from "next/image";
import localFont from "@next/font/local"; // Import localFont function
// if not signed in we will show this page

export default function SignIn() {
  return (
    <div className='flex flex-row items-center justify-center min-h-screen p-8 bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 animate-gradient'>
      {/* Login Section */}
      <div id="login" className='flex flex-col items-center justify-center w-1/2 p-8'>
        <Image className="mx-auto"
            src="/Kumomi_logo.png" 
            alt="Kumomi logo"
            width={400}
            height={38}
            priority
          />
        

      </div>

      {/* Sign Up Section */}
      <div id="signup" className='flex flex-col items-center justify-center w-1/2 p-8'>
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mt-4">Welcome to Kumomi! </h1>
          <p className="text-lg text-white mt-2">Log in or Sign Up and join the fun!</p>
        </header>
        
        <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded mt-4">
          Log in
        </button>
        
        <Link href="/signup">
          <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded mt-4">
            Sign Up
          </button>
        </Link>
       
      </div>
    </div>
  );
}       