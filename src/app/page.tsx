'use client';
import { useState } from 'react';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-pulse">
          Kaushiki! 💪
        </h1>
        <p className="text-2xl mb-12">Are you ready to get stronger?</p>
        <button 
          onClick={() => setShowContent(true)}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-12 rounded-full text-2xl transform hover:scale-110 transition-transform shadow-lg hover:shadow-xl"
        >
          Let&apos;s Begin!
        </button>
      </div>
    </div>
  );

  const MainContent = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 text-white">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-pulse">
            Hey Kaushiki! 💪
          </h1>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12">
            <p className="text-2xl md:text-3xl font-semibold mb-6">
              &quot;The only bad workout is the one that didn&apos;t happen&quot;
            </p>
            <p className="text-xl text-gray-200">
              Every step you take in the gym is a step towards a stronger, healthier you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4">Strength</h3>
              <p className="text-gray-200">Build your power, both inside and out</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4">Discipline</h3>
              <p className="text-gray-200">Consistency is the key to success</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4">Growth</h3>
              <p className="text-gray-200">Every day, you&apos;re becoming better</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">Today&apos;s Motivation</h2>
            <p className="text-xl mb-8">
              Remember why you started. Every drop of sweat is a step closer to your goals. 
              You&apos;ve got this! 💪
            </p>
            <button 
              onClick={() => setShowContent(false)}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg transform hover:scale-105 transition-transform"
            >
              Back to Start
            </button>
          </div>
        </div>
      </main>
    </div>
  );

  return showContent ? <MainContent /> : <LandingPage />;
}
