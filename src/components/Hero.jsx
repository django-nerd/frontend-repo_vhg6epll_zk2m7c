import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">AI Copilot for Power BI</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Chat with your data. Generate DAX in seconds.
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-xl">
            A playful, futuristic chatbot that writes accurate DAX, explains results, and answers business questions in plain English—right inside your Power BI workflow.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <Rocket className="h-5 w-5" />
              Get Started
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
            >
              See it in action
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex -space-x-2">
              <img alt="user" className="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=120&auto=format&fit=crop" />
              <img alt="user" className="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=120&auto=format&fit=crop" />
              <img alt="user" className="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHx1c2VyfGVufDB8MHx8fDE3NjIzODU4NTF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" />
            </div>
            <span>Trusted by modern data teams</span>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[560px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-lg ring-1 ring-gray-100 bg-white">
            <Spline scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 z-0 blur-3xl" aria-hidden="true">
        <div className="mx-auto h-56 w-[36rem] -translate-y-1/2 bg-gradient-to-tr from-emerald-300 via-cyan-300 to-blue-300 opacity-40" />
      </div>
    </section>
  );
}
