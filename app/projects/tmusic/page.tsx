"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function TMusicPage() {
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-16 px-6 md:px-16 max-w-4xl mx-auto">
      {/* Modal for expanded images */}
      {modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setModalImg(null)}
        >
          <img
            src={modalImg}
            alt="Expanded UI Screenshot"
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl border-4 border-white"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      <Link
        href="/#projects"
        className="inline-flex items-center text-purple mb-12 hover:underline"
      >
        <FaArrowLeft className="mr-2" /> Back to Projects
      </Link>

      <h1 className="text-4xl md:text-5xl font-bold mb-8">
        TMUsic - Music Social App
      </h1>
      <p className="text-lg text-[#BEC1DD] mb-12 leading-relaxed">
        TMUsic is a full-stack web application that enables users to create profiles, share their favorite tracks, discover new music, and connect with other music lovers. The platform features real-time interactions, personalized recommendations, and a seamless user experience. Through secure authentication and optimized backend routes, we reduced authentication errors by 25% while maintaining robust data integrity.
      </p>

      {/* User Interface Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">User Interface</h2>
        <div className="space-y-10">
          {/* Landing Page */}
          <div>
            <div className="w-full max-w-3xl mx-auto rounded-lg mb-4 overflow-hidden">
              <img
                src="/tmusic_home.png"
                alt="TMUsic Landing Page"
                className="w-full h-auto cursor-pointer"
                onClick={() => setModalImg("/tmusic_home.png")}
                style={{ display: "block" }}
              />
            </div>
            <p className="text-[#BEC1DD] mb-2 leading-relaxed">
              <b>Landing Page:</b> Clean, modern entry point with TMUsic branding, quick access to login/register, and Spotify partnership badge.
            </p>
          </div>
          {/* Login Page */}
          <div>
            <div className="w-full max-w-md mx-auto rounded-lg mb-4 overflow-hidden">
              <img
                src="/tmusic_login.png"
                alt="TMUsic Login Page"
                className="w-full h-auto cursor-pointer"
                onClick={() => setModalImg("/tmusic_login.png")}
                style={{ display: "block" }}
              />
            </div>
            <p className="text-[#BEC1DD] mb-2 leading-relaxed">
              <b>Login Page:</b> Secure login with email/password and Google OAuth. Simple, accessible form design.
            </p>
          </div>
          {/* Spotify Auth Page */}
          <div>
            <div className="w-full max-w-md mx-auto rounded-lg mb-4 overflow-hidden">
              <img
                src="/tmusic_spotify.png"
                alt="Spotify Authentication"
                className="w-full h-auto cursor-pointer"
                onClick={() => setModalImg("/tmusic_spotify.png")}
                style={{ display: "block" }}
              />
            </div>
            <p className="text-[#BEC1DD] mb-2 leading-relaxed">
              <b>Spotify Authentication:</b> OAuth flow for connecting user accounts to Spotify, enabling music streaming and sharing.
            </p>
          </div>
          {/* Feed Page */}
          <div>
            <div className="w-full max-w-3xl mx-auto rounded-lg mb-4 overflow-hidden">
              <img
                src="/tmusic_dashboard.png"
                alt="TMUsic Feed Page"
                className="w-full h-auto cursor-pointer"
                onClick={() => setModalImg("/tmusic_dashboard.png")}
                style={{ display: "block" }}
              />
            </div>
            <p className="text-[#BEC1DD] mb-2 leading-relaxed">
              <b>Music Feed:</b> Users can post, like, comment, and listen to songs. Album art and user avatars enhance the social experience.
            </p>
          </div>
          {/* Chat Page */}
          <div>
            <div className="w-full max-w-3xl mx-auto rounded-lg mb-4 overflow-hidden">
              <img
                src="/tmusic_chat.png"
                alt="TMUsic Chat Page"
                className="w-full h-auto cursor-pointer"
                onClick={() => setModalImg("/tmusic_chat.png")}
                style={{ display: "block" }}
              />
            </div>
            <p className="text-[#BEC1DD] mb-2 leading-relaxed">
              <b>Chat & Messaging:</b> Real-time messaging with a familiar sidebar layout, user details, and conversation management.
            </p>
          </div>
          {/* Profile Page */}
          <div>
            <div className="w-full max-w-2xl mx-auto rounded-lg mb-4 overflow-hidden">
              <img
                src="/tmusic_profile.png"
                alt="TMUsic Profile Page"
                className="w-full h-auto cursor-pointer"
                onClick={() => setModalImg("/tmusic_profile.png")}
                style={{ display: "block" }}
              />
            </div>
            <p className="text-[#BEC1DD] mb-2 leading-relaxed">
              <b>Profile Management:</b> Users can update their profile info, change passwords, and manage account security in a clean, organized interface.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#181B34] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple mb-4">Music Discovery</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[#BEC1DD]">
                <span className="text-purple text-lg mt-1">•</span>
                <span>Advanced music recommendation engine powered by Spotify API</span>
              </li>
              <li className="flex items-start gap-2 text-[#BEC1DD]">
                <span className="text-purple text-lg mt-1">•</span>
                <span>Personalized playlists and suggestions</span>
              </li>
              <li className="flex items-start gap-2 text-[#BEC1DD]">
                <span className="text-purple text-lg mt-1">•</span>
                <span>Trending tracks and artists</span>
              </li>
            </ul>
          </div>
          <div className="bg-[#181B34] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple mb-4">Social Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[#BEC1DD]">
                <span className="text-purple text-lg mt-1">•</span>
                <span>User profiles with Google OAuth integration</span>
              </li>
              <li className="flex items-start gap-2 text-[#BEC1DD]">
                <span className="text-purple text-lg mt-1">•</span>
                <span>Real-time notifications and interactions via Pusher</span>
              </li>
              <li className="flex items-start gap-2 text-[#BEC1DD]">
                <span className="text-purple text-lg mt-1">•</span>
                <span>Music sharing and comments</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-[#444] rounded-lg text-[#BEC1DD]">
            <thead>
              <tr className="bg-[#181B34] text-white">
                <th className="px-4 py-2 border-b border-[#444] text-left">Category</th>
                <th className="px-4 py-2 border-b border-[#444] text-left">Technology</th>
                <th className="px-4 py-2 border-b border-[#444] text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b border-[#444] align-top" rowSpan={3}>Frontend</td>
                <td className="px-4 py-2 border-b border-[#444]">React.js</td>
                <td className="px-4 py-2 border-b border-[#444]">Core UI library for building interactive components</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-[#444]">TypeScript</td>
                <td className="px-4 py-2 border-b border-[#444]">Type-safe JavaScript for better development experience</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-[#444]">Tailwind CSS</td>
                <td className="px-4 py-2 border-b border-[#444]">Utility-first CSS framework for styling</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-[#444] align-top" rowSpan={4}>Backend</td>
                <td className="px-4 py-2 border-b border-[#444]">Laravel</td>
                <td className="px-4 py-2 border-b border-[#444]">PHP framework for robust API development</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-[#444]">Livewire</td>
                <td className="px-4 py-2 border-b border-[#444]">Real-time updates and dynamic interfaces</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-[#444]">Laravel Socialite</td>
                <td className="px-4 py-2 border-b border-[#444]">OAuth authentication with Google</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-[#444]">MySQL</td>
                <td className="px-4 py-2 border-b border-[#444]">Relational database for data storage</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-[#444] align-top" rowSpan={3}>APIs & Services</td>
                <td className="px-4 py-2 border-b border-[#444]">Spotify API</td>
                <td className="px-4 py-2 border-b border-[#444]">Music streaming and discovery features</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-[#444]">Google OAuth</td>
                <td className="px-4 py-2 border-b border-[#444]">Secure user authentication</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-[#444]">Pusher</td>
                <td className="px-4 py-2 border-b border-[#444]">Real-time event broadcasting</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Implementation Details */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Implementation Details</h2>
        <div className="space-y-6">
          <div className="bg-[#181B34] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple mb-4">Architecture</h3>
            <p className="text-[#BEC1DD] leading-relaxed">
              The application follows a modern microservices architecture with separate frontend and backend services. The frontend is built with React and communicates with the Laravel backend through RESTful APIs. Real-time features are implemented using Pusher for event broadcasting, while Spotify API integration enables rich music discovery features.
            </p>
          </div>
          <div className="bg-[#181B34] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple mb-4">Security & Performance</h3>
            <p className="text-[#BEC1DD] leading-relaxed">
              Implemented JWT authentication, Google OAuth integration via Laravel Socialite, and CSRF protection. User data is encrypted and stored securely in the database. Through optimized backend routes and Livewire integration, we achieved a 25% reduction in authentication errors while maintaining robust data integrity.
            </p>
          </div>
        </div>
      </section>

      {/* How to Run the Project */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">How to Run the Project</h2>
        <p className="text-[#BEC1DD] mb-2">Open terminal and run:</p>
        <pre className="bg-[#181B34] text-[#BEC1DD] rounded-lg p-4 mb-4 overflow-x-auto"><code>{`git pull
composer install
php artisan migrate:fresh --seed
php artisan route:clear`}</code></pre>
        <p className="text-[#BEC1DD] mb-2">And then in another terminal:</p>
        <pre className="bg-[#181B34] text-[#BEC1DD] rounded-lg p-4 overflow-x-auto"><code>{`php artisan serve
# In another terminal, run:
npm install
npm run dev`}</code></pre>
      </section>

      {/* GitHub Button */}
      <div className="flex justify-center my-12">
        <a
          href="https://github.com/vijaysatchi/tmu-music"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.68 5.41-5.24 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
          </svg>
          View on GitHub
        </a>
      </div>
    </div>
  );
} 