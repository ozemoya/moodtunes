import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500`}
    >
      <header className="text-center mb-16">
        {/* <Image
          src="/moodtunes.png"
          alt="MoodTunes logo"
          width={180}
          height={38}
          priority
        /> */}
        <h1 className="text-4xl font-bold text-white mt-4">Welcome to MoodTunes</h1>
        <p className="text-lg text-white mt-2">Your personalized music experience</p>
      </header>

      <main className="flex flex-col items-center gap-8">
        <button className="bg-white text-purple-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-purple-100 transition">
          Get Started
        </button>
        <button className="bg-white text-purple-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-purple-100 transition">
          Explore Playlists
        </button>
      </main>

      <footer className="mt-16 text-white">
        <p>&copy; 2024 MoodTunes. All rights reserved.</p>
      </footer>
    </div>
  );
}
