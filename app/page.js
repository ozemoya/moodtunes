import Image from 'next/image';
import Link from 'next/link';
import AppNavbar from './components/Navbar.jsx';// Import the new Navbar component

const HomePage = () => {
  return (
    <div className="bg-blue-600 min-h-screen bg-gradient-to-r from-blue-400 via-white to-cyan-400">
      {/* Header */}

      {/* Hero Section */}
      <section className="bg-blue-300 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Kumomi</h2>
          <p className="text-lg mb-8">Your personalized music experience</p>
          <Link href="/signup" className="bg-white hover:bg-blue-500  text-blue-500 hover:text-white font-bold py-2 px-4 rounded-full">
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-blue-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">FEATURES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-full shadow-lg">
              <h3 className="text-xl text-blue-600 font-bold mb-4">Visualize</h3>
              <p className="text-gray-700">The ability to visualize certain statistics related to the user, e.g plays of artists</p>
            </div>
            <div className="bg-white p-8 rounded-full shadow-lg">
              <h3 className="text-xl text-blue-600 font-bold mb-4">Discuss</h3>
              <p className="text-gray-700">Ability to rank and discuss favorite albums/songs</p>
            </div>
            <div className="bg-white p-8 rounded-full shadow-lg">
              <h3 className="text-xl text-blue-600 font-bold mb-4">Follow</h3>
              <p className="text-gray-700">Will get instant updates when new music drops</p>
            </div>
          </div>
        </div>
      </section>

          {/* Timeline */}
      <section className="py-20 text-black bg-blue-300">
        <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Timeline</h2>
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-start timeline-box">Pulling Data</div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-end timeline-box">Associating Database</div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start timeline-box">User/Homepage</div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-end timeline-box">Login/Feeds</div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start timeline-box">Profile Page</div>
          </li>
        </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-300">
        <div className="container mx-auto px-4 py-4 text-white text-center">
          <p>&copy; 2024 Kumomi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;