'use client';
import { useState } from 'react';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-pulse text-yellow-300">
          Hey Kaushiki! 🔥
        </h1>
        <p className="text-2xl mb-12 text-yellow-200">NEW UPDATE: Your fitness journey starts now!</p>
        <button 
          onClick={() => setShowContent(true)}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-12 rounded-full text-2xl transform hover:scale-110 transition-transform shadow-lg hover:shadow-xl"
        >
          Let&apos;s Begin!
        </button>
      </div>
    </div>
  );

  const MainContent = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 text-white">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-pulse text-yellow-300">
            UPDATED: Kaushiki&apos;s Fitness Journey!
          </h1>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 border-2 border-yellow-300">
            <p className="text-2xl md:text-3xl font-semibold mb-6 text-yellow-200">
              &quot;Fitness isn&apos;t about being better than someone else, it&apos;s about being better than you used to be&quot;
            </p>
            <p className="text-xl text-gray-200">
              NEW: This is your journey. Own it and crush your goals!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform border border-yellow-300">
              <h3 className="text-2xl font-bold mb-4 text-yellow-200">Dedication</h3>
              <p className="text-gray-200">Consistency beats perfection every time</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform border border-yellow-300">
              <h3 className="text-2xl font-bold mb-4 text-yellow-200">Progress</h3>
              <p className="text-gray-200">Every workout counts. No exceptions.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform border border-yellow-300">
              <h3 className="text-2xl font-bold mb-4 text-yellow-200">Results</h3>
              <p className="text-gray-200">Trust the process. Be patient.</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-yellow-300">
            <h2 className="text-3xl font-bold mb-6 text-yellow-200">UPDATED: Your Daily Challenge</h2>
            <p className="text-xl mb-8">
              Add 5 minutes to your workout today. Small improvements lead to big changes.
              You&apos;ve got this! 🔥 balle bhai
            </p>
            <button 
              onClick={() => setShowContent(false)}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg transform hover:scale-105 transition-transform"
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
