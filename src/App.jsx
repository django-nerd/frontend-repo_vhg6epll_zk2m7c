import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top nav */}
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-xl">DataChat DAX</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#showcase" className="hover:text-gray-900">Showcase</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          </nav>
          <a href="#pricing" className="rounded-lg bg-gray-900 text-white px-3 py-1.5 text-sm hover:bg-black">Start</a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
      </main>

      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} DataChat DAX. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-gray-900" href="#features">Features</a>
            <a className="hover:text-gray-900" href="#pricing">Pricing</a>
            <a className="hover:text-gray-900" href="#showcase">Showcase</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
