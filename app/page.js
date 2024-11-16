import Image from 'next/image';
import Link from 'next/link';
import AppNavbar from './components/Navbar.jsx';// Import the new Navbar component

const HomePage = () => {
  return (
    <div className="bg-blue-600 min-h-screen bg-gradient-to-r from-blue-400 via-white to-cyan-400">
      {/* Header */}
      <header className="bg-gradient-to-b from-blue-600 via-blue-500 to-blue-600 shadow p-0">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <AppNavbar /> {/* Add the new Navbar component */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Kumomi</h2>
          <p className="text-lg mb-8">Your personalized music experience</p>
          <Link href="/signup" className="bg-white text-blue-500 font-bold py-2 px-4 rounded">
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-blue-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Visualizing</h3>
              <p className="text-gray-700">The ability to visualize certain statistics related to the user, e.g plays of artists</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Discuss Music</h3>
              <p className="text-gray-700">Ability to rank and discuss favorite albums/songs</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Connect with Artists</h3>
              <p className="text-gray-700">Will get instant updates when new music drops</p>
            </div>
          </div>
        </div>
      </section>

          {/* Timeline */}
          <section className="py-20 text-black bg-blue-500">
      <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Timeline</h2>
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
      <footer className="bg-white shadow mt-8">
        <div className="container mx-auto px-4 py-4 text-center">
          <p className="text-gray-700">&copy; 2024 Kumomi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;