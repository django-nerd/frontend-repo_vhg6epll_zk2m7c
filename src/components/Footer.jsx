import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} DataChat DAX. All rights reserved.</p>
        <nav className="flex gap-6 text-sm text-gray-600">
          <a className="hover:text-gray-900" href="#features">Features</a>
          <a className="hover:text-gray-900" href="#pricing">Pricing</a>
          <a className="hover:text-gray-900" href="#showcase">Showcase</a>
        </nav>
      </div>
    </footer>
  );
}
