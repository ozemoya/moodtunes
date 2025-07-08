'use client';
import Image from 'next/image';
import Link from 'next/link';
import AppNavbar from '../components/Navbar.jsx';

const IfNotSignedIn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-sky-200 to-blue-500 text-white font-sans overflow-x-hidden">
      <AppNavbar />

      {/* Decorative Clouds */}
      <div className="absolute inset-0 z-0 opacity-50">
       
      </div>

      <main className="relative z-10">
        {/* Access Required Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center p-4">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 max-w-2xl mx-auto">
            <Image src="/Kumomi_logo.png" alt="Kumomi Logo" width={100} height={100} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">Access Your Cloud</h1>
            <p className="text-lg md:text-xl mb-8 text-sky-100 max-w-2xl mx-auto">
              Please sign in or create an account to continue your personalized music journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signin" className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Sign In
              </Link>
              <Link href="/signup" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Sign Up
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full z-10 bg-black/20 text-center py-6 px-4 backdrop-blur-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sky-200">&copy; 2025 Kumomi. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/about" className="text-sky-200 hover:text-white transition-colors">About</Link>
            <Link href="/privacy" className="text-sky-200 hover:text-white transition-colors">Privacy</Link>
            <Link href="/contact" className="text-sky-200 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IfNotSignedIn;