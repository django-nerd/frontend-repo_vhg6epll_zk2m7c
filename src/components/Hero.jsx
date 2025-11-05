import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden" id="home">
      {/* Full-width Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlays that don't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-36 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">AI Copilot for Power BI</span>
          </div>

          <motion.h1
            className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
          >
            Chat with your data. Generate DAX in seconds.
          </motion.h1>

          <motion.p
            className="mt-5 text-lg text-gray-600"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          >
            A modern chatbot that writes accurate DAX, explains results, and answers business questions in plain English—right inside your Power BI workflow.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <Rocket className="h-5 w-5" />
              Get Started
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center gap-2 rounded-lg bg-white/80 backdrop-blur px-5 py-3 text-gray-900 ring-1 ring-gray-200 hover:bg-white"
            >
              See it in action
            </a>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center gap-6 text-sm text-gray-600"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="flex -space-x-2">
              <img alt="user" className="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=120&auto=format&fit=crop" />
              <img alt="user" className="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=120&auto=format&fit=crop" />
              <img alt="user" className="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" />
            </div>
            <span>Trusted by modern data teams</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
